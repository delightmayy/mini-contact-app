import React from "react";
import ContactItem from "./ContactItem";

const ConntactDetail = ({ ContactData, setContactData, deleteContact }) => {
  return (
    <div className="flex flex-col w-full md:w-8/12 md:p-2 overflow-y-auto">
      {ContactData.length ? (
        <ContactItem
          ContactData={ContactData}
          setContactData={setContactData}
          deleteContact={deleteContact}
        />
      ) : (
        <i className="py-4   text-center md:ps-10 lg:ps-12">
          Contact list is empty
        </i>
      )}
    </div>
  );
};

export default ConntactDetail;
