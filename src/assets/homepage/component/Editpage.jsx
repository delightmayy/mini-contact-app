import React from "react";
import { Link,  useParams } from "react-router-dom";
import EdititemPage from "./EdititemPage";

const Editpage = ({ ContactData, setContactData }) => {
  const { id } = useParams();
  const editeditem = ContactData.find((item) => item.id.toString() === id);
  
  return (
    <section className="  bg-gray-300 flex-grow overflow-y-auto min-h-full pb-16 md:pb-20 ">
      {editeditem ? (
        <EdititemPage
          id={id}
          editeditem ={editeditem}
          ContactData={ContactData}
          setContactData={setContactData}
        />
      ) : (
       
        <div className=" invalid-id text-center flex flex-col gap-2 ">
          <h1 className="font-semibold ">Error</h1>
          <p className=" italic capitalize">contact not found ...</p>
          <Link to={"/contact"} replace>
            <p className="capitalize text-sm text-red-500">go back home</p>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Editpage;
