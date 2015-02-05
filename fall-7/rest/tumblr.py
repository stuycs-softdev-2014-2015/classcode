from flask import Flask,request,url_for,redirect,render_template
import json, urllib2

app=Flask(__name__)

@app.route("/")
def index():
    return "hello"

@app.route("/t")
@app.route("/t/<tag>")
def t(tag="Narwhal"):
	url = "http://api.tumblr.com/v2/tagged?tag=%s&api_key=6qjbDDaQ4vUogvpFIZ2UoaHuo6ykn1vMpjRYOdYOPCQI6dBw4K"
	url = url%(tag)
	request = urllib2.urlopen(url)
	result = request.read()
	d = json.loads(result)
	page = ""
	for r in d['response']:
		if 'photos' in r.keys():
			page = page + "<img height=200 src=%s>"%(r['photos'][0]['original_size']['url'])
			page = page + "<a href=%s>%s</a>"%(r['post_url'],r['blog_name'])
			page = page + "<hr>"
	return page


if __name__=="__main__":
   app.debug=True
   app.run(host="0.0.0.0",port=8000)
