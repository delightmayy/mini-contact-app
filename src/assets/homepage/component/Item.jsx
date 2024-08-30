import React from "react";
import ItemBoard from "./ItemBoard";
import ItemAbout from "./ItemAbout";

const Item = ({ x, ContactData, setContactData, deleteContact }) => {
  return (
    <div
      key={x.id}
      className=" flex flex-col items-center  bg-gray-100 shadow-stone-500 shadow-md "
    >
      <ItemBoard
        x={x}
        ContactData={ContactData}
        setContactData={setContactData}
        deleteContact={deleteContact}
      />
      <ItemAbout x={x} />
      {console.log(typeof x.about)
      }
      
    </div>
  );
};

export default Item;
