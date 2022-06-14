import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Post from "../components/Post";

const Home: NextPage = () => {
  return (
    <div className="app">
      <div className="w-screen h-screen bg-primary-blue">
        <div className="content absolute z-10">
          <div className="navigation py-6 px-8 w-full">
            <div className="links text-white flex justify-center lg:justify-start items-center gap-6 font-space-grotesk font-bold">
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
            <img src="/voltec.png" alt="" className="h-1/4 lg:h-1/2" />
            <h1 className="text-6xl lg:text-10xl font-black opacity-100 text-white font-sans tracking-tighter leading-none">
              VOLTEC <br /> 6647
            </h1>
          </div>
        </div>
        <div className='bg-[url("/cover.jpeg")] absolute h-full w-full bg-cover opacity-20'></div>
      </div>
      <div className="blog bg-background-blue p-4 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="headings pt-4 lg:pt-0 pb-8">
            <h1 className="title text-white pb-5">Blog ⚡️</h1>
            <hr />
          </div>
          <div className="posts flex flex-col gap-6">
            <Post
              title="Escuela VOLTEC"
              body={
                "Basic Attention Token detected some zero confirmation transaction for a FOMO! Monero broadcast few segregated witness after the oracle, therefore, Mt. Gox looked at many decentralisation at a dead cat bounce."
              }
              badges={["community", "offseason"]}
              src={"/escuela-voltec.jpeg"}
            />
            <Post
              title="This is AtosBot"
              src={"/atosbot.jpeg"}
              body={
                "Basic Attention Token detected some zero confirmation transaction for a FOMO! Monero broadcast few segregated witness after the oracle, therefore, Mt. Gox looked at many decentralisation at a dead cat bounce."
              }
              badges={["robots", "information"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
