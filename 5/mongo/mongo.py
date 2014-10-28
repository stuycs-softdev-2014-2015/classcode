import random
from pymongo import Connection

conn = Connection()
# conn = Connection('machinename')

# db = conn.admin
# res = db.authenticate('user','password')

# this or db=conn.pd5 is the same as use pd5 from the
# mongo shell

db = conn['pd5']

print db.collection_names()
res = db.people.find({},{'_id':False})
print "The data"
for r in res:
    print r

names =['fawn',
        'jessica',
        'steve',
        'eric',
        'bob',
        'thluffy',
        'DoughJoe',
        'clyde']

dtype=['jelly','glazed','plain','caramel']

#for i in range(10):
#    d = {'name':random.choice(names),
#         'number': random.randrange(1,20),
#         'donought':random.choice(dtype)}
#    print d
#    db.people.insert(d)

dlist=[]
for i in range(10):
    d = {'name':random.choice(names),
         'number': random.randrange(1,20),
         'donought':random.choice(dtype)}
    dlist.append(d)

#print dlist
#db.people.insert(dlist)

res = db.people.find()
for r in res:
    print r['name']
