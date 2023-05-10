import React from "react";
import { RiContactsFill } from "react-icons/ri";

function Contact() {
  return (
    <div className=" w-[20rem] mr-[4rem] justify-center rounded-3xl bg-white">
      <div className="px-[2rem] pt-[2rem] pb-[7rem]">
        <div className="">
          <RiContactsFill size={113} color="green" />
        </div>
        <div className="pt-5">
          <h1 className="text-xl font-semibold">Simplified Management</h1>
          <p className=" w-[85%] text-lg pt-4 font-thin">
            Manage foreign banknotes with intuitive tools and processes for easy
            distribution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
