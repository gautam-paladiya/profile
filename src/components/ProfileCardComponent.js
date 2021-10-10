import React, { useEffect, useState } from "react";
import AvatarImage from "../assets/img/avatar.png";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaGithub,
  FaMediumM,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ProfileCardComponent() {
  const [state, setstate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setstate(1);
    }, 3000);
  }, []);

  return (
    <motion.div className=" rounded-lg shadow-lg w-full flex flex-col bg-gray-100">
      <div className=" flex flex-col p-5  items-center bg-blue-200">
        <img src={AvatarImage} alt="" className="rounded-full w-52 h-52" />
        <h1 className="text-2xl font-semibold  mt-5 text-center">
          Gautam Paladiya
        </h1>
        <h2 className="text-lg font-normal mt-5 text-center text-gray-400">
          Full stack developer
        </h2>
        <div className="flex items-center mt-5 mb-5 w-full justify-between">
          <FaFacebookF size={22} />
          <FaTwitter size={22} />
          <FaGooglePlusG size={22} />
          <FaMediumM size={22} />
          <FaGithub size={22} />
        </div>
      </div>
      <button className="px-8 py-2 uppercase mx-auto text-base bg-black text-gray-200 my-6 rounded-full self-center ">
        download resume
      </button>
    </motion.div>
  );
}

export default ProfileCardComponent;
