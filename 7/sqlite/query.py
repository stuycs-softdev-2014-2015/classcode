import sqlite3

conn = sqlite3.connect("test.db")
c = conn.cursor()

q="""
SELECT name,code,grade
  FROM people,classes
  WHERE people.id = classes.id and grade > 90
"""

result = c.execute(q)
for r in result:
    print r

