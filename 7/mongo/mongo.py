import random
from pymongo import Connection

# conn = Connection('mongodb.stuycs.org')
conn = Connection()

#db = conn.admin
#db.authenticate('user','password')

db = conn['pd7']

#print db.collection_names()
#res = db.people.find({},{'_id':False})

#for r in res:
#    print r['name']

#db.people.drop()

names = ['thluffy','dennis','bucky','doughjoe',
         'victor','jesus']
dtype = ['plain','frosted','glazed','jelly']

# for i in range(10):
#     d = {'name':random.choice(names),
#          'donut':random.choice(dtype),
#          'number': random.randrange(1,20)}
#     print d
#     db.people.insert(d)

dlist = []
for i in range(10):
    d = {'name':random.choice(names),
         'donut':random.choice(dtype),
         'number': random.randrange(1,20)}
    dlist.append(d)

db.people.insert(dlist)

