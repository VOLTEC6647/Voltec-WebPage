import React, { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [mobileNavShowing, setMobileNavShowing] = useState(false);

  const toggleNav = () => {
    console.log("toggle");
    setMobileNavShowing(!mobileNavShowing);
  };

  return (
    <div className="navigation p-4 md:py-6 md:px-8 w-full text-lg z-50">
      <div className="links text-white md:flex justify-start items-center gap-6 font-space-grotesk font-bold hidden">
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/bitacora">
          <a>Bitácora</a>
        </Link>
        <Link href="/nuestra-historia">
          <a>Nuestra Historia</a>
        </Link>
        <Link href="/patrocinadores">
          <a>Patrocinadores</a>
        </Link>
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </div>
      <div
        className="hamburger block md:hidden text-white w-min cursor-pointer"
        onClick={toggleNav}
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
      <MobileNavbar mobileNavShowing={mobileNavShowing} toggleNav={toggleNav} />
    </div>
  );
};

export default Navbar;
