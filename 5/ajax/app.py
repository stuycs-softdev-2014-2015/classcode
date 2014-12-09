from flask import Flask,request,url_for,redirect,render_template
import time


app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getstuff")
def getstuff():
    print "In getstuff"
    print "Returning from getstuff"
    return "stuff"

@app.route("/getslow")
def getslow():
    print "In getslow"
    time.sleep(10)
    print "Returning from slow"
    return "returning slow"

@app.route("/getfast")
def getfast():
    print "In getfast"
    time.sleep(5)
    print "Returning from fast"
    return "returning fast"


if __name__=="__main__":
   app.debug=True
   app.run(host="0.0.0.0",port=8000)
