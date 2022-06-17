import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  mobileNavShowing: boolean;
  toggleNav: () => void;
};

const MobileNavbar = ({ mobileNavShowing, toggleNav }: Props) => {
  return (
    <div
      className={`mobile-navbar ${
        mobileNavShowing ? "block" : "hidden"
      } w-screen h-screen bg-background-blue absolute z-50 top-0 left-0 p-4 text-white block md:hidden`}
    >
      <div
        className="hamburger block md:hidden text-white w-min z-50 cursor-pointer"
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
      <div className="pt-8">
        <Image
          src={"/voltec.png"}
          layout={"intrinsic"}
          width={150}
          height={150}
          objectFit="contain"
          alt={"VOLTEC logo"}
        ></Image>
      </div>
      <div
        className="navbar-content font-manrope flex flex-col gap-4 text-4xl sm:text-6xl  font-bold"
        onClick={toggleNav}
      >
        <Link href="/">
          <a className="hover:underline">Inicio</a>
        </Link>
        <Link href="/blog">
          <a className="hover:underline">Blog</a>
        </Link>
        <Link href="/bitacora">
          <a className="hover:underline">Bitácora</a>
        </Link>
        <Link href="/nuestra-historia">
          <a className="hover:underline">Nuestra Historia</a>
        </Link>
        <Link href="/patrocinadores">
          <a className="hover:underline">Patrocinadores</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
