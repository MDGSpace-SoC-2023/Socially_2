import React from "react";
import Header from "../components/header";
export default function About()
{
    return (<>

  
       <Header />
       
            <h1>Socially</h1>
            <p>A Minimalistic Social Media Hub for College Students</p>
       
    
        
            <h2>Sections</h2>
    
            <article>
                <h3>Memepage</h3>
                <p>Interactive memepage where users can generate and curate memes.</p>
            </article>
    
            <article>
                <h3>Jokes</h3>
                <p>Genre-based joke generation with the option to save and remove jokes.</p>
            </article>
    
            <article>
                <h3>Blogpage</h3>
                <p>Literature section for publishing and managing blogs.</p>
            </article>
    
            <article>
                <h3>Feed</h3>
                <p>Cloudinary-powered section for uploading and managing photos and videos.</p>
            </article>
    
            <article>
                <h3>Date Mate</h3>
                <p>Independent social feature where users express preferences and connect based on mutual interest.</p>
            </article>
    
            <article>
                <h3>Recommendations and About Us Page</h3>
                <p>Discover personalized recommendations and learn more about the platform.</p>
            </article>
    
        
    
        <section>
            <h2>Technology Stack</h2>
            <ul>
                <li>Backend: Django</li>
                <li>Frontend: Next JS</li>
                <li>Database: SQLite</li>
            </ul>
        </section>
    
        <section>
            <h2>Authentication Options</h2>
            <ul>
                <li>Github Account</li>
                <li>Google Account</li>
                <li>OTP/Magic Link via Specified Email ID</li>
            </ul>
        </section>
    
        <footer>
            <p>Join the Socially community, where simplicity meets the diverse interests and creative expressions of college life.</p>
            
        </footer>
    
    
    
    </>)
    
}
