from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/twoview")
def twoview():
    return render_template("twoview.html")

@app.route("/multi")
def multi():
    return render_template("multi.html")



if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
