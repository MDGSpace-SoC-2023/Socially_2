
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./components/header";
import { UserButton } from "@clerk/nextjs";


export default async function Home() 
{

  return <> 
  <Header />
  <div>SOCIALLY (OBVIOUSLY) </div> 
  <div className = "flex"><b> TRY ONE OF OUR COOL FEATURES HEHE </b> </div>
  <UserButton afterSignOutUrl="/"/>

   <img src="https://i.pinimg.com/236x/9c/50/f8/9c50f8e5567340cbb5f1d18548f84334.jpg" alt="gandu" />
   
  
  </>
  
}

 