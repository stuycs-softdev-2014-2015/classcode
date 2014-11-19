from flask import Flask,request,url_for,redirect,render_template, session
import json,urllib,urllib2
app=Flask(__name__)


@app.route("/login")
def login():
    secrets = json.load(open("secrets.json"))
    rawdata = secrets['request_redirect']
    url = "https://accounts.google.com/o/oauth2/auth"
    data = urllib.urlencode(rawdata)
    req = urllib2.Request(url+"?"+data)
    response = urllib2.urlopen(req)
    return response.read()

@app.route("/oauth2callback")
def oauth2callback():
    if request.args.has_key('error'):
        return 'ERROR'
    code = request.args.get('code')
    secrets = json.load(open('secrets.json'))
    rawdata = secrets['request_token']
    rawdata['code']=code
    url = "https://accounts.google.com/o/oauth2/token"
    data = urllib.urlencode(rawdata)
    req = urllib2.Request(url,data)
    response = urllib2.urlopen(req)
    rawresult = response.read()
    print "-------------------------------------"
    print rawresult
    print "-------------------------------------"
    result = json.loads(rawresult)
    url = "https://www.googleapis.com/oauth2/v1/tokeninfo?id_token=%s"%(result['id_token'])
    req = urllib2.urlopen(url)
    result = req.read()
    result = json.loads(result)
    session['user'] = result['email']
    return redirect("/")
    
@app.route("/")
def index():
    if 'user' in session:
        return "Welcome "+session['user']
    return redirect("/login")



if __name__=="__main__":
   app.debug=True
   app.secret_key = "hello world"
   app.run(host="0.0.0.0",port=3000)
