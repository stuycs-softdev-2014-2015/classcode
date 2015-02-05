import urllib2
import json

url="""
http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=Thluffy&safe=active
"""
request= urllib2.urlopen(url)
result = request.read()
d = json.loads(result)
rlist = d['responseData']['results']
for item in rlist:
	print item['titleNoFormatting']
