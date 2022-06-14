import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div className="bg-background-blue h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto py-14">
        <div className="headings pt-4 lg:pt-0 pb-8">
          <h1 className="title text-white pb-5">Panel de Administración 🔧</h1>
          <hr />
        </div>
        <div className="tools grid grid-cols-2 gap-4">
            <div className="tool h-48 topography p-5">
                <h1 className="text-4xl text-white font-black hover:underline">Publicaciones 🌠</h1>
            </div>
            <div className="tool h-48 topography p-5">
                <h1 className="text-4xl text-white font-black hover:underline">Usuarios 👨‍💻</h1>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
