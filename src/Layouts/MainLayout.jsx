import React from "react";
import NavBar from "../components/NavBar/NavBar";

function MainLayout({ children }) {
  return (
    <div className="">
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}

export default MainLayout;
