import React from "react";
import { Link, useParams } from "react-router-dom";

const Slidelist = ({ item }) => {
  const { id } = useParams();

  return (
    <Link to={`/contact/${item.id}`}>
      <li
        className={`cursor-pointer w-full px-2 capitalize rounded-sm text-base ${
          item.id.toString() === id && "bg-gray-100"
        }`}
      >
        {item.firstname} {item.lastname}
      </li>
    </Link>
  );
};

export default Slidelist;
