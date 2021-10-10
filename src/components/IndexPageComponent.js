import React from "react";
import { FaShareAlt } from "react-icons/fa";
import StarRatingComponent from "./StarRatingComponent";

function IndexPageComponent() {
  return (
    <div className="bg-white w-full px-5 md:px-10 py-5  border border-gray-300 overflow-x-hidden  ">
      <h1 className="font-bold uppercase tracking-normal text-2xl mb-5">
        ABOUT ME
      </h1>
      <p className="text-justify tracking-wider font-medium leading-7 ">
        <span className="font-bold mb-5 ">Helo, I’m Gautam Paladiya!</span>
        <br /> I am talanted florist and decorator. I have graduated from
        International and cultural university of design and arts. Since first
        year in high school I relized that nature is most powerfull and
        beautiful gift in the world. I was captivated by beauty and simplicity
        of flowers and trees. Since then I have started to create and mastering
        unique and nice bouquets. My 1st masterpiece was garden of ant Ula Lowe
        decorated by me
      </p>
      <div className="my-10">
        <button className="flex items-center border-2 rounded-full px-4 py-1 border-blue-300">
          <FaShareAlt />
          <span className="text-base font-semibold ml-3 cursor-pointer">
            SHARE
          </span>
        </button>
      </div>
      <div className="w-full h-1 border-b-2 my-10" />
      <div className="flex flex-col items-start md:flex-row md:space-x-10 ">
        <div className="flex flex-col items-start w-full ">
          <h1 className=" text-2xl font-bold my-5 uppercase">
            Personal Information
          </h1>
          <table className="space-y-2 border-collapse ">
            <tbody>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">FULL NAME</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Paladiya Gautam Rajubhai
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">D.O.B.</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  31 Aug 1996
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">ADDRESS</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Lublin, 20-400, ,
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">E-MAIL</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Mrpaladiyagautam@gmail.com
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">PHONE</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  +48 729213040
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">FREELANCE</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-start w-full ">
          <h1 className=" text-2xl font-bold my-5 uppercase ">languages</h1>
          <div className="flex flex-col my-1">
            <h1 className="font-semibold">English</h1>
            <div className="flex justify-between space-x-5">
              <StarRatingComponent star={5} />
              <div className="font-light ">native</div>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="font-semibold">Polish</h1>
            <div className="flex justify-between space-x-5">
              <StarRatingComponent star={5} />
              <div className="font-light ">intermediate</div>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="font-semibold">German</h1>
            <div className="flex justify-between space-x-5">
              <StarRatingComponent star={5} />
              <div className="font-light ">begginer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPageComponent;
