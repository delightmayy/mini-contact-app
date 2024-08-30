import React from "react";
import Item from "./Item";
import { useParams, Link } from "react-router-dom";

const ContactItem = ({ ContactData, setContactData, deleteContact }) => {
  const { id } = useParams();
  const ValidateId = ContactData.find((data) => data.id.toString() === id);

  return ValidateId ? (
    ContactData.map(
      (x) =>
        x.id.toString() === id && (
          <Item
            key={x.id}
            x={x}
            ContactData={ContactData}
            setContactData={setContactData}
            deleteContact={deleteContact}
          />
        )
    )
  ) : (
    <div className=" invalid-id text-center flex flex-col gap-2 ">
      <h1 className="font-semibold ">Error</h1>
      <p className=" italic capitalize">contact not found ...</p>
      <Link to= {"/contact"} replace >
        <p className="capitalize text-sm text-red-500">go back home</p>{" "}
      </Link>
    </div>
  );
};

export default ContactItem;
