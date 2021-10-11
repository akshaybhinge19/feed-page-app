import React,{useState,useEffect} from 'react'
import  DisplayCard  from './DisplayCard'
import ErrorDisplay from './ErrorDisplay'

function Firstpage() {
    const [result,setResult]=useState([]);
    const [err,setErr]=useState(false);
    useEffect(()=>{
        fetch('https://www.mocky.io/v2/59b3f0b0100000e30b236b7e')
        .then((response)=>response.json())
        .then((result)=>{
            // console.log(result.posts);
            setResult(result.posts);
            if(!localStorage.getItem('page1')){
                localStorage.setItem('page1',JSON.stringify(result.posts));
            } 
        }).catch(()=>{
            var retrievedResult = localStorage.getItem('page1');
            if(!localStorage.getItem('page1')){
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
            {result && <DisplayCard result={result} page={1}/>}
            {err && <ErrorDisplay/>}
        </div>
    )
}

export default Firstpage;