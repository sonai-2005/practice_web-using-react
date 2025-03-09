import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link , Navigate } from "react-router-dom"; 
import { Header } from "./components/header";
import { About } from "./components/about";
import {Footer } from "./components/footer";
import {Home} from "./components/home";
import { Login } from "./components/logIn";
import { User } from "./components/user";
import { BatmanUni } from "./components/batmanUni";
import { Github } from "./components/github/github";
import Contact from "./contact";
// import { AnotherHeader } from "./components/github/anotherHeader";
function App() {

  return (
    <Router>
      <>
      {/* <AnotherHeader/> */}
        <Header/>
        <Routes>
        <Route path="/" element={<h3 className="text-center m-5">Hello there. I am Saptarshi Nandi <br/> I don't promote alcohol consumption. This is for totally fun purpose <br/> THANK YOU</h3>
        
        } />
          <Route path="/Batman" element={<BatmanUni/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="logIn" element={<Login/>} />
          <Route path="About" element={<About/>} />
          <Route path="Github" element={<Github/>} />
          <Route path='user/:userid' element={<User/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
