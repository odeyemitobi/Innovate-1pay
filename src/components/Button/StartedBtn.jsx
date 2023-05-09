import React from "react";

function StartedBtn(props) {
  return (
    <button className=" bg-orange-600 hover:bg-blue-700 text-white text-2xl font-normal py-5 px-20 rounded-full">
      {props.children}
    </button>
  );
}

export default StartedBtn;
