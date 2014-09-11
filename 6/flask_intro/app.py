from flask import Flask

# this makes app an instance of the Flask class
# and it passed the special variable __name__ into
# the constructor

app = Flask(__name__)

if __name__=="__main__":
    app.debug=True
    app.run()

    
