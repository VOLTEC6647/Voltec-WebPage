import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import Blog from "../components/Blog";
import clientPromise from "../lib/mongodb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import Announcement from "../components/Announcement";
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
      <div className="w-full h-screen bg-hero-blue">
        <div className="content absolute min-h-screen flex justify-between items-start flex-col z-20">
          <Navbar />
          <div className="hero w-screen flex h-full justify-center items-start flex-col p-4 md:px-8 gap-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-8xl lg:text-10xl font-black opacity-100 text-white font-sans tracking-tighter leading-squish w-full"
            >
              VOLTEC <br /> <span className="text-accent-blue">6647</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeInOut", delay: 1 }}
              className="text-left text-xl md:text-4xl font-manrope text-white font-medium"
            >
              Be <span className="text-yellow-500 font-black">Bold</span>, Be
              VOLTEC
            </motion.p>
          </div>
          <div className="bottom-row px-4 py-8 md:px-8 flex justify-between items-center w-full">
            <SocialIcons />
            <div className="copyright">
              <p className="text-accent-blue font-manrope">
                Copyright VOLTEC 2022 ©
              </p>
            </div>
          </div>
        </div>
        <div className='bg-[url("/cover.jpeg")] absolute min-h-screen w-full bg-cover opacity-10'></div>
      </div>
      <Blog posts={posts} error={error} />
      <section className="nuestra-historia-index bg-secondary-blue border-t-2 border-white md:py-14 pt-8 p-4 md:px-14 topography">
        <div className="content z-10 flex flex-col justify-center items-start gap-4 max-w-6xl mx-auto">
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
      </section>
      <div className="bg-secondary-blue border-t-2 border-neutral-300">
        <div className="hero-escuela-voltec h-[60vh] w-full flex justify-center items-start flex-col">
          <div className="absolute w-full text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter flex justify-center items-center">
              Escuela <span className="text-accent-blue">VOLTEC</span>
              {"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-10 md:h-16 lg:h-24 w-10 md:w-16 lg:w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </h1>
            <p className="font-manrope text-neutral-300 text-sm md:text-lg">
              Nuestro proyecto de acción social más grande.
            </p>
          </div>
          <div className="bg-[url('/DSC09250-min.JPG')] bg-cover absolute h-[60vh] w-full opacity-20" />
        </div>
        <div className="bg-white md:py-14 p-4 md:px-14 h-full">
          <h1 className="text-6xl font-bold tracking-tighter font-manrope">
            Sobre Escuela VOLTEC:
          </h1>
          <p className="text-neutral-400 font-manrope text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            assumenda mollitia provident quam neque dicta asperiores possimus.
            Nisi eveniet inventore reprehenderit ab quibusdam in, velit nam
            omnis, cumque, et alias? Esse ab explicabo quos hic nulla dolorem
            laboriosam harum perferendis id! Accusantium vero delectus mollitia
            in, molestiae, sit inventore non aspernatur laudantium perspiciatis,
            voluptate ipsam quaerat eum nihil tenetur dolorem! Quae impedit
            voluptatibus rem totam veritatis soluta, aperiam earum nemo esse
            quasi officia harum, alias fugiat laboriosam pariatur laudantium
            suscipit vitae quibusdam voluptas nesciunt? Suscipit asperiores
            accusantium animi? Esse, assumenda.
          </p>
          <div className="images grid grid-cols-1 md:grid-cols-3 w-full h-auto md:h-[40vh] gap-4 pt-2">
            <div className="image relative w-full h-64 lg:h-full">
              <Image
                src="/DSC09250-min.JPG"
                layout="fill"
                height={50}
                width={100}
                alt="Escuela VOLTEC Image"
                objectFit="cover"
              />
            </div>
            <div className="image relative w-full h-64 lg:h-full">
              <Image
                src="/DSC09312-min.JPG"
                layout="fill"
                height={50}
                width={100}
                alt="Escuela VOLTEC Image"
                objectFit="cover"
              />
            </div>
            <div className="image relative w-full h-64 lg:h-full">
              <Image
                src="/DSC09313-min.JPG"
                layout="fill"
                height={50}
                width={100}
                alt="Escuela VOLTEC Image"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
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
