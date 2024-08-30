import React from "react";

const ItemAbout = ({ x }) => {
  return (
    <div className="bg-gray-100  px-4 py-1 md:p-4 text-black">
      {x.about && (
        <details className=" md:hidden ">
          <summary className="text-center capitalize py-2 font-semibold  ">
            more about {x.firstname}
          </summary>
          <p className={"text-justify px-2"}>{x.about}</p>
        </details>
      )}

      <div className="hidden md:block">
        <h1 className="text-center capitalize py-3 md: font-semibold ">
          more about {x.firstname}
        </h1>
        <p className={"text-center text-wrap" }> {x.about}</p>
      </div>
    </div>
  );
};

export default ItemAbout;
