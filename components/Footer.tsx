import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-900 border-t-2 border-white pt-4 md:pt-14 p-5 md:p-14 font-manrope gap-2 md:gap-4">
      <div className="voltec-logo relative flex justify-start items-center h-full overflow-hidden col-span-1 py-6 md:py-0">
        <img src="/voltec.png" alt="voltec" className="h-36 md:h-56 object-contain" />
        <h1 className="text-5xl xl:text-7xl font-black tracking-tighter font-sans text-white leading-none">
          VOLTEC <br /> 6647
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-16 justify-center items-center">
        <div className="links text-white col-span-1 flex flex-col font-manrope h-full justify-start gap-4">
          <Link href="/">
            <a className="hover:underline text-lg">Inicio</a>
          </Link>
          <Link href="/blog">
            <a className="hover:underline text-lg">Blog</a>
          </Link>
          <Link href="/bitacora">
            <a className="hover:underline text-lg">Bitácora</a>
          </Link>
          <Link href="/nuestra-historia">
            <a className="hover:underline text-lg">Nuestra Historia</a>
          </Link>
          <Link href="/patrocinadores">
            <a className="hover:underline text-lg">Patrocinadores</a>
          </Link>
        </div>
        <div className="links text-white col-span-1 flex flex-col font-manrope leading-loose h-full justify-start gap-4">
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.instagram.com/voltecrobotics6647/"
            className="hover:underline text-lg"
          >
            Instagram
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/VOLTECrobotics6647/"
            className="hover:underline text-lg"
          >
            Facebook
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://twitter.com/voltec6647"
            className="hover:underline text-lg"
          >
            Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.tiktok.com/@voltectok"
            className="hover:underline text-lg"
          >
            TikTok
          </a>
        </div>
      </div>
      <div className="email w-full flex flex-col gap-4 justify-start h-full pt-8">
        <p className="text-white text-xl tracking-tighter">Recibir Correos</p>
        <form className="flex flex-col justify-start">
          <input
            className="p-4 font-mono"
            type="text"
            placeholder="daniel@voltec6647.com"
          />
          <button
            type="submit"
            className="email-button p-4 text-white tracking-tighter text-xl"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
