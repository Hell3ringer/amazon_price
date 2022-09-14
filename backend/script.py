import json
import os
from flask import Flask
from flask import request
app = Flask(__name__)

obj = {
}

@app.route("/api" , methods = ['GET' , 'POST' , 'DELETE' , 'PUT'])
def api():
    if request.method == 'GET':
        path = os.getcwd()
        path = os.path.join(path,"input.json")
        with open(path) as f:
            obj = json.load(f)
            return obj
                
        

    if request.method == 'POST':
        # print("the req is : " )
        data = request.json

        path = os.getcwd()
        path = os.path.join(path,"input.json")
        with open(path , 'r') as f:
            try:
                obj = json.load(f)                
                obj['data'].append(data)
                print(type(obj))
            except ValueError:
                obj = {"data" : [data]}

      
        with open(path , 'w') as f:    
            json.dump(obj , f)
        # obj['items'].append(data['id'])
        return "ok"


if __name__ == '__main__':
    app.run(debug = True)
