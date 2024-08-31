import React from "react";

const Footer = ({ContactData}) => {
  const contactlength = ContactData.length
  return (
    <section className=" sticky bottom-0 text-black text-center p-2 bg-gray-500 ">
      <h1 className="">{contactlength} {contactlength? "Contacts"  : "Contact" }</h1>
    </section>
  );
};

export default Footer;
