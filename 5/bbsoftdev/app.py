from flask import Flask, render_template, request
from pymongo import MongoClient
import json

app = Flask(__name__)

mongo = MongoClient()
db = mongo['placedb5']


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/bb")
def bb():
    return render_template("bb.html")

@app.route("/persist")
def persist():
    return render_template("persist.html")

#---------------- REST CALLS ----------------------------------------

@app.route("/places")
def places():
    places = [x  for x in db.places.find()]
    return json.dumps(places)

@app.route("/place",methods=['GET','POST','DELETE','PUT'])
@app.route("/place/<id>",methods=['GET','POST','DELETE','PUT'])
def place(id=None):
    method = request.method
    j = request.get_json();
    print method, id, j
    if id ==None:
        id =j['name']
        
    if method == "POST":
        j['_id']=id
        try:
            x = db.places.update({'_id':id},j,upsert=True)
        except:
            j.pop("_id",None)
            x = db.places.update({'_id':id},j)
        
    
    return json.dumps({'result':x})

    
if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
