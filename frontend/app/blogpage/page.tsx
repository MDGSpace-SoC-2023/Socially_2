'use client'
import React from "react";
import axios from "axios";
import Header from "../components/header";
export default async function Blogpage()
{
    const response =  await axios.get("http://localhost:8000/blogpage/");
    const info = response.data;
    return (<>
    <Header />
    
    <div>
      <div className="title"><h1>Blog Page</h1></div>
      <button className="yellow" onClick={()=>
      {
        window.location.href = "/blogpage/newblog"
      }}> Create a new blog </button>
        
          <br/>
          <br/>


        <div></div>
        {info.map((item:any) => (
          <>
          

          <div className="post">
          <li key={item.id}>
          <div>

          <div className="title2"> Title :-  {item.title}</div> <br/>
           Type :-  {item.type} <br/>
           Content :- {item.content} <br/>
          <button className="delete-button" onClick={async () => 
          {
            
            const response = await axios.delete(`http://localhost:8000/blog/${item.id}/`)
            console.log(response.data);
            window.location.reload();


          }}> Delete </button>     
           
           
           
           
           
           
           <button  className = "edit-button"onClick = {()=>
          {
            window.location.href = `/blogpage/editblog/${item.id}/`;


          }}>Edit</button>
           <br/> <br/>
            
            
            </div>
            </li>
            </div>
            </>
         
        )) }
       
      
    </div>
  
    </>)


}
