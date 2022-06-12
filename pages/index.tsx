import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-primary-blue">
      <div className="content absolute z-10">
        <div className="navigation py-6 px-8 w-full">
          <div className="links text-white flex justify-start items-center gap-6 font-space-grotesk font-bold">
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/">
              <a>Bitácora</a>
            </Link>
            <Link href="/">
              <a>Nuestra Historia</a>
            </Link>
            <Link href="/">
              <a>Patrocinadores</a>
            </Link>
          </div>
        </div>
        <div className="hero w-screen h-[90vh] flex justify-center items-center">
          <img src="/voltec.png" alt="" className="h-1/2" />
          <h1 className="text-10xl font-black opacity-100 text-white font-sans tracking-tighter leading-none">
            VOLTEC <br /> 6647
          </h1>
        </div>
      </div>
      <div className='bg-[url("/cover.jpeg")] absolute h-full w-full bg-cover opacity-20'></div>
    </div>
  );
};

export default Home;
