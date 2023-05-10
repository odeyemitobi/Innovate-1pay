import React from "react";
import Note from "../../Assets/pic/note.jpg";

function Slidereact() {
  return (
    <div className=" w-[20rem] mr-[4rem] justify-center rounded-3xl bg-white">
      <div className="px-[2rem] pt-[2rem] pb-[4rem]">
        <div className="">
          <img className="h-[7rem]" src={Note} alt="Note" />
        </div>
        <div className="pt-5">
          <h1 className="text-xl font-semibold">Banknotes Distribution</h1>
          <p className=" w-[90%] text-lg pt-4 pb-5 font-thin">
            Streamlined solution for the distribution of foreign banknotes, for
            businesses to manage foreign currency needs efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slidereact;
