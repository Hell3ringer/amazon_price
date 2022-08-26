from distutils.log import debug
from flask import Flask

app = Flask(__name__)

@app.route("/api")
def api():
    return {
        "items" : [
            "1" , "2" , "3"
        ],
        "bool" : True
    }

if __name__ == '__main__':
    app.run(debug = True)
