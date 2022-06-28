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
    <div className="navigation p-4 md:py-6 md:px-8 w-full text-lg z-50 flex justify-between items-center">
      <div className="hamburger-icon text-white justify-start items-center gap-6 font-space-grotesk font-bold">
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
        <a className="underline text-sm text-white hidden md:block">Contacto</a>
      </Link>
    </div>
  );
};

export default Navbar;
