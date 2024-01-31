'use client'
import React from "react";
import Header from "../components/header";
import axios from "axios";

export default async function Memes()
{
    const response =  await axios.get("http://localhost:8000/memes/");
    const info = response.data;
    return (<>
    
    
    <div className="post-container">
    <div className="title">  Memes  </div>
      {/* <h1>BLOG PAGE</h1> */}
        <div className="post-container">
        {info.map((item:any) => (
          
          
          <div className="post">
            <div className="post-content">
            <img src={item.url} width={300} height={300}/> 
           
            <h1>{item.title}</h1> </div>
          <button className="delete-button" onClick={async () => 
          {
            
            const response = await axios.delete(`http://localhost:8000/meme/${item.id}/`)
            console.log(response.data);
            window.location.reload();


          }}> Remove </button>     
            </div>
            
         
        ))} </div>
      
    </div>
  
    </>)


}


