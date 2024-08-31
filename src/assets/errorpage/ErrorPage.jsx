import React, { useEffect } from "react";
import { Navigate, useNavigate, } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
  navigate("/contact");
    }, 2000);
    () => clearTimeout(timeOut);
  }, []);

  return (
    <section className=" flex flex-col  flex-grow justify-center items-center w-full mt-8">
      
      <button onClick={()=> navigate("/contact")}> Contact Not Found </button>
    </section>
  );
};

export default ErrorPage;

