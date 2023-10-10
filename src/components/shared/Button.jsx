import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
import Tilt from "react-tilt";
const Button = ({ tittle, styling, icon, href }) => {
  const index = 1;
  return (
    <Tilt>
      <a href={href}>
        <motion.button
          type=" text"
          className={` w-auto green-pink-gradient py-[1px] px-[1px]  rounded-[20px] shadow-card hover: transition-all duration-1000 ease-in md:py-0.5 md:px-0.5 `}
        >
          <div className="bg-tertiary rounded-[20px] md:py-3 md:px-3 py-2 px-3  flex justify-evenly items-center gap-2 ">
            <img src={icon} alt="" className=" w-7 h-7" />
            <span className=" break-words">{tittle}</span>
          </div>
        </motion.button>
      </a>
    </Tilt>
  );
};

export default Button;
