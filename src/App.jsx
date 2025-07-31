import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import ProdutsDetails from "./Components/ProdutsDetails";
import Create from "./Components/Create";

function App() {
  return (
    <div className="h-screen w-full flex overflow-x-hidden overflow-y-auto">
      <Routes>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<ProdutsDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
