import axios from "axios";
import React, { use, useState } from "react";
export default function Joke({onAdd}:{onAdd:any})
{
const[valid, setValid] = useState(false);
const [joke, setJoke] = useState({
        user:1,
        type:'',
        setup:'',
        delivery:'',
        joke:'',})
        
   return (<>
    ASK A QUESTION : 
        <br/>
        <button  className ="misc" onClick={async ()=>{
            const res = await axios.get(`https://v2.jokeapi.dev/joke/Misc`);
            const info = res.data;
            console.log(info);
            setValid(true)
            if(info.type == "twopart")
            {
               
                setJoke((prevData) => ({
                    ...prevData,
                    setup:info.setup,
                    delivery: info.delivery,
                    type:info.type,
                }))
            }
            else
            {
                setJoke((prevData) => ({
                    ...prevData,
                    joke:info.joke,
                    type:info.type,
                }))

            }
            

            console.log(info);

        }}> Misc</button>
       <br/>
        <button className="programming" onClick={async ()=>{
            const res = await axios.get(`https://v2.jokeapi.dev/joke/Programming`);
            const info = res.data;
            setValid(true)
            
            if(info.type == "twopart")
            {
                setJoke((prevData) => ({
                    ...prevData,
                    setup:info.setup,
                    delivery: info.delivery,
                    type:info.type,

                }))
            }
            else
            {
                setJoke((prevData) => ({
                    ...prevData,
                    joke:info.joke,
                    type:info.type,
                }))

            }

        }}> Programming </button>

       <br/>
       <button  className = "dark" onClick={async ()=>{
            const res = await axios.get(`https://v2.jokeapi.dev/joke/Dark`);
            const info = res.data;
            setValid(true)
            if(info.type == "twopart")
            {
                setJoke((prevData) => ({
                    ...prevData,
                    setup:info.setup,
                    delivery: info.delivery,
                    type:info.type,
                }))
            }
            else
            {
                setJoke((prevData) => ({
                    ...prevData,
                    joke:info.joke,
                    type:info.type,
                }))

            }

        }}> Dark </button>

       <br/>
       <button className="pun" onClick={async ()=>{
            const res = await axios.get(`https://v2.jokeapi.dev/joke/Pun`);
            const info = res.data;
            setValid(true)
            if(info.type == "twopart")
            {
                setJoke((prevData) => ({
                    ...prevData,
                    setup:info.setup,
                    delivery: info.delivery,
                    type:info.type,
                }))
            }
            else
            {
                setJoke((prevData) => ({
                    ...prevData,
                    joke:info.joke,
                    type:info.type,
                }))

            }

        }}> Pun </button>

       <br/>
       <button className="spooky" onClick={async ()=>{
            const res = await axios.get(`https://v2.jokeapi.dev/joke/Spooky`);
            const info = res.data;
            setValid(true)
            if(info.type == "twopart")
            {
                setJoke((prevData) => ({
                    ...prevData,
                    setup:info.setup,
                    delivery: info.delivery,
                    type:info.type,
                }))
            }
            else
            {
                setJoke((prevData) => ({
                    ...prevData,
                    joke:info.joke,
                    type:info.type,
                }))

            }

        }}> Spooky </button>

       <br/>
       <button className="christmas" onClick={async ()=>{
            const res = await axios.get(`https://v2.jokeapi.dev/joke/Christmas`);
            const info = res.data;
            setValid(true)
            if(info.type == "twopart")
            {
                setJoke((prevData) => ({
                    ...prevData,
                    setup:info.setup,
                    delivery: info.delivery,
                    type:info.type,
                }))
            }
            else
            {
                setJoke((prevData) => ({
                    ...prevData,
                    joke:info.joke,
                    type:info.type,
                }))

            }

        }}> Christmas </button>

       <br/>
       <div className="title">

       <h1>{joke.joke}</h1>
       <h1>{joke.setup}</h1>
       <h1>{joke.delivery}</h1>
       {!valid?(<p> Choose one of them </p>):(<button className="delete-button" onClick={()=>onAdd(joke,valid)}> Add Joke</button>)}
       </div>
       </>)

}