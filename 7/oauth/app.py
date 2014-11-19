from flask import Flask,request,url_for,redirect,render_template,session
import json, urllib, urllib2

app=Flask(__name__)

secrets = json.load(open("secrets.json"))

@app.route("/")
def index():
    if 'user' not in session:
        return redirect("/login")
    return "<h1>Welcome %s</h1>"%(session['user'])

@app.route("/logout")
def logout():
    session.pop('user',None)
    return redirect('/')

@app.route("/login")
def login():
    url="https://accounts.google.com/o/oauth2/auth"
    data = urllib.urlencode(secrets['request_redirect'])
    req = urllib2.Request(url+"?"+data)
    response = urllib2.urlopen(req)
    result = response.read()
    return result

@app.route("/oauth2callback")
def oauth2callback():
    if request.args.has_key('error'):
        return "ERROR"

    url = "https://accounts.google.com/o/oauth2/token"
    code = request.args.get('code')
    values = secrets['request_token']
    values['code'] = code

    data = urllib.urlencode(values)
    req = urllib2.Request(url,data)
    response = urllib2.urlopen(req)
    rawresult = response.read()
    d = json.loads(rawresult)
    url = "https://www.googleapis.com/oauth2/v1/tokeninfo?id_token=%s"%(d['id_token'])
    req = urllib2.Request(url)
    response = urllib2.urlopen(req)
    rawresult = response.read()
    d = json.loads(rawresult)
    session['user']=d['email']
    return redirect("/")

if __name__=="__main__":
    app.secret_key = "secret key"
    app.debug=True
    app.run(host="0.0.0.0",port=3000)
