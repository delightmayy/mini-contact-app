import React from "react";
import ContactItem from "./ContactItem";

const ConntactDetail = ({ ContactData, setContactData, deleteContact }) => {
  return (
    <div className="flex flex-col w-full md:w-8/12 md:p-2  h-96 pb-40 md:min-h-full md:pb-4 overflow-y-auto bg-gray-100 ">
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
