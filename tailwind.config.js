/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/assets/errorpage/ErrorPage.jsx",
    "./src/assets/homepage/Home.jsx",
    "./src/assets/Header.jsx",
    "./src/assets/Footer.jsx",
    "./src/assets/LoadPage.jsx",
    "./src/assets/NewContact.jsx",
    "./src/assets/StartPage.jsx",
    "./src/assets/homepage/component/AppBody.jsx",
    "./src/assets/homepage/component/AppTitle.jsx",
    "./src/assets/homepage/component/ConntactDetail.jsx",
    "./src/assets/homepage/component/ContactItem.jsx",
    "./src/assets/homepage/component/Item.jsx",
    "./src/assets/homepage/component/EdititemPage.jsx",
    "./src/assets/homepage/component/Editpage.jsx",
    "./src/assets/homepage/component/SideBar.jsx",
    "./src/assets/homepage/component/Slidelist.jsx",
    "./src/assets/homepage/component/ItemAbout.jsx",
    "./src/assets/homepage/component/ItemBoard.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
