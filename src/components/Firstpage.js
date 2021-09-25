import React,{useState,useEffect} from 'react'
import  DisplayCard  from './DisplayCard'


function Firstpage() {
    const [result,setResult]=useState([]);
    useEffect(()=>{
        fetch('http://www.mocky.io/v2/59b3f0b0100000e30b236b7e')
        .then((response)=>response.json())
        .then((result)=>{
            console.log(result.posts);
            setResult(result.posts);
        }).catch(()=>console.log("Try again..!"))
    },[])
    
    return (
        <div>
            {result && <DisplayCard result={result} page={1}/>}
        </div>
    )
}

export default Firstpage;