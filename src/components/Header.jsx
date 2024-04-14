import React, { useEffect, useState } from "react";
import { navLinks } from "../data/Data.jsx"
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./navbar/MobileNavLinks";
import NavLink from "./navbar/NavLink";
import { logos } from "../data/Data.jsx";
import { motion } from "framer-motion";

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div className="">
      <div className={`${active ? "" : ""} `}>
        <div className="flex justify-between  items-center bg-Teal">

          <div className="text-xl  uppercase tracking-wide  justify-center ">
            <img src={logos[0]} alt="Logo principal" className="h-20 w-auto" />
          </div>
          <div className="text-xl w-full uppercase tracking-wide ml-2 justify-center">
            <img src={logos[3]} alt="Logo principal" className="h-20" />
          </div>
        </div>
      </div>

      <header
        className={`${active ? "top-0" : ""
          } shadow-lg   w-full  left-0  bg-[#201E1E]`}
      >

        <div>
          <div
            className={`${active ? " transition-all duration-300" : "py-4"
              } mx-auto flex items-center justify-between px-2 py-4`}
          >
            <div className="flex items-center gap-4 bg-slate-50">
              <HiMenuAlt1
                className="text-3xl sm:hidden cursor-pointer"
                onClick={() => setToggle(true)}
              />
            </div>

            <div className="flex">
              <div className="sm:flex justify-end hidden">
                {navLinks.map((navLink) => {
                  return (
                    <NavLink key={navLink.id} {...navLink} />
                  );
                })}

              </div>

            </div>
            |
            {toggle && (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
              >
                {navLinks.map((navLink) => {
                  return (
                    <MobileNavLinks
                      key={navLink.id}
                      {...navLink}
                      setToggle={setToggle}
                    />
                  );
                })}
                <HiX
                  className="absolute right-12 top-12 text-3xl cursor-pointer"
                  onClick={(prev) => setToggle(!prev)}
                />
              </motion.div>
            )}


          </div>
        </div>
        <div className=""></div>
      </header>
    </div>
  )
}

export default Header