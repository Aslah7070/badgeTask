import React, { useEffect, useState } from 'react'

const Display = ({props}) => {
  
    console.log("df",props.address);
   let a= props.map((val)=>val.address.city).sort()
    
  return (
    <div>
      {
        a.map((val,index)=>(
           <div key={index}>
             <li>{val}</li>
           </div>
        ))
      }
    </div>
  )
}

export default Display
