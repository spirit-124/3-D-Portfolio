import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
import Tilt from "react-tilt";
const SocialButtons = ({ tittle, styling, icon, href }) => {
  const index = 1;
  return (
    <Tilt>
      <a href={href} target="blank">
        <motion.button
          type=" text"
          className={` w-auto violet-gradient py-[1px] px-[1px]  rounded-[20px] shadow-card hover: transition-all duration-1000 ease-in md:py-0.5 md:px-0.5 flex-wrap`}
        >
          <div className=" rounded-[20px] md:py-3 md:px-3 py-2 px-3  flex justify-center items-center  ">
            <img src={icon} alt="" className=" w-7 h-7" />
            <span>{tittle}</span>
          </div>
        </motion.button>
      </a>
    </Tilt>
  );
};

export default SocialButtons;
