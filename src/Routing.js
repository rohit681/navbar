import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "../src/commonComponents/Navbar/NavBar";
import Home from "../src/Screens/Home/Home";
import Search from "../src/Screens/Search/Search";
import About from './Screens/About/About';

export default function Routing() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes style={{height:"90vh"}}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}
