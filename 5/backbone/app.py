from flask import Flask, render_template
import json
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")
@app.route("/linkedview")
def linked():
    return render_template("linkedview.html")
@app.route("/multi1")
def multi1():
    return render_template("multi1.html")

@app.route("/col")
def col():
    return render_template("col.html")

@app.route("/places")
def places():
    return json.dumps([{'name':'place1','rating':100},
                   {'name':'place2','rating':30}])


if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
