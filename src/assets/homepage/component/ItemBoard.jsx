import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ItemBoard = ({ x, ContactData, setContactData, deleteContact }) => {
  return (
    <div className=" grid grid-cols-2 md:flex md:rounded-lg w-full bg-zinc-300 px-4 h md:p-1  gap-4">
      <div className="my-auto py-2 ">
        <img
          className=" border border-white h-32 rounded-s-lg"
          src={x.img}
          alt=""
          width={150}
        />
      </div>

      <div className="flex flex-col gap-1 text">
        <h1 className=" font-bold text-md md:text-lg capitalize mt-3   ">
          {x.firstname} {x.lastname}
        </h1>

        {x.isfavourite ? (
          <div>
            {" "}
            <StarIcon fill="Gold" className=" h-6 ps-2 md:ps-8 " />
          </div>
        ) : (
          <div>
            {" "}
            <StarIcon fill="Gray" className=" h-6  ps-2 md:ps-8 " />
          </div>
        )}

        <h3 className="md:text-lg text-base text-sky-600">
          {!(x.username === "") ? x.username : x.firstname + x.lastname}
        </h3>

        {x.job && <p className="text-sm">{x.job}</p>}

        <div className="flex gap-4 items-center  capitalize pb-2 ">
          <Link
            onClick={() => {
              localStorage.setItem("ContactData", JSON.stringify(ContactData));
            }}
            to={`/contact/edit/${x.id}`}
            className=" capitalize text-sm  border-gray-200 px-3 rounded-sm border text-sky-600 flex  items-center justify-center  hover:bg-sky-600 hover:text-white "
          >
            edit
          </Link>

          <button
            className="capitalize text-sm border-gray-200 px-3 rounded-sm border text-red-600  flex  items-center justify-center  hover:bg-red-600 hover:text-white "
            onClick={() => {
              deleteContact(x.id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBoard;
