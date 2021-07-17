# Set up a Flask app
#
# Date: June 2017
# By: Nicholas Fentekes
#
# License:
#

# ok, so we need to import the Flask class
# and then create an instance of it
from flask import Flask
app = Flask(__name__)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'development key'
app.config['USERNAME'] = 'admin'
app.config['PASSWORD'] = 'default'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


app.route("/")
def hello():
    return "Hello World!"

port = 5000
app.run(host='0.0.0.0', port=port)