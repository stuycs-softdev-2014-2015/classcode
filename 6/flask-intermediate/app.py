from flask import Flask,request,redirect,render_template,session



app=Flask(__name__)

@app.route("/base")
def base():
    return render_template("base.html")

@app.route("/")
def index():
    if 'n' not in session:
        session['n']=0
    n = session['n']
    n=n+1
    session['n']=n
    return render_template("index.html",n=n)

@app.route("/logout")
def logout():
    session.pop('n',None)
    return redirect("/")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__=="__main__":
    app.secret_key="Don't put this on github"
    app.debug=True
    app.run()
