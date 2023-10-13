import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion.js";
import { Resume, hire } from "../assets";
import { socials } from "../costants/index";

import Button from "./shared/Button";
import SocialButtons from "./shared/Socials";

const Hero = () => {
  return (
    <>
      <section
        className={`relative w-full h-screen mx-auto  ${styles.paddingX}`}
      >
        <div className={` flex flex-col mx-auto inset-0 max-w-7xl `}>
          <div
            className={`absolute  top-[120px]  flex flex-row ${styles.paddingX}  items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1
                className={`${styles.heroHeadText} text-white`}
                variants={textVariant()}
              >
                Hi, I'm <span className="text-[#915EFF]">Bajrang</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop Frontend, Backend <br className="sm:block hidden" />
                and Full Stack web applications.
              </p>
              <div className=" md:mt-20  mt-10 flex justify-start gap-5">
                <Button
                  tittle="resume"
                  icon={Resume}
                  href="https://drive.google.com/file/d/1broLdJuDRR3aRXNhix_Y-I9d__rMW4-g/view?usp=sharing"
                />
                <Button tittle="Hire Me" icon={hire} href="#contact" />
              </div>
              <div className=" md:mt-10  mt-16 flex justify-start gap-5">
                {socials.map((social, index) => (
                  <SocialButtons
                    key={index}
                    icon={social.icon}
                    href={social.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <ComputersCanvas /> */}

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
