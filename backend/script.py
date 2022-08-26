from flask import Flask
from flask import request
app = Flask(__name__)

@app.route("/api" , methods = ['GET' , 'POST' , 'DELETE' , 'PUT'])
def api():
    if request.method == 'GET':
        return {
            "items" : [
                "1" , "2" , "3"
            ],
            "bool" : True
        }

    if request.method == 'POST':
        return{}


if __name__ == '__main__':
    app.run(debug = True)
