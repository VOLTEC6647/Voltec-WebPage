import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div className="bg-background-blue h-screen">
      <Navbar />
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
      <div className="max-w-6xl mx-auto py-14 bg-background-blue">
        <div className="headings pt-4 lg:pt-0 pb-8 px-5">
          <h1 className="title text-white pb-5">
            Panel de <span className="text-pink-400">Administración</span> 🔧
          </h1>
          <hr />
        </div>
        <div className="tools grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
          <Link href="/admin/blog">
            <div className="tool topography p-5 border-2 border-gray-200 rounded-xl cursor-pointer flex flex-col gap-4">
              <div className="relative h-80">
                <Image
                  src={"/newspaper.jpeg"}
                  layout="fill"
                  alt="Newspaper image"
                  className="rounded-xl"
                  objectFit="cover"
                />
              </div>
              <a className="text-2xl md:text-4xl text-white font-black hover:underline">
                Administrar Blog 💬
              </a>
            </div>
          </Link>
          <Link href="/admin/users">
            <div className="tool topography p-5 border-2 border-gray-200 rounded-xl cursor-pointer flex flex-col gap-4">
              <div className="relative h-80">
                <Image
                  src={"/office.jpeg"}
                  layout="fill"
                  alt="Newspaper image"
                  className="rounded-xl"
                  objectFit="cover"
                />
              </div>
              <a className="text-2xl md:text-4xl text-white font-black hover:underline">
              Administrar Usuarios 👨‍💻
              </a>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
