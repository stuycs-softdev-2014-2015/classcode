from flask import Flask,request,url_for,redirect,render_template
import time

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getstuff")
def getstuff():
    print "In GetStuff"
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
    time.sleep(5)
    print "returning from getfast"
    return "fast stuff"


if __name__=="__main__":
   app.debug=True
   app.run(host="0.0.0.0",port=8000)
