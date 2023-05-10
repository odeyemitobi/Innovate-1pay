import React from "react";
import { MdTrackChanges } from "react-icons/md";

function Real() {
  return (
    <div className=" w-[20rem] mr-[4rem] justify-center rounded-3xl bg-white">
      <div className="px-[2rem] pt-[2rem] pb-[7rem]">
        <div className="pb-[1rem]">
          <MdTrackChanges size={110} color="yellow" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Real-Time Tracking</h1>
          <p className=" w-[85%] text-lg pt-4 font-thin">
            Suitable for real-time tracking of requested banknotes and your
            business transactions,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Real;
