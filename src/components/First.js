// import './App.css';
import React from 'react'
import { useState} from "react";
export default function First() {
   let time=new Date().toLocaleTimeString();
   const [ctime,setctime]= useState(time);
   const updatetime=()=>{
      time=new Date().toLocaleTimeString();
      setctime(time);
      // console.log(`time in adding ${time}`);
     }
  
   
   setInterval(updatetime,1000);
  return (

     <div className="App">
      
        <h2>hello</h2>
        <h2> Digital clock Using React js </h2>
       <h1>{ctime}</h1>
       
      </div>
     
  
  );
}
