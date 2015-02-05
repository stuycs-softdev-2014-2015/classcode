from flask import Flask,request,url_for,redirect,render_template
import time,json
from flask_debugtoolbar import DebugToolbarExtension

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getstuff")
def getstuff():
    print "In GetStuff"
    time.sleep(5)
    print "returning from getstuff"
    return "stuff"

@app.route("/getslow")
def getslow():
    print "in getslow"
    time.sleep(10)
    print "returning from getslow"
    return "slow stuff"

@app.route("/getfast")
def getfast():
    print "in getfast"
    print "returning from getfast"
    return "fast stuff"

@app.route("/upcase")
def upcase():
    data = request.args.get('data',"nothing here")
    print data
    result = {"original":data,
              "result":data.upper()
    }
    return json.dumps(result)

if __name__=="__main__":
   app.debug=True
   app.config['SECRET_KEY'] = '<replace with a secret key>'

   toolbar = DebugToolbarExtension(app)
   app.run(host="0.0.0.0",port=8000)
