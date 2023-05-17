import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import StartedBtn from "../../components/Button/StartedBtn";
import {
  MdOutlineRocketLaunch,
  MdOutlineTrendingDown,
  MdOutlineTrendingUp,
} from "react-icons/md";
import {
  BsArrowLeft,
  BsArrowRight,
  BsCheck2Circle,
  BsInstagram,
} from "react-icons/bs";
import { FcComboChart } from "react-icons/fc";
import { AiOutlineSafety } from "react-icons/ai";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import Slidereact from "../sub/Slidereact";
import Contact from "../sub/Contact";
import Custom from "../sub/Custom";
import Real from "../sub/Real";
import Pricing from "../sub/Pricing";
import Ino from "../../Assets/img/Ino.svg";
import Bill from "../../Assets/img/bills.jpg";
import Cbn from "../../Assets/img/Central.png";
import First from "../../Assets/img/firstbank.png";
import Lian from "../../Assets/img/Lian.jpg";
import Swg from "../../Assets/img/Sw.jpg";
import Gtb from "../../Assets/img/gtbank.jpg";

const services = [
  {
    id: 1,
    smImage: <MdOutlineRocketLaunch color="red" size={100} />,
    image: <MdOutlineRocketLaunch color="red" size={50} />,
    title: "Effortless",
    content: (
      <span>
        Quick procedures for both <br /> banked and unbanked clients
      </span>
    ),
  },
  {
    id: 2,
    smImage: <FcComboChart color="" size={100} />,
    image: <FcComboChart color="" size={50} />,
    title: "Cost Efficient",
    content: (
      <span>
        Effective, money-saving <br /> service
      </span>
    ),
  },
  {
    id: 3,
    smImage: <AiOutlineSafety color="green" size={100} />,
    image: <AiOutlineSafety color="green" size={50} />,
    title: "Secure",
    content: <span>Strong tech partnerships</span>,
  },
];

function Main() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 600;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 600;
  };

  return (
    <MainLayout>
      <div className="">
        <div className="w-full home">
          <div className="w-full xl:px-[10rem] text-white pt-[11rem] place-items-center grid">
            <div className="items-center text-center">
              <h1 className="sm:text-5xl text-3xl">
                Streamlined Solutions for
              </h1>
              <p className=" sm:text-5xl text-3xl pt-3 font-semibold sm:leading-[4rem] leading-[2rem]">
                Wholesale Distribution & Management <br /> of Foreign Banknotes
              </p>
            </div>
            <div className="pt-[8rem]">
              <StartedBtn>Get Started</StartedBtn>
            </div>
            <div className="sm:block hidden pt-[5rem]">
              <div className=" bg-blue-900 text-white sm:py-8 py-4 sm:px-12 px-6 grid grid-cols-4 rounded-full">
                <div className="border-r-2 sm:px-14 px-4">
                  <div className="">
                    <p className="text-xs sm:text-2xl">$USD</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingUp color="green" size={35} />
                    </div>
                  </div>
                </div>
                <div className="border-r-2 sm:px-14 px-4">
                  <div className="">
                    <p className="text-xs sm:text-2xl">£GBP</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingDown color="red" size={35} />
                    </div>
                  </div>
                </div>
                <div className="border-r-2 sm:px-14 px-4">
                  <div className="">
                    <p className="text-xs sm:text-2xl">€EUR</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingDown color="red" size={35} />
                    </div>
                  </div>
                </div>
                <div className="sm:px-14 px-4">
                  <div className="">
                    <p className="text-xs sm:text-2xl">¥ YUAN</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingDown
                        color="red"
                        size={35}
                        className={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden block pt-[5rem]">
              <div className=" bg-blue-900 text-white py-10 sm:px-12 px-6 grid grid-cols-2 rounded-3xl">
                <div className="border-r-2 sm:px-14 px-4">
                  <div className="">
                    <p className="text-xs sm:text-2xl">$USD</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingUp color="green" size={20} />
                    </div>
                  </div>
                </div>
                <div className="sm:px-14 px-4">
                  <div className="">
                    <p className="text-xs sm:text-2xl">£GBP</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingDown color="red" size={20} />
                    </div>
                  </div>
                </div>
                <div className="border-r-2 sm:px-14 px-4 mt-10">
                  <div className="">
                    <p className="text-xs sm:text-2xl">€EUR</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingDown color="red" size={20} />
                    </div>
                  </div>
                </div>
                <div className="sm:px-14 px-4 mt-10">
                  <div className="">
                    <p className="text-xs sm:text-2xl">¥ YUAN</p>
                  </div>
                  <div className="pt-2 sm:pt-3 flex items-center">
                    <h1 className="text-md sm:text-2xl font-semibold">
                      430.00
                    </h1>
                    <div className="pl-3">
                      <MdOutlineTrendingDown
                        color="red"
                        size={20}
                        className={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[9rem]">
          <div className="bg-blue-900">
            <div className="place-items-center text-center grid h-[40vh]">
              <p className="sm:text-5xl text-white text-xl">
                Your business and institutional needs <br /> are made easy with
                Innovate1pay
              </p>
            </div>
          </div>
        </div>

        <div className="pt-[9rem] bg-neutral-100">
          <div className="">
            <div className="text-center">
              <h1 className="sm:text-3xl text-xl font-semibold">
                OUR SERVICES ARE
              </h1>
            </div>
            <div className="w-full flex pt-[4rem] justify-between">
              {services?.map((service) => (
                <div
                  key={service.id}
                  className="w-full text-center flex flex-col items-center"
                >
                  <div className="place-items-center grid sm:block hidden">
                    {service.smImage}
                  </div>
                  <div className="place-items-center grid sm:hidden block">
                    {service.image}
                  </div>
                  <h1 className="pt-4 font-semibold sm:text-xl text-md">
                    {service.title}
                  </h1>
                  <p className="font-thin sm:text-base text-xs">
                    {service.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center sm:pt-[12rem] pt-[8rem] pb-[8rem]">
              <StartedBtn>Get Started</StartedBtn>
            </div>
          </div>
        </div>

        <div className="sm:pt-[12rem] pt-[8rem] lg:px-[18rem] md:px-12 px-8 sm:pb-[14rem] pb-[10rem] bg-[#f0f8ff]">
          <div className="">
            <div className="text-center flex justify-between items-center">
              <div className="sm:block hidden">
                <BsArrowLeft
                  className="cursor-pointer"
                  onClick={scrollLeft}
                  size={40}
                  color="black"
                />
              </div>
              <div className="sm:hidden block">
                <BsArrowLeft
                  className=" cursor-pointer"
                  onClick={scrollLeft}
                  size={30}
                  color="black"
                />
              </div>
              <h1 className="sm:text-3xl text-xl font-semibold">
                BENEFITS FOR YOUR BUSINESS
              </h1>
              <div className="sm:block hidden">
                <BsArrowRight
                  className=" cursor-pointer"
                  onClick={scrollRight}
                  size={40}
                  color="black"
                />
              </div>
              <div className="sm:hidden block">
                <BsArrowRight
                  className=" cursor-pointer"
                  onClick={scrollRight}
                  size={30}
                  color="black"
                />
              </div>
            </div>
            <div className="sm:pt-[9rem] pt-[5rem]">
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
          <div className="py-[7rem] lg:px-[18rem] md:px-24 px-2 grid grid-cols-2 justify-between">
            <div className="w-[30%] text-left place-items-center grid">
              <h1 className="text-[4rem]">
                Holistic Foreign Exchange Solutions
              </h1>
            </div>
            <div className="place-items-center grid">
              <img className="h-[45rem] rounded-[50%]" src={Bill} alt="Bill" />
            </div>
          </div>
        </div>

        <div className="w-full bg-neutral-200">
          <div className="py-[9rem] lg:px-[18rem] md:px-16 px-2 ">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">WHY TRUST US</h1>
            </div>
            <div className="pt-[8rem] sm:grid sm:grid-cols-2 grid justify-between">
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
          <div className="py-[9rem]">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">OUR PARTNERS</h1>
            </div>
            <div className="w-full pt-5">
              <div className="flex justify-center ">
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Cbn} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={First} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Lian} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Swg} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Gtb} alt="" />
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Swg} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={First} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Lian} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Cbn} alt="" />
                </div>
                <div className="p-[2.5rem]">
                  <img className="h-[4rem]" src={Gtb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-blue-950">
          <div className="py-[6rem] lg:px-[18rem] md:px-16 px-2 sm:grid sm:grid-cols-3 grid md:justify-between">
            <div className="items-center">
              <div className="">
                <img className="h-[9rem]" src={Ino} alt="Ino" />
              </div>
              <div className="flex items-center">
                <div className="px-2">
                  <BsInstagram size={20} color="white" />
                </div>
                <div className="px-2">
                  <TiSocialTwitterCircular size={29} color="white" />
                </div>
                <div className="px-2">
                  <TiSocialFacebookCircular size={29} color="white" />
                </div>
                <div className="px-2">
                  <TiSocialLinkedinCircular size={29} color="white" />
                </div>
              </div>
            </div>
            <div className="text-center text-white">
              <h1 className="text-xl leading-[2.5rem] font-semibold">
                Contacts
              </h1>
              <p className="text-xl pt-3 leading-[2.5rem]">+234 903 229 3077</p>
              <p className="text-xl pt-3 leading-[2.5rem]">
                info@innovate1pay.com
              </p>
              <p className="text-xl  pt-3">
                No. 5, Onitsha Crescent, <br /> Garki, Abuja.
              </p>
            </div>
            <div className="text-center text-white md:pt-1 pt-20">
              <p className="text-xl">Terms & Condition</p>
              <p className="text-xl pt-3 leading-[2.5rem]">Policy</p>
            </div>
          </div>
        </div>

        <div className="border-t-2 bg-blue-950 border-[#9B9B9B]">
          <div className="">
            <div className="text-center place-items-center grid h-[8vh]">
              <h1 className="text-xl text-white">
                @ copyright 2023 innovate1pay
              </h1>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Main;
