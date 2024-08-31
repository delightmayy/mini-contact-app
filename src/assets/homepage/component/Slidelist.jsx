import React from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";

const Slidelist = ({ item }) => {
  const { id } = useParams();
  const Name = `${item.firstname + " " + item.lastname}`;

  return (
    <Link to={`/contact/${item.id}`}>
      <li
        className={`hidden md:block cursor-pointer w-full px-2 capitalize rounded-sm text-base ${
          item.id.toString() === id && "bg-gray-100"
        }`}
      >
        {Name.length >= 12 ? Name.slice(0, 11) + "..." : Name}
      </li>
      <li
        className={`md:hidden cursor-pointer w-full px-2 capitalize rounded-sm text-base ${
          item.id.toString() === id && "bg-gray-100"
        }`}
      >
        {Name}
      </li>
    </Link>
  );
};

export default Slidelist;
