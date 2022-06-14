import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navigation py-6 px-8 w-full text-lg">
      <div className="links text-white flex justify-center lg:justify-start items-center gap-6 font-space-grotesk font-bold">
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/bitacora">
          <a>Bitácora</a>
        </Link>
        <Link href="/historia">
          <a>Nuestra Historia</a>
        </Link>
        <Link href="/patrocinadores">
          <a>Patrocinadores</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
