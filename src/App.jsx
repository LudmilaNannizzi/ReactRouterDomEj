import { useState } from "react";
import Navbar from "./Layouts/Navbar";
import Home from "./Screens/Home/Home";
import AboutUs from "./Screens/AboutUs/AboutUs";
import Characters from "./Screens/Characters/Characters";
import CharacterInfo from "./Screens/CharacterInfo/CharacterInfo";
import { Route, Routes } from "react-router-dom";
import Error404 from "./Screens/Error404/Error404";

function App({}) {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterInfo />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
