from flask import Flask, render_template,session,redirect


app=Flask(__name__)


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

@app.route("/two")
def two():
    return render_template("two.html")

if __name__=="__main__":
    app.debug=True
    app.secret_key="this key shouldn't be on github"
    app.run()
