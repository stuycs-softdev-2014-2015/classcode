import sqlite3

conn = sqlite3.connect("test.db")

c = conn.cursor()

q = "CREATE TABLE people(name text, id integer)"

result = c.execute(q)

q = "CREATE TABLE classes(code text, id integer,grade integer)"

result = c.execute(q)

conn.commit();
