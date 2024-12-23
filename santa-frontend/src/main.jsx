import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./Hero";
import Nav from "./Nav";
import EarthAnimation from "./EarthAnimation";
import FilterChildren from "./FilterChildren";
import Behaviour from "./behaviour";
import CategorizedGifts from "./CategorizedGifts"; // Import CategorizedGifts component
import Chinchillas from "./Chinchillas"
import './global.css';

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/earth-animation" element={<EarthAnimation />} />
        <Route path="/filter-children" element={<FilterChildren />} />
        <Route path="/behaviour" element={<Behaviour />} />
        <Route path="/categorized-gifts" element={<CategorizedGifts />} />
        <Route path="/chinchilla" element={<Chinchillas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
