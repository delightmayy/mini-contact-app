import Lottie from "lottie-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Startanimation } from "./homepage/lotties/Loadanimate";

const StartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/contact/1");
    }, 2000);
  }, []);
  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <div className="-mt-8 max-w-40 ">
        <Lottie animationData={Startanimation} loop={true} />
      </div>
    </div>
  );
};

export default StartPage;
