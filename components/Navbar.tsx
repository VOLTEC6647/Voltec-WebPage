import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [showing, setShowing] = useState(false);

  const toggleNav = () => {
    console.log("toggle");
    setShowing(!showing);
  };

  return (
    <div className="navigation w-full text-lg z-50">
      <div
        className={`bar flex justify-between items-center p-4 md:py-6 md:px-8`}
      >
        <div
          onClick={toggleNav}
          className={`hover:text-accent-blue transition-all duration-100 hover:rounded-full hamburger-icon text-white justify-start items-center gap-6 font-space-grotesk font-bold`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <h1 className="font-space-grotesk font-medium text-white">
          VOLTEC Robotics 6647
        </h1>
        <Link href="/contacto">
          <a className="underline text-sm text-white hidden md:block">
            Contacto
          </a>
        </Link>
      </div>
      <AnimatePresence>
        {showing ? (
          <motion.div
            key={"navbar"}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className={`fixed top-0 z-10 bg-background-blue navbar-menu h-screen w-screen p-4 md:p-8 content grid grid-cols-1 md:grid-cols-3`}
          >
            <div className="col-1 col-span-2">
              <div
                onClick={toggleNav}
                className="hover:text-accent-blue transition-all duration-100 hover:rounded-full hamburger-icon text-white justify-start items-center gap-6 font-space-grotesk font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="links flex col-span-1 md:col-span-2 flex-col justify-start md:justify-center pt-4 md:pt-0 items-start font-space-grotesk md:h-[90vh]">
                <Link href="/">
                  <a className="text-white text-4xl md:text-6xl lg:text-9xl font-bold hover:text-accent-blue hover:underline">
                    Inicio
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="text-white text-4xl md:text-6xl lg:text-9xl font-bold hover:text-accent-blue hover:underline">
                    Blog
                  </a>
                </Link>
                <Link href="/weekly">
                  <a className="text-white text-4xl md:text-6xl lg:text-9xl font-bold hover:text-accent-blue hover:underline">
                    Periódico
                  </a>
                </Link>
                <Link href="/nuestra-historia">
                  <a className="text-white text-4xl md:text-6xl lg:text-9xl font-bold hover:text-accent-blue hover:underline">
                    Nuestra Historia
                  </a>
                </Link>
                <Link href="/calendario">
                  <a className="text-white text-4xl md:text-6xl lg:text-9xl font-bold hover:text-accent-blue hover:underline">
                    Calendario
                  </a>
                </Link>
                <Link href="/contacto">
                  <a className="text-white text-4xl md:text-6xl lg:text-9xl font-bold hover:text-accent-blue hover:underline">
                    Contacto
                  </a>
                </Link>
                <SocialIcons />
              </div>
            </div>
            <div className="col-2 w-full h-full">
              <div className="image h-full">
                <div className="relative h-full">
                  <Image
                    src="/DSC08996.png"
                    className="opacity-40"
                    alt="VOLTEC Logo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
