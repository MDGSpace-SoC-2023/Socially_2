import React from "react";
import Header from "../components/header";
import axios from "axios";

export default async function Jokes()
{
    const response =  await axios.get("http://localhost:8000/jokes/");
    const info = response.data;
    return (
    
    
    <div className="post-container">
  
       <div >

        {info.map((item:any) => (
          
          <li key={item.id}>
            <div className="post">
          <div>
            {item.joke} <br/>
            {item.setup} <br/>
            {item.delivery} <br/>
          <button className="delete-button" onClick={async () => 
          {
            
            const response = await axios.delete(`http://localhost:8000/joke/${item.id}/`)
            console.log(response.data);
            window.location.reload();


          }}> Remove </button>     
           
           
           
           
           
           
          
           <br/> <br/>
            
            
            </div></div>
            </li>
         
        ))} </div>
      
    </div>
  
    )


}


