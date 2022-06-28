import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import Blog from "../components/Blog";
import clientPromise from "../lib/mongodb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";

import BlogPost from "../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
  error: any;
};

const Home: NextPage<Props> = ({ posts, error }) => {
  return (
    <div className="app">
      <Head>
        <title>VOLTEC Robotics 6647</title>
        <meta
          name="description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />

        <meta itemProp="name" content="VOLTEC Robotics 6647" />
        <meta
          itemProp="description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta itemProp="image" content="https://voltec.medina.dev/voltec.png" />

        <meta property="og:url" content="https://voltec.medina.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VOLTEC Robotics 6647" />
        <meta
          property="og:description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta
          property="og:image"
          content="https://voltec.medina.dev/voltec.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VOLTEC Robotics 6647" />
        <meta
          name="twitter:description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta
          name="twitter:image"
          content="https://voltec.medina.dev/voltec.png"
        />
      </Head>
      <div className="w-full h-[100vh] bg-hero-blue">
        <div className="content absolute h-[85vh] z-10">
          <Navbar />
          <div className="hero w-screen flex h-full justify-center items-start flex-col p-4 md:px-8 gap-4">
            <h1 className="text-7xl lg:text-10xl font-black opacity-100 text-white font-sans tracking-tighter leading-squish w-full">
              VOLTEC <br /> <span className="text-accent-blue">6647</span>
            </h1>
            <p className="text-left text-xl md:text-4xl font-manrope text-white font-medium">
              Be <span className="text-yellow-500">Bold</span>, Be VOLTEC
            </p>
          </div>
          <div className="bottom-row px-4 md:px-8 flex justify-between items-center w-full">
            <div className="social-icons text-accent-blue flex justify-start items-center gap-5">
              <div className="icon w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentcolor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </div>
              <div className="icon w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill={"currentcolor"}
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </div>
              <div className="icon w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentcolor"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
              </div>
              <div className="icon w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill={"currentcolor"}
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  />
                </svg>
              </div>
            </div>
            <div className="copyright">
              <p className="text-accent-blue font-manrope">
                Copyright VOLTEC 2022 ©
              </p>
            </div>
          </div>
        </div>
        <div className='bg-[url("/cover.jpeg")] absolute h-full w-full bg-cover opacity-10'></div>
      </div>
      <Blog posts={posts} error={error} />
      <section className="nuestra-historia-index bg-secondary-blue border-t-2 border-white md:py-14 pt-8 p-4 md:px-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="content z-10 flex flex-col justify-center items-start gap-4">
          <h1 className="text-4xl md:text-5xl font-black opacity-100 text-white font-sans tracking-tighter leading-none">
            Nuestra <span className="text-pink-400">Historia 👋</span>
          </h1>
          <p className="text-white font-manrope text-sm md:text-lg">
            Somos VOLTEC, equipo de robótica que siempre está listo para
            desarrollar su potencial ante cualquier reto sin importar el nivel
            de dificultad. Sabemos valorar nuestra comunidad y el impacto que
            generamos en ella a través de la ciencia y tecnología, así com ellos
            impactan en nuestro crecimiento como equipo. A pesar de que nuestra
            ciudad y país están pasando por situaciones difíciles, tenemos la
            certeza de que tenemos el potencial para generar un cambio. Estamos
            determinados a generar un impacto en cada persona de nuestro
            entorno, sin importar edad , condición económica o condición.
          </p>
          <Link href="/nuestra-historia">
            <a className="bg-blue-500 w-full text-center text-white font-manrope tracking-tighter text-sm md:text-lg py-2 px-8 rounded-xl">
              Conoce más →
            </a>
          </Link>
        </div>
        <div className="images w-full h-72 lg:h-full relative">
          <Image
            src="/DSC09099.png"
            layout="fill"
            height={50}
            width={100}
            alt="VOLTEC"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-72 lg:h-full relative">
          <Image
            src={"/DSC09003-e.jpg"}
            layout={"fill"}
            height={50}
            width={100}
            objectFit={"cover"}
            alt={"Escuela VOLTEC picture"}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const posts = await db.collection("Posts").find({}).limit(3).toArray();
    console.log("index.tsx " + JSON.parse(JSON.stringify(posts)));

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        error: JSON.stringify(e),
      },
    };
  }
}
