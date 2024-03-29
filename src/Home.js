import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { tw } from 'twind'
import Footer from "./components/Footer";
import Highlight from "./components/Highlight";
import Tasks from "./components/Todo/Tasks";
import AddTask from "./components/Todo/AddTask";
import './toggle.css'
import { Nav } from "reactstrap";

const Home = () => {
  const link = [
//     "https://player.vimeo.com/external/308040879.hd.mp4?s=2835a82f3a27769f48cd48f0bc6227230836dc36&profile_id=175&oauth2_token_id=57447761",
//     "https://player.vimeo.com/external/369267842.hd.mp4?s=c7ef1ebeff74b8916ace6c36bb286ee1f4b59216&profile_id=175&oauth2_token_id=57447761",
    "https://stephenxie.github.io/images/Pexels%20Videos%201720220.mp4",
    "https://stephenxie.github.io/images/background.mp4",
  ];
  const [techToggled, setTechToggled] = useState(false);
  const toggleTech = () =>{
    console.log("toggled")
    var video = document.getElementById("video-container");
    video.pause()
    setTechToggled(!techToggled);
    video.load();
    video.play();
  }
  
  return (
    <div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-center text-2xl text-white rounded-xl">
          <h1 className="w3-margin w3-jumbo leading-tight text-6xl font-extrabold font-sans">
            {techToggled ? <Highlight color="green" text="Stephen"/> : "Stephen"} Xie
          </h1>
        </div>
        <div
          id="particles-js"
          className="absolute w-full"
          style={{ zIndex: 0 }}
        />
        <video
          autoPlay
          loop
          muted
          className="fixed h-auto w-full min-w-full min-h-full max-w-none"
          style={{ zIndex: -1, objectFit: "fill" }}
          id="video-container"
        >
          <source
            id="video"
            src={techToggled ? link[1] : link[0]}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </header>
    </div>
  );
};

export default withRouter(Home);
