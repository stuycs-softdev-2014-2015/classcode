import sqlite3

conn = sqlite3.connect("test.db")


c = conn.cursor()


q = """
select people.name, classes.code, classes.grade
       from people,classes where
       people.id == classes.id and
       grade > 90
"""

result = c.execute(q)
for r in result:
    print r
