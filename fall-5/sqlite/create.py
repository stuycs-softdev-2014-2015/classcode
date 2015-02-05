import sqlite3

conn = sqlite3.connect("p.db")

q = "create table people(name text, id integer)"
c = conn.cursor()
c.execute(q)

q="""
create table classes (code text, grade integer, id intege)
"""
c.execute(q);
conn.commit();

