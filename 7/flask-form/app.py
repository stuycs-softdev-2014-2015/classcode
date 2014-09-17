from flask import Flask,render_template,request
import utils

app=Flask(__name__)

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        button = request.form['b']
        uname  = request.form['uname']
        pword  = request.form['pword']
        valid_user = utils.authenticate(uname,pword)
        if button=="cancel" or not(valid_user):
            return render_template("login.html")
        else:
            return render_template("welcome.html",
                                   name=uname)
        
@app.route("/")
def index():
    button = request.args.get("b",None)
    uname = request.args.get("uname",None)
    pword = request.args.get("pword",None)
    print button,uname,pword
    if button==None or button=="cancel":
        return render_template("index.html")
    else:
        return "<h1>Welcome %s</h1>"%(uname)



if __name__=="__main__":
   app.debug=True
   app.run(host="0.0.0.0",port=5000)
