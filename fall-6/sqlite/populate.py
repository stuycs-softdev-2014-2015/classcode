import sqlite3
import csv
conn = sqlite3.connect("test.db")

c = conn.cursor()

BASE="insert into people values('%(name)s',%(id)s)"
for line in csv.DictReader(open("people.csv")):
    q = BASE%line
    print q
    c.execute(q)


BASE="insert into classes values('%(code)s',%(id)s,%(grade)s)"
for line in csv.DictReader(open("classes.csv")):
    q = BASE%line
    print q
    c.execute(q)

conn.commit()

