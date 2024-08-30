import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactimg from "../img/contactimg.png"

const EdititemPage = ({ id, editeditem, ContactData, setContactData }) => {
  const navigate = useNavigate();
  const findID = ContactData.findIndex((data) => data.id == id);

  const [firstname, setfirstname] = useState(editeditem.firstname);
  const [lastname, setlastname] = useState(editeditem.lastname);
  const [username, setusername] = useState(editeditem.username);
  const [isFavourite, setisFavourite] = useState(editeditem.isfavourite);
  const [job, setjob] = useState(editeditem.job);
  const [img, setimg] = useState(editeditem.img);
  const [About, setAbout] = useState(editeditem.about);

  const Newcontactdata = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    username: username,
    isfavourite: isFavourite,
    job: job,
    img: img,
    id: Number(id),
    about: About,
  };
  console.log( ContactData);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    ContactData.splice(findID, 1, Newcontactdata);
    navigate(`/contact/${id ? id : 1}`);
  };

  return (
    <div className=" border px-2 py-4  max-w-7xl mx-auto ps-2   flex flex-col justify-center items-center gap-2 ">
      <img src={img} alt="" className="border h-28 w-28  rounded-full mb-4 " />

      <label htmlFor="profilepicture" className="hidden">
        insert file
      </label>

      <input
        type="file"
        name="profilepicture"
        id="profilepicture"
        className="border rounded-full form-file"
        onChange={(e) => {
          setimg(URL.createObjectURL(e.target.files[0]));
        }}
      />

      <form
        className=" mx-auto px-6 py-4  md:grid grid-cols-5   md:p-2  md:gap-3 text-white bg-zinc-700"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex flex-col gap-3 md:col-span-3 md:ps-2 ">
          <div>
            
            <label htmlFor="firstname">Firstname: </label>
            <input
              type="text"
              placeholder="Firstname"
              required
              name="firstname"
              id="firstname"
              className=" text-black h-8 w-full"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="lastname">Lastname: </label>
            <input
              type="text"
              placeholder="Lastname"
              required
              name="lastname"
              id="lastname"
              className=" text-black h-8 w-full"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              className=" text-black h-8 w-full"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="job" className=" capitalize">
              job title:
            </label>
            <input
              type="text"
              placeholder="Job"
              name="job"
              id="job"
              className=" text-black h-8 w-full"
              value={job}
              onChange={(e) => {
                setjob(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="discription" >
              Brief Discription
            </label>
            <textarea
              
              placeholder="About"
              name="about"
              id="discription"
              className=" text-black  w-full"
              value={About}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="isfavourite"
              id="isfavourite"
              checked={isFavourite}
              onChange={() => {
                setisFavourite((prevcheck) => !prevcheck);
              }}
            />
            <label htmlFor="isfavourite" className="ps-4 capitalize">
              set favorite
            </label>
          </div>
          <div className="flex justify-center items-center p-2 py-4">
            <button className="capitalize p-2 mx-auto border-zinc-50 border  px-6 rounded-2xl hover:bg-zinc-500 ">
              save
            </button>
          </div>
        </div>
              <div className="hidden md:block md:col-span-2 -mt-4">
                <img src={contactimg} alt=""  className=" h-full " />
              </div>
      </form>
    </div>
  );
};

export default EdititemPage;
