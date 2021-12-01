import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import AnimeInfo from "./components/AnimeInfo";
import Info from "./pages/Info"
 
import "./styles.css";
import "./view.css";

import {Routes,Route} from "react-router-dom";


function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Info />} >
          <Route path=":animeId" element ={<AnimeInfo/>} />
      </Route>
    </Routes>
  );
}

export default App;
