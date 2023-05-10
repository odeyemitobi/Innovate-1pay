import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import StartedBtn from "../../components/Button/StartedBtn";
import {
  MdOutlineRocketLaunch,
  MdOutlineTrendingDown,
  MdOutlineTrendingUp,
} from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { FcComboChart } from "react-icons/fc";
import { AiOutlineSafety } from "react-icons/ai";
import Slidereact from "../sub/Slidereact";
import Contact from "../sub/Contact";
import Custom from "../sub/Custom";
import Real from "../sub/Real";
import Pricing from "../sub/Pricing";

function Main() {

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 600;
  }

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 600;
  }

  return (
    <MainLayout>
      <div className="pt-[7rem]">
        <div className="w-full home">
          <div className="w-full px-[18rem] text-white pt-[11rem] place-items-center grid">
            <div className="items-center text-center">
              <h1 className=" text-[3rem]">Streamlined Solutions for</h1>
              <p className="  text-[3.5rem] font-semibold">
                Wholesale Distribution & Management <br /> of Foreign Banknotes
              </p>
            </div>
            <div className="pt-[8rem]">
              <StartedBtn>Get Started</StartedBtn>
            </div>
            <div className="pt-[5rem]">
              <div className="rounded-full cursor-pointer bg-blue-900 px-[40px] py-[40px]">
                <div className="flex">
                  <div className=" border-r-2 px-16">
                    <p className="text-2xl leading-[3rem]">$USD</p>
                    <div className="flex items-center">
                      <p className="text-4xl font-semibold">430.00</p>
                      <div className="pl-3">
                        <MdOutlineTrendingUp size={35} color="#15a315" />
                      </div>
                    </div>
                  </div>
                  <div className=" border-r-2 px-16">
                    <p className="text-2xl leading-[3rem]">£GBP</p>
                    <div className="flex items-center">
                      <p className="text-4xl font-semibold">430.00</p>
                      <div className="pl-3">
                        <MdOutlineTrendingDown size={35} color="red" />
                      </div>
                    </div>
                  </div>
                  <div className=" border-r-2 px-16">
                    <p className="text-2xl leading-[3rem]">€EUR</p>
                    <div className="flex items-center">
                      <p className="text-4xl font-semibold">430.00</p>
                      <div className="pl-3">
                        <MdOutlineTrendingDown size={35} color="red" />
                      </div>
                    </div>
                  </div>
                  <div className="px-16">
                    <p className="text-2xl leading-[3rem]">¥ YUAN</p>
                    <div className="flex items-center">
                      <p className="text-4xl font-semibold">430.00</p>
                      <div className="pl-3">
                        <MdOutlineTrendingDown size={35} color="red" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[9rem]">
          <div className="bg-blue-900 px-[18rem]">
            <div className=" place-items-center text-center grid h-[40vh]">
              <p className="text-[3rem] text-white ">
                Your business and institutional needs <br /> are made easy with
                Innovate1pay
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[9rem] bg-[]">
          <div className="px-[18rem]">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">OUR SERVICES ARE</h1>
            </div>
            <div className="w-full flex pt-[4rem] justify-between">
              <div className="w-full text-center">
                <div className="place-items-center grid">
                  <MdOutlineRocketLaunch color="black" size={135} />
                </div>
                <h1 className="pt-4 font-semibold text-xl">Effortless</h1>
                <p className=" font-thin">
                  Quick procedures for both <br /> banked and unbanked clients
                </p>
              </div>
              <div className="w-full text-center">
                <div className="place-items-center grid">
                  <FcComboChart color="black" size={135} />
                </div>
                <h1 className="pt-4 font-semibold text-xl">Cost Efficient</h1>
                <p className="font-thin">
                  Effective, money-saving <br /> service
                </p>
              </div>
              <div className="w-full text-center">
                <div className="place-items-center grid">
                  <AiOutlineSafety color="black" size={135} />
                </div>
                <h1 className="pt-4 font-semibold text-xl">Secure</h1>
                <p className="font-thin">Strong tech partnerships</p>
              </div>
            </div>
            <div className="text-center pt-[12rem] pb-[8rem]">
              <StartedBtn>Get Started</StartedBtn>
            </div>
          </div>
        </div>
        <div className="pt-[12rem] pb-[14rem] bg-[#f0f8ff]">
          <div className="px-[18rem]">
            <div className="text-center flex justify-between">
              <BsArrowLeft className=" cursor-pointer" onClick={scrollLeft} size={40} color="black" />
              <h1 className="text-3xl font-semibold">
                BENEFITS FOR YOUR BUSINESS
              </h1>
              <BsArrowRight className=" cursor-pointer" onClick={scrollRight} size={40} color="black" />
            </div>
            <div className="pt-[9rem]">
              <div id="content" className="w-full flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide ">
                <div className="">
                  <Slidereact />
                </div>
                <div>
                  <Contact />
                </div>
                <div>
                  <Custom />
                </div>
                <div>
                  <Real />
                </div>
                <div>
                  <Pricing />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="pt-5">
            hello
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Main;
