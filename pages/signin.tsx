import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { signIn } from "next-auth/react";

const signin = () => {
  return (
    <div className="h-screen w-screen bg-background-blue">
      <div className="nav bg-background-blue z-10">
        <Navbar />
      </div>
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full cursor-pointer">
          <Image
            src={"/chip.jpeg"}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
            className="blur-md"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="info filter z-10">
          <div className="heading text-white py-12 h-full flex flex-col justify-center items-start">
            <h1 className="title text-white">Iniciar Sesión 🔧</h1>
            <p className="font-manrope text-sm md:text-lg">
              🔑 Esta sección es solo para miembros de VOLTEC.
            </p>
          </div>
        </div>
        <div className="form w-full border-2 topography rounded-xl border-white z-10 p-6 text-white flex flex-col justify-center items-start gap-5 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">Sign In</h1>
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: `${window.location.origin}/admin`,
              })
            }
            className="bg-white rounded-lg hover:bg-gray-100 text-black w-full py-3 flex justify-center items-center gap-4"
          >
            <div className="google-logo relative w-8 h-8">
              <Image src="/google.png" layout="fill" alt="Google logo" />
            </div>
            <p className="text-lg font-manrope tracking-tighter font-bold">
              Sign in with Google
            </p>
          </button>
          <div className="email-and-password py-4 w-full flex flex-col justify-center items-center gap-4">
            <input
              required={true}
              type="text"
              name="email"
              id="email"
              placeholder="robot@voltec6647.com"
              className="p-4 bg-gray-900 w-full rounded-lg outline-none"
            />
            <input
              required={true}
              type="password"
              name="email"
              id="email"
              placeholder="password"
              className="p-4 bg-gray-900 w-full rounded-lg outline-none"
            />
          </div>
          <div className="submit w-full">
            <button
              type="submit"
              className="w-full bg-pink-400 rounded-lg text-white py-3"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default signin;
