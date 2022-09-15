import React , {useState , useEffect} from "react"
import axios from "axios"




function RenderList(params) {
    const [list , setList] = useState([])
    
    function getList(){
        axios.get("/api")
        .then(({data}) => {
            
            
            
            setList( data['data'])
            console.log("data");
            console.log({data}['data']['data']);
            
        })
        
        
        
    }
    function getLog(){
        console.log("list");
       
        console.log({list});
        
    }

    function deleteItem(item,idx){
        console.log("inside delteitem");
        console.log(item.prefTitle);
        const obj = {
            "index" : idx,
            "prefTitle" : item.prefTitle
        }
        axios.delete("/api" , {data : obj})
        .then(() => {
            console.log("item got deleted");
            getList();
        })
        .catch((e) => {
            console.log("errors");
            console.log(e);
        })
    }

    useEffect(() => {
        getList()
    } , [])
    return(
        <div>
            from render list...
            <button onClick={() => getList()}>Refresh</button>
            <button onClick={() => getLog()}>obj data</button>
            <div>
                {
                list.map((item,idx) => (<div orientation="horizontal" key={item.prefTitle}><ol key={item.prefTitle}><ul>
                    {item.prefTitle}</ul><ul>
                    {item.myPrice}</ul><ul>
                    {item.toEmail}</ul><ul>
                    {item.url}</ul><ul>
                    </ul>
                    </ol>
                    <button onClick={() => deleteItem(item,idx)}>delete</button>
                    </div>))
                }
            </div>
            

        </div>
    )
}
export default RenderList