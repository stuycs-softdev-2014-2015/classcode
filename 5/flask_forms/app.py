
from flask import Flask,render_template,request
import utils

app = Flask(__name__)


@app.route("/")
def index():
    uname = request.args.get("uname",None)
    pword =  request.args.get("pass",None)
    button = request.args.get("b",None)
    if button == None or button=="Cancel":
        return render_template("index.html")
    else:
        return """
<h1>%s</h1>
"""%(uname)

@app.route("/pform",methods=["GET","POST"])
def pform():
    if request.method == "GET":
        return render_template("pform.html")
    else:
        button = request.form["b"]
        uname = request.form['uname']
        pword = request.form['pass']
        valid = utils.authenticate(uname,pword)
        if button =="Cancel" or not(valid):
            return render_template("pform.html")
        else:
            return "<h1>Welcome Thluffy</h1>"
    
if __name__=="__main__":
    app.debug=True
    app.run()
    

