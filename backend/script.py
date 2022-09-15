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
                
            except ValueError:
                obj = {"data" : [data]}

      
        with open(path , 'w') as f:    
            json.dump(obj , f)
        # obj['items'].append(data['id'])
        return "ok"
    
    if request.method == 'DELETE':
        path = os.getcwd()
        path = os.path.join(path,"input.json")
        obj = ""
        data = request.json
        print("in delete")
        idx = data['index']
        # title = data['prefTitle']
        print(idx)
        with open(path , 'r') as f:
            obj = json.load(f)['data']
        
        obj.pop(idx)
        with open(path , 'w') as f:    
            json.dump({"data" : obj} , f)
        # for item in obj:
        #     if item['prefTitle'] == title:
        #         obj

        
        return "ok"


if __name__ == '__main__':
    app.run(debug = True)
