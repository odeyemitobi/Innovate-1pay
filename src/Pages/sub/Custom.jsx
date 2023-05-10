import React from "react";
import { FaFileInvoice } from "react-icons/fa";

function Custom() {
  return (
    <div className=" w-[20rem] mr-[4rem] justify-center rounded-3xl bg-white">
      <div className="px-[2rem] pt-[2rem] pb-[7rem]">
        <div className="">
          <FaFileInvoice size={110} color="red" />
        </div>
        <div className="pt-5">
          <h1 className="text-xl font-semibold">Customised Solutions</h1>
          <p className=" w-[85%] text-lg pt-4 font-thin">
            User-focused features tailored to your specific business needs for a
            seamless experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Custom;
