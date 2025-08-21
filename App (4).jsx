import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import About from "./About";
import Hero from "./Hero";
import Destination from "./Destination";
import Packages from "./Packages";
import Contact from "./Contact";
import Trip from "./Trip";
import Book from "./Book";
import Ab from "./Ab";
import BusBooking from "./BusBooking";
import Ship from "./Ship";
import Aroplane from "./Aroplane";
import Home from "./Home";
import ScrollTop from "./ScrollTop";
import Sa from "./Sa";
import Demo2 from "./Demo2";
import HotelBooking from "./HotelBooking";


function App() {
  return (
     <BrowserRouter>
      <ScrollTop /> 

       <Navbar />
       <HeroSection />

     <Routes>
         <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Packages" element={<Packages />} />
         <Route path="/Contact" element={<Contact />} />
        <Route path="/Trip" element={<Trip />} />
         <Route path="/Book" element={<Book />} />
         <Route path="/Ab" element={<Ab />} />
         <Route path="/BusBooking" element={<BusBooking />} />
         <Route path="/Ship" element={<Ship />} />
         <Route path="/Aroplane" element={<Aroplane />} />
         <Route path="/HotelBooking" element={<HotelBooking />} />
       </Routes>

       <Hero />
       <br/>
       <Sa/>
       <br/>
       <Destination />
       <br/>
       <Footer />
     </BrowserRouter>
    
  );
}

export default App;
