import React from "react";

const AppTitle = ({title}) => {
  return (
    <header className="flex flex-col lg:max-w-md mx-auto w-full p-4">
      <h1 className="text-center text-white uppercase text-sm "> {title} </h1>
    </header>
  );
};

export default AppTitle;
