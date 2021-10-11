import React,{useState,useEffect} from 'react'
import  DisplayCard  from './DisplayCard'
import ErrorDisplay from './ErrorDisplay'

function Secondpage() {
    const [result,setResult]=useState("");
    const [err,setErr]=useState(false);
    useEffect(()=>{
        fetch('https://www.mocky.io/v2/59ac28a9100000ce0bf9c236')
        .then((response)=>response.json())
        .then((result)=>{
            // console.log(result.posts);
            // let obj = JSON.parse(res);
            setResult(result.posts);
            if(!localStorage.getItem('page2')){
                localStorage.setItem('page2',JSON.stringify(result.posts));
            }
        })
        .catch(()=>{
            var retrievedResult = localStorage.getItem('page2');
            if(!localStorage.getItem('page2')){
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
            {result && <DisplayCard result={result} page={2}/>}
            {err && <ErrorDisplay/>}
        </div>
    )
}

export default Secondpage;