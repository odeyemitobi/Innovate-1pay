import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Note from "../../Assets/pic/note.jpg";

function Slidereact() {
  return (
    <div className="w-full flex justify-between">
      <div className=" w-[30%] rounded-[10px] bg-white">
        <div className="px-5 py-5">
          <img className="h-[7rem]" src={Note} alt="Note" />
          <h1 className="">Banknotes Distribution</h1>
          <p>
            Streamlined solution for the distribution of foreign banknotes, for
            businesses to manage foreign currency needs efficiently
          </p>
        </div>
      </div>
      <div className=" w-[30%] rounded bg-white">
        <img className="h-[3rem]" src={Note} alt="Note" />
      </div>
      <div className=" w-[30%] rounded bg-white">
        <img className="h-[3rem]" src={Note} alt="Note" />
      </div>
    </div>
  );
}

export default Slidereact;
