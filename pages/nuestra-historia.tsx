import { NextPage } from "next";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const Historia: NextPage = () => {
  return (
    <div className="bg-background-blue h-full w-screen">
      <Navbar />
      <div className="image h-1/3">
        <div className="image-container relative h-64 w-full cursor-pointer">
          <Image
            src={"/historia.jpeg"}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
            className="blur-sm"
          />
        </div>
      </div>
      <div className="p-4 lg:p-14 bg-background-blue">
        <div className="max-w-6xl mx-auto h-full">
          <div className="headings pt-0 pb-8 flex flex-col gap-4">
            <h1 className="title text-white pb-5 hover:underline">
              Nuestra Historia 📘
            </h1>
            <hr />
            <p className="text-sm md:text-lg text-white font-manrope pt-4">
              Somos Voltec, equipo de robótica que siempre está listo para
              desarrollar su potencial ante cualquier reto sin importar el nivel
              de dificultad. Sabemos valorar nuestra comunidad y el impacto que
              generamos en ella a través de la ciencia y tecnología, así com
              ellos impactan en nuestro crecimiento como equipo. A pesar de que
              nuestra ciudad y país están pasando por situaciones difíciles,
              tenemos la certeza de que tenemos el potencial para generar un
              cambio. Estamos determinados a generar un impacto en cada persona
              de nuestro entorno, sin importar edad , condición económica o
              condición.
            </p>
            <Image
              src="/cover.jpeg"
              alt="a"
              layout="responsive"
              height={70}
              width={100}
              objectFit={"cover"}
            />
            <Image
              src="/IMG_3673.jpeg"
              alt="a"
              layout="responsive"
              height={60}
              width={100}
              objectFit={"cover"}
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/DSC08708.jpeg"
                alt="a"
                layout="responsive"
                height={60}
                width={100}
                objectFit={"cover"}
              />
              <Image
                src="/DSC08702.jpeg"
                alt="a"
                layout="responsive"
                height={60}
                width={100}
                objectFit={"cover"}
              />
            </div>
            <Image
              alt="a"
              src={"/DSC08733.jpeg"}
              layout="responsive"
              height={100}
              width={100}
              objectFit={"cover"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Historia;