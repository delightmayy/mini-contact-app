import React, { useState } from "react";
import SideBar from "./SideBar";
import ConntactDetail from "./ConntactDetail";

const AppBody = ({
  ContactData,
  setContactData,
  Search,
  setSearch,
  Searchstate,
  setSearchstate,
  AddNewItem,
  deleteContact,
}) => {
  return (
    <div className=" md:flex  md:pt-2 flex-grow  gap-4 md:gap-0  bg-gray-400  ">
      <SideBar
        ContactData={ContactData}
        setContactData={setContactData}
        Search={Search}
        setSearch={setSearch}
        Searchstate={Searchstate}
        setSearchstate={setSearchstate}
        AddNewItem={AddNewItem}
      />
     
      <ConntactDetail
        ContactData={ContactData}
        setContactData={setContactData}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default AppBody;
