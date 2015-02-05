import random
from pymongo import Connection

#conn = Connection('mongodb.stuycs.org')
conn = Connection()

#db = conn.admin # connect to the admin database
#db.authenticate('user','password')

db = conn["pd6"] # or conn.pd6

print db.collection_names()

# res = db.people.find({},{'_id':False})
# for r in res:
#     print r['name']

names=['thluffy',
       'chewwie',
       'catwo-man',
       'susan',
       'thrakazogg',
       'doughjoe']

dtype=['glazed','jelly','plain','frosted']

dlist=[]
for i in range(10):
    d = {'name':random.choice(names),
         'donut':random.choice(dtype),
         'number':random.randrange(1,20)}
    dlist.append(d)
print dlist
db.people.insert(dlist)

