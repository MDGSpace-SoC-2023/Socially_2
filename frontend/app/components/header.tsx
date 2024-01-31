import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function Header()
{
  
   


    return(<>
    
<header >
  <h1><div className="title"><a href="/">SOCIALLY </a></div> </h1>
</header>

<nav className="navbar">
  <a href="/blogpage">Blogs</a>
  <a href="/posts">Posts</a>
  <a href="/jokes">Jokes</a>
  <a href="/memes">Memes</a>
  <a href="http://localhost:7000/login/"> Date Mate </a>
  <a href="/aboutus">About Us</a>
  <UserButton afterSignOutUrl="/"/> 
</nav>
    
    
    </>)
}