import React from "react";
import Logo from "../assets/img/logo.png";
import { MdOutlineClose } from "react-icons/md";

function HeaderCompoent(props) {
  return (
    <div className="flex justify-between items-center h-24   ">
      <img
        src={Logo}
        className="w-52 h-20 object-contain"
        alt="Gautam Paladiya"
      />
      <div
        className={`${
          props.nav
            ? "block absolute top-0 left-0 right-0 bottom-0 z-50"
            : "hidden"
        } md:block z-50`}
      >
        <ul className=" md:relative md:bg-transparent bg-gray-300   flex flex-col md:flex-row items-center justify-between space-x-4">
          <li className="p-2 rounded-full  text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200">
            home
          </li>
          <li className="p-2 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200">
            portfolio
          </li>
          <li className="p-2 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200">
            pages
          </li>
          <li className="p-2 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200">
            blog
          </li>
          <li className="p-2 pr-0 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200">
            contact
          </li>
          <li className="md:hidden p-2 pr-0 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200">
            <MdOutlineClose size={40} onClick={props.toggleNav} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderCompoent;
