import React from "react";
import Ino from "../../Assets/img/Ino.svg";

function NavBar() {
  return (
    <div className="w-full fixed z-20">
      <nav className="floated active">
        <div className="w-full justify-center flex">
          <img className="h-[5rem] " src={Ino} alt="Ino" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
