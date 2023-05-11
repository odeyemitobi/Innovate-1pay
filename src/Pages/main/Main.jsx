import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import StartedBtn from "../../components/Button/StartedBtn";
import {
  MdOutlineRocketLaunch,
  MdOutlineTrendingDown,
  MdOutlineTrendingUp,
} from "react-icons/md";
import { BsArrowLeft, BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { FcComboChart } from "react-icons/fc";
import { AiOutlineSafety } from "react-icons/ai";
import Slidereact from "../sub/Slidereact";
import Contact from "../sub/Contact";
import Custom from "../sub/Custom";
import Real from "../sub/Real";
import Pricing from "../sub/Pricing";
import Bill from "../../Assets/img/bills.jpg";
import Cbn from "../../Assets/img/Central.png";
import First from "../../Assets/img/firstbank.png";
import Lian from "../../Assets/img/Lian.jpg";
import Swg from "../../Assets/img/Sw.jpg";
import Gtb from "../../Assets/img/gtbank.jpg";

function Main() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 600;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 600;
  };

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
        <div className="pt-[9rem] bg-neutral-100">
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
              <BsArrowLeft
                className=" cursor-pointer"
                onClick={scrollLeft}
                size={40}
                color="black"
              />
              <h1 className="text-3xl font-semibold">
                BENEFITS FOR YOUR BUSINESS
              </h1>
              <BsArrowRight
                className=" cursor-pointer"
                onClick={scrollRight}
                size={40}
                color="black"
              />
            </div>
            <div className="pt-[9rem]">
              <div
                id="content"
                className="w-full flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide "
              >
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
          <div className="py-[7rem] px-[28rem] flex justify-between">
            <div className="w-[30%] text-left place-items-center grid">
              <h1 className="text-[4rem]">
                Holistic Foreign Exchange Solutions
              </h1>
            </div>
            <div className="place-items-center grid">
              <img
                className="h-[45rem] w-[90%] rounded-[50%]"
                src={Bill}
                alt="Bill"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-neutral-200">
          <div className="py-[9rem] px-[18rem]">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">WHY TRUST US</h1>
            </div>
            <div className="pt-[8rem] flex justify-between">
              <div className="w-full px-8">
                <div className="w-[80%] border-b border-[#9B9B9B] pb-[3rem]">
                  <div className="flex items-center">
                    <BsCheck2Circle size={30} color="red" />
                    <h1 className="pl-1 text-xl font-semibold">CBN Licensed</h1>
                  </div>
                  <div className="pt-3">
                    <p className=" font-thin text-lg">
                      Holistic foreign exchange solutions, including
                      importation, exportation, and wholesale banknotes
                      distribution.
                    </p>
                  </div>
                </div>
                <div className="w-[80%] border-b border-[#9B9B9B] py-[3rem]">
                  <div className="flex items-center">
                    <BsCheck2Circle size={30} color="red" />
                    <h1 className="pl-1 text-xl font-semibold">
                      Customer Centred
                    </h1>
                  </div>
                  <div className="pt-3">
                    <p className=" w-[90%] font-thin text-lg">
                      Personalised solutioms delivered by professionals with
                      trust, transparency, and reliability.
                    </p>
                  </div>
                </div>
                <div className="w-[80%] py-[3rem]">
                  <div className="flex items-center">
                    <BsCheck2Circle size={30} color="red" />
                    <h1 className="pl-1 text-xl font-semibold">
                      Global Presence
                    </h1>
                  </div>
                  <div className="pt-3">
                    <p className=" w-[95%] font-thin text-lg">
                      Active partnerships and operations worldwide that cater
                      for international transactions and diverse customer
                      requirements
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className=" w-[85%] border-b px-5 border-[#9B9B9B] pb-[1.3rem]">
                  <div className="flex items-center">
                    <BsCheck2Circle size={30} color="red" />
                    <h1 className="pl-1 text-xl font-semibold">
                      Comprehensive Solutions
                    </h1>
                  </div>
                  <div className="pt-3">
                    <p className=" w-[90%] font-thin text-lg">
                      Numerous financial services, including foreign exchange
                      transactions, import and export services to seamlessly
                      meet your financial needs.
                    </p>
                  </div>
                </div>
                <div className=" w-[85%] border-b px-5 border-[#9B9B9B] py-[3rem]">
                  <div className="flex items-center">
                    <BsCheck2Circle size={30} color="red" />
                    <h1 className="pl-1 text-xl font-semibold">
                      Secure Transactions
                    </h1>
                  </div>
                  <div className="pt-3">
                    <p className=" font-thin text-lg">
                      Robust security measures to ensure secure and effective
                      financial transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-[9rem] px-[18rem]">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">OUR PARTNERS</h1>
            </div>
            <div className="w-full pt-5">
              <div className="flex items-center">
                <div>
                  <img className="h-[5rem]" src={Cbn} alt="" />
                </div>
                <div>
                  <img className="h-[5rem]" src={Cbn} alt="" />
                </div>
                <div>
                  <img className="h-[5rem]" src={Cbn} alt="" />
                </div>
                <div>
                  <img className="h-[5rem]" src={Cbn} alt="" />
                </div>
                <div>
                  <img className="h-[5rem]" src={Cbn} alt="" />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Main;
