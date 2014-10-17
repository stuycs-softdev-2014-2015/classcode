import sqlite3
import csv

conn = sqlite3.connect('test.db')
c=conn.cursor();

BASE="INSERT INTO people VALUES('%(name)s',%(id)s)"
for l in csv.DictReader(open('people.csv')):
    q = BASE%l
    print q
    c.execute(q)

BASE="""
INSERT INTO classes 
       VALUES('%(code)s',%(id)s,%(grade)s)
"""
for l in csv.DictReader(open('classes.csv')):
    q = BASE%l
    print q
    c.execute(q)

conn.commit()
