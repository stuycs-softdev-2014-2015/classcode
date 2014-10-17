import sqlite3
import csv

conn = sqlite3.connect('p.db')

c=conn.cursor()
BASE="INSERT INTO people VALUES('%(name)s',%(id)s)"
for line in csv.DictReader(open("people.csv")):
    q = BASE%line
    print q
    c.execute(q)

BASE="INSERT INTO classes VALUES('%(code)s',%(grade)s,%(id)s)"
for line in csv.DictReader(open("grades.csv")):
    q = BASE%line
    print q
    c.execute(q)

conn.commit()
    

