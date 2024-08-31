import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactimg from "./homepage/img/contactimg.jpg";

const NewContact = ({ ContactData, setContactData }) => {
  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [isFavourite, setisFavourite] = useState(false);
  const [job, setjob] = useState("");
  const [img, setimg] = useState();
  const [Id, setid] = useState(
    ContactData.length ? ContactData[ContactData.length - 1].id + 1 : 1
  );
  const [About, setAbout] = useState("");

  const Newcontactdata = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    username: username,
    isfavourite: isFavourite,
    job: job,
    img: img,
    id: Id,
    about: About,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactData((prevdata) => [...prevdata, Newcontactdata]);
    navigate(`/contact/${Id ? Id : 1}`);
  };

  /*  useEffect(() => {
    localStorage.setItem("imglist", profileUrl);
  }, [profileUrl]); */

  /* const handleForminput = (event) => {
    setdata((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));
  }; */

  return (
    <section className="  bg-gray-400 flex-grow  overflow-y-auto pb-16 md:pb-20 min-h-full ">
      <div className=" border px-2 py-4  max-w-7xl mx-auto ps-2   flex flex-col justify-center items-center gap-2 ">
        <img
          src={img}
          alt=""
          className="border h-28 w-28  rounded-full mb-4 "
        />

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
                placeholder="Firstname"
                type="text"
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
                placeholder="Lastname"
                type="text"
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
                placeholder="Username"
                type="text"
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
                placeholder="Job"
                type="text"
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
              <label htmlFor="discription">Brief Discription</label>
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

            <div className="flex justify-center items-center md:justify-end p-2 py-4">
              <button className="capitalize p-1 border-zinc-50 border  px-6 rounded-2xl hover:bg-zinc-500 ">
                save
              </button>
            </div>
          </div>

          <div className="hidden md:block md:col-span-2 mt-4 mb-20">
            <img src={contactimg} alt="" className=" h-full " />
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewContact;
