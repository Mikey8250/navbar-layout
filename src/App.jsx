import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import ProdutsDetails from "./Components/ProdutsDetails";

function App() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<ProdutsDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
