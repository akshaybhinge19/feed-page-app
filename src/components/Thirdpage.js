import React,{useState,useEffect} from 'react'
import  DisplayCard  from './DisplayCard'
function Thirdpage() {
    const [result,setResult]=useState("");
    useEffect(()=>{
        fetch('http://www.mocky.io/v2/59ac28a9100000ce0bf9c236')
        .then((response)=>response.json())
        .then((result)=>{
            console.log(result.posts);
            setResult(result.posts);
        })
    },[])
    return (
        <div>
            {result && <DisplayCard result={result} page={3}/>}
        </div>
    )
}

export default Thirdpage;