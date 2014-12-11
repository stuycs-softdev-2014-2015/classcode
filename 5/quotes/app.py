from flask import Flask, request, url_for, redirect, render_template
import urllib2

app=Flask(__name__)

################################################################################
######                      REST Stuff                                    ######
################################################################################

@app.route("/quote")
def quote():
    url = urllib2.urlopen("http://www.iheartquotes.com/api/v1/random?format=json")
    d = url.read()
    return d

################################################################################
######                      Real routes                                   ######
################################################################################



@app.route("/")
def index():
    return render_template("index.html")


#@app.route("/base")
def base():
    return render_template("base.html")



if __name__=="__main__":
   app.debug=True
   app.run(host="0.0.0.0",port=8000)
