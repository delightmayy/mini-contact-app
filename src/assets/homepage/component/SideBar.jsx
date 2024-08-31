import React from "react";
import Slidelist from "./Slidelist";

const SideBar = ({
  ContactData,
  setContactData,
  Search,
  setSearch,
  Searchstate,
  setSearchstate,
  AddNewItem,
}) => { 
  return (
    <div className=" flex flex-col sticky md:static top-14 w-full md:w-4/12 mx-auto h-52   md:h-full bg-gray-400 ">
      <div className="px-4 py-2  md:p-2 flex justify-between md:gap-2 ">
        <label htmlFor="search" className="hidden">
          search
        </label>

        <input
          type="search"
          className=" form-input text-xs  rounded-md h-8  w-3/4"
          id="search"
          placeholder={"Search Contact"}
          name="Search"
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchstate(
              ContactData.filter((x) =>
                (x.firstname.toLowerCase()).includes(Search.toLowerCase()) ||
              (x.lastname.toLowerCase()).includes(Search.toLowerCase()) 
              )
            );
          }}
        />

        <button
          className="border px-2 rounded-md shadow-md text-sm shadow-slate-600 text-sky-600 hover:bg-sky-600 hover:text-white "
          onClick={() => AddNewItem()}
        >
          New
        </button>
      </div>
      <ul className=" flex flex-col gap-4 justify-start px-4 pb-4 md:pb-20 overflow-y-auto  max-h-48 md:min-h-full ">
        {Search
          ? Searchstate.map((x) => <Slidelist key={x.id} item={x} />)
          : ContactData.map((x) => <Slidelist key={x.id} item={x} />)}

        {Search && Searchstate.length == 0 && (
          <p className="italic text-center"> search not found</p>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
