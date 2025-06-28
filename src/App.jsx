import React from "react";
import Header from "./Static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Stories from "./Pages/Stories";
import Invest from "./Pages/Invest";
import Save from "./Pages/Save";
import FAQs from "./Pages/FAQs";
import Resources from "./Pages/Resources";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Save" element={<Save />} />
          <Route path="/Invest" element={<Invest />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
