from flask import Flask, render_template

# app is an instance of the Flask class
app = Flask(__name__)

@app.route("/help")
def help():
    return render_template("help.html")

@app.route("/oldhelp")
def oldhelp():
    p = """
    <h1>Help</h1>
    <ol>
    <li>StackOverflow</li>
    <li>StackOverflow</li>
    <li>StackOverflow</li>
    <li>StackOverflow</li>
    <li>StackOverflow</li>
    </ol>
"""
    return p

@app.route("/about")
def about():
    return "<h1>this is the about page</h1>"

@app.route("/")
@app.route("/home")
def home():
    return "<h1>This is the home page</h1>"

@app.route("/random")
def randompage():
    import random
    num = random.randrange(0,100)
    l = [111,222,333,444]
    d = {'a':100,'hello':'HeLLo',3:'world'}
    
    return render_template("random.html",
                           num=num,
                           name="Thluffy",
                           l=l,
                           d=d)

if __name__=="__main__":
    # set the instance variable debug to True
    app.debug = True
    # call the run method
    app.run()
    
