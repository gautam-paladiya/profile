import React, { useEffect, useRef, useState } from "react";
import HeaderCompoent from "../components/HeaderCompoent";
import NavMenuComponent from "../components/NavMenuComponent";
import ProfileCardComponent from "../components/ProfileCardComponent";
import BackgroundImage from "../assets/img/background.jpg";
import IndexPageComponent from "../sections/IndexPageComponent";
import WorkExperienceComponent from "../sections/WorkExperienceComponent";
import ContactMeComponent from "../sections/ContactMeComponent";
import { motion } from "framer-motion";

const initialState = {
  scroll: false,
  navToggle: false,
};

function IndexPage() {
  const [state, setstate] = useState(initialState);
  const inputEl = useRef(null);

  const handleScroll = (e) => {
    console.log("e", window.pageYOffset);
    if (window.pageYOffset >= 100) {
      setstate({ ...state, scroll: true });
    } else {
      setstate({ ...state, scroll: false });
    }
  };

  useEffect((e) => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setstate({ ...state, navToggle: !state.navToggle });
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`sticky self-start  mx-10 left-5 w-1/5 hidden md:block transition-all delay-200 ${
          state.scroll ? "top-5 " : "top-24 "
        }`}
      >
        <ProfileCardComponent />
      </motion.div>
      <div
        className="w-full md:w-8/12 md:mx-5 self-center  flex flex-col"
        ref={inputEl}
        onScroll={handleScroll}
      >
        <HeaderCompoent nav={state.navToggle} toggleNav={toggleNav} />
        <div className="px-2 md:px-0">
          <IndexPageComponent />
          <WorkExperienceComponent />
          <ContactMeComponent />
        </div>
      </div>
      <div className="fixed right-0 top-5 mx-10 w-1/12 md:hidden">
        <NavMenuComponent toggleNav={toggleNav} />
      </div>
    </div>
  );
}

export default IndexPage;
