import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/homepage/Home";
import StartPage from "./assets/StartPage";
import { contactData } from "./assets/homepage/component/contactData";
import { useEffect } from "react";

function App() {
/*  useEffect(()=>{
  localStorage.setItem("contactdata", JSON.stringify())
 },[]) */
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
