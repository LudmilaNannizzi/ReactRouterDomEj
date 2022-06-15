import { useState } from "react";
import Navbar from "./Layouts/Navbar";
import Home from "./Screens/Home/Home";
import AboutUs from "./Screens/AboutUs/AboutUs";
import Character from "./Screens/Characters/Character";
import { Route, Routes } from "react-router-dom";
import Error404 from "./Screens/Error404/Error404";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character" element={<Character />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
