import sqlite3

conn = sqlite3.connect("test.db")


c = conn.cursor()

q = "create table people (name text, id integer)"
c.execute(q)

q = "create table classes (code text, id integer, grade integer)"

c.execute(q)

conn.commit()

