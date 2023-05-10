import React from "react";
import { TbTransformFilled } from "react-icons/tb";

function Pricing() {
  return (
    <div className=" w-[20rem] mr-[4rem] justify-center rounded-3xl bg-white">
      <div className="px-[2rem] pt-[2rem] pb-[7rem]">
        <div>
          <TbTransformFilled size={110} color="brown" />
        </div>
        <div className="pt-4">
          <h1 className="text-xl font-semibold">Transparent Pricing</h1>
          <p className=" w-[85%] text-lg pt-4 pb-7 font-thin">
            Transparent prices and visibility into costs and rates for
            transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
