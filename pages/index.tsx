import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import Blog from "../components/Blog";
import clientPromise from "../lib/mongodb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

import BlogPost from "../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
};

const Home: NextPage<Props> = ({ posts }) => {
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
      <div className="w-full h-screen bg-primary-blue">
        <div className="content absolute z-10">
          <Navbar />
          <div className="hero w-screen h-[90vh] flex justify-center items-center">
            <img src="/voltec.png" alt="" className="h-1/4 lg:h-1/2" />
            <h1 className="text-6xl lg:text-10xl font-black opacity-100 text-white font-sans tracking-tighter leading-none">
              VOLTEC <br /> 6647
            </h1>
          </div>
        </div>
        <div className='bg-[url("/cover.jpeg")] absolute h-screen w-full bg-cover opacity-20'></div>
      </div>
      <Blog posts={posts} />
      <section className="nuestra-historia-index bg-secondary-blue border-t-2 border-white md:py-14 p-4 md:px-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="content z-10 flex flex-col justify-center items-start gap-4">
          <h1 className="title opacity-100 text-white font-sans tracking-tighter leading-none">
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
        <div className="images w-full h-72 md:h-full relative">
          <Image
            src="/DSC09099.png"
            layout="fill"
            height={50}
            width={100}
            alt="VOLTEC"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-72 md:h-full relative">
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
        error: true,
      },
    };
  }
}
