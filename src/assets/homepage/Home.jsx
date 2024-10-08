import React, { useState } from "react";
import AppBody from "./component/AppBody";
import Header from "../Header";
import Footer from "../Footer";
import { json, Route, Routes, useParams } from "react-router-dom";
import ErrorPage from "../errorpage/ErrorPage";
import Editpage from "./component/Editpage";
import { Link, useNavigate } from "react-router-dom";
import LoadPage from "../LoadPage";
import NewContact from "../NewContact";
import { useEffect } from "react";

const Home = ({ title }) => {
  const [ContactData, setContactData] = useState(
    JSON.parse(localStorage.getItem("contactdata")) || []
  );

  const [Search, setSearch] = useState("");
  const [Searchstate, setSearchstate] = useState("");
  const navigate = useNavigate();

  function deleteContact(p) {
    const delname = ContactData.find((x) => x.id === p);
    const confirmdelete = confirm(
      ` Do you want to delete ${delname.firstname}`
    );
    const myItems = ContactData.filter((x) => !(x.id === p));
    confirmdelete && setContactData(myItems);
    navigate(`/contact/${myItems.length ? myItems[0].id : 1}`);
  }

  const AddNewItem = () => {
    navigate("/contact/New");
  };

  useEffect(() => {
    localStorage.setItem("contactdata", JSON.stringify(ContactData));
  }, [ContactData]);

  return (
    <section className="bg-gray-100 w-full flex-grow fixed top-0  h-svh flex flex-col max-w-lg mx-auto ">
      <Header title={title} />

      <Routes>
        <Route path="/contact/">
          <Route index element={<LoadPage ContactData={ContactData} />} />

          <Route
            path="New"
            element={
              <NewContact
                ContactData={ContactData}
                setContactData={setContactData}
              />
            }
          />
          <Route
            path="edit/:id"
            element={
              <Editpage
                ContactData={ContactData}
                setContactData={setContactData}
              />
            }
          />
          <Route
            path=":id"
            element={
              <AppBody
                ContactData={ContactData}
                setContactData={setContactData}
                Search={Search}
                setSearch={setSearch}
                Searchstate={Searchstate}
                setSearchstate={setSearchstate}
                AddNewItem={AddNewItem}
                deleteContact={deleteContact}
              />
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer ContactData={ContactData} />
    </section>
  );
};

export default Home;
