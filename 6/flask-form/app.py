from flask import Flask,render_template,request
import utils
import numpy

app=Flask(__name__)

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        # post
        button = request.form["b"]
        uname  = request.form["uname"]
        pword  = request.form['pword']
        valid_user = utils.authenticate(uname,pword)
        if button=="cancel" or not(valid_user):
            return render_template("login.html")
        else:
            return render_template("welcome.html",name=uname)

@app.route("/")
def index():
    button = request.args.get("b",None)
    uname = request.args.get("uname",None)
    pword = request.args.get("pword",None)
    print button,uname,pword
    if button==None:
        return render_template("index.html")
    else:
        return "<h1>%s,%s,%s</h1"%(button,uname,pword)



def trending(a):
    one = 0
    oneCount = 0
    two = 0
    twoCount = 0
    three = 0
    threeCount = 0
    for post in a:
        count = 0
        for time in post:
            if time - time.time() <= 86400:
                count += 1
        if count > oneCount:
            three = two
            threeCount = twoCount
            two = one
            twoCount = oneCount 
            one = post[0]
            oneCount = count
        elif count >= twoCount:
            three = two
            threeCount = twoCount
            two = post[0]
            twoCount = count
        elif count >= threeCount:
            three = post[0]
            threeCount = count
    return [one,two,three]






if __name__=="__main__":
    app.debug=True
    app.run();
