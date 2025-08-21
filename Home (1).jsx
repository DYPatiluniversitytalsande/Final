import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { useEffect } from "react";

function Home() 
{
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

   return(
    <div>
         <Navbar/>
        <HeroSection/> 
    </div>
   )
} 
export default Home;