import React,{useState,useEffect} from 'react'
import  DisplayCard  from './DisplayCard'
import ErrorDisplay from './ErrorDisplay'

function Thirdpage() {
    const [result,setResult]=useState("");
    const [err,setErr]=useState(false);
    useEffect(()=>{
        fetch('http://www.mocky.io/v2/59ac28a9100000ce0bf9c236')
        .then((response)=>response.json())
        .then((result)=>{
            console.log(result.posts);
            setResult(result.posts);
            if(!localStorage.getItem('page3')){
                localStorage.setItem('page3',JSON.stringify(result.posts));
            }
        })
        .catch(()=>{
            var retrievedResult = localStorage.getItem('page3');
            if(!localStorage.getItem('page3')){
                console.error("Try again..!")
                setErr(true);
            }else{
                setErr(false);
                setResult(JSON.parse(retrievedResult));
            }
        })
    },[])
    return (
        <div>
            {result && <DisplayCard result={result} page={3}/>}
            {err && <ErrorDisplay/>}
        </div>
    )
}

export default Thirdpage;