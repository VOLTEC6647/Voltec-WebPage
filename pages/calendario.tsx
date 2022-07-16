import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";

const Calendario = () => {
  return (
    <div>
      <Head>
        <title>Calendario | VOLTEC Robotics 6647</title>
      </Head>
      <div className="bg-background-blue h-screen w-full">
        <Navbar />
        <div className="image h-1/3">
          <div className="image-container relative h-full w-full">
            <Image
              src={"/blue.jpeg"}
              alt="AtosBot, the VOLTEC robot"
              layout="fill"
              objectFit="cover"
              className="blur-sm"
            />
          </div>
        </div>
        <div className="content p-4 lg:p-14 bg-background-blue">
          <div className="max-w-6xl mx-auto h-full">
            <div className="heading pb-5">
              <h1 className="title text-white">Calendario 📅</h1>
              <p className="font-manrope text-lg text-neutral-300">Este es el calendario oficial de <span className="text-accent-blue font-bold">VOLTEC Robotics 6647</span></p>
            </div>
            <div className="calendar-page w-full flex justify-center items-center">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=c_q6a8an621pt2alhuma9g49h67g%40group.calendar.google.com&ctz=America%2FMexico_City"
                style={{ border: "solid 1px #777" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Calendario;
