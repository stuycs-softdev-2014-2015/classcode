import sqlite3
conn = sqlite3.connect("p.db")

c = conn.cursor()

q ="""
select * from people,classes where people.id == classes.id and grade > 90
"""

result = c.execute(q)
print result
for r in result:
    print r
