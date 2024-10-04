import React,{useEffect, useState} from 'react'
import axios from "axios"
import Display from './Display'

const Fetch = () => {
   const [data,setData]= useState([])
   console.log(data)
useEffect(()=>{
    const fun= async()=>{
      let responce=  await  axios.get("https://jsonplaceholder.typicode.com/users");
     let result= responce.data
    //  console.log(result);
     setData(result)
     
    }
    fun
    ()
},[])
    
  return (
    <div>
      <Display props={data}/>
    </div>
  )
}

export default Fetch
