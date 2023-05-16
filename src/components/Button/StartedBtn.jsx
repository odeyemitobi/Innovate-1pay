import React from "react";

function StartedBtn(props) {
  return (
    <button className="bg-orange-600 hover:bg-blue-700 text-white sm:text-2xl text-xl font-normal sm:py-5 py-3 sm:px-20 px-12 rounded-full">
      {props.children}
    </button>
  );
}

export default StartedBtn;
