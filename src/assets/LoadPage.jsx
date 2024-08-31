import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { Loadanimation } from "./homepage/lotties/Loadanimate";

const LoadPage = ( ContactData) => {
  const navigate = useNavigate();
  const Contact =  ContactData.ContactData
  

  useEffect(() => {
    setTimeout(() => {
      navigate(`/contact/${(Contact.length)? (Contact[0].id): 1}`);
    }, 2000);
  }, []);
  return ( 
    <div className="flex-grow flex flex-col items-center w-full md:max-w-lg md:mx-auto justify-center">
      <div className=" max-w-28 -mt-4 ">
        <Lottie animationData={Loadanimation} loop={true} />
      </div>
    </div>
  );
};

export default LoadPage;
