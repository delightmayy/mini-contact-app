import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/homepage/Home";
import StartPage from "./assets/StartPage";

function App() {
  return (
    <div className=" flex-grow flex  flex-col min-h-svh w-full  max-w-lg mx-auto ">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/*" element={<Home title={"Mini Contact App"} />} />
      </Routes>
    </div>
  );
}

export default App;
