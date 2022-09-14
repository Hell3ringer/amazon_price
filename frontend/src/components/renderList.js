import React , {useState , useEffect} from "react"
import axios from "axios"




function RenderList(params) {
    const [list , setList] = useState([])
    
    function getList(){
        axios.get("/api")
        .then(({data}) => {
            
            
            setList( data['data'] )
            console.log("data");
            console.log({data}['data']['data']);
            
        })
        
        
        
    }
    function getLog(){
        console.log("list");
        console.log({list});
    }

    // useEffect(() => {
    //     getList()
    //     return
    // })
    return(
        <div>
            from render list...
            <button onClick={getList}>Refresh</button>
            <button onClick={getLog}>obj data</button>
            <div>
                {list.map((item) => (<ol key={item.prefTitle}><ul>
                    {item.prefTitle}</ul><ul>
                    {item.myPrice}</ul><ul>
                    {item.toEmail}</ul><ul>
                    {item.url}</ul><ul>
                    </ul></ol>))}
            </div>
            

        </div>
    )
}
export default RenderList