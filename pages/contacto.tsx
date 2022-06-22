import { NextPage } from "next";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const Contacto: NextPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("address", email);
    form.append("emailContent", message);

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        address: email,
        emailContent: message,
      }),
    });

    if (response.ok) {
      toast.success("El mensaje se envió con éxito!");
    }

    const json = await response.json();
    console.log(json);
  };

  return (
    <div className="bg-background-blue h-screen w-screen">
      <Navbar />
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full cursor-pointer">
          <Image
            src={"/DSC09099.png"}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
            className="blur-sm"
          />
        </div>
      </div>
      <div className="p-4 lg:p-14 bg-background-blue">
        <div className="max-w-6xl mx-auto h-full">
          <div className="headings pt-0 md:pb-8 flex flex-col gap-4">
            <h1 className="title text-white md:pb-5">Contacto 📩</h1>
            <p className="text-white font-manrope text-normal md:text-xl">
              <span className="text-pink-400 font-bold">
                ¿Te formar parte de la familia VOLTEC?
              </span>{" "}
              Podrás contactarnos a través de las siguientes redes sociales o
              por medio del formulario ubicado en la parte inferior.
            </p>
          </div>
          <div className="social-media pt-4 md:pt-0">
            <div className="grid grid-cols-2 text-white font-manrope gap-2 md:gap-5">
              <div className="grid-item p-3 md:p-5 topography border-2 border-gray-200 rounded-xl flex gap-4 justify-start items-center">
                <div className="icon w-8 h-8 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="text-pink-400"
                  >
                    <path
                      fill="currentcolor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.instagram.com/voltecrobotics6647/"
                  rel="noreferrer noopener"
                  target={"_blank"}
                  className={"text-xl md:text-4xl font-bold hover:underline"}
                >
                  Instagram
                </a>
              </div>
              <div className="grid-item p-3 md:p-5 topography border-2 border-gray-200 rounded-xl flex gap-4 justify-start items-center">
                <div className="icon w-8 h-8 text-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill={"currentcolor"}
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </div>
                <a
                  href="https://twitter.com/voltec6647"
                  rel="noreferrer noopener"
                  target={"_blank"}
                  className={"text-xl md:text-4xl font-bold hover:underline"}
                >
                  Twitter
                </a>
              </div>
              <div className="grid-item p-3 md:p-5 topography border-2 border-gray-200 rounded-xl flex gap-4 justify-start items-center">
                <div className="icon w-8 h-8 text-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="currentcolor"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.facebook.com/VOLTECrobotics6647/"
                  rel="noreferrer noopener"
                  target={"_blank"}
                  className={"text-xl md:text-4xl font-bold hover:underline"}
                >
                  Facebook
                </a>
              </div>
              <div className="grid-item p-3 md:p-5 topography border-2 border-gray-200 rounded-xl flex gap-4 justify-start items-center">
                <div className="icon w-8 h-8 text-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill={"currentcolor"}
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.tiktok.com/@voltectok"
                  rel="noreferrer noopener"
                  target={"_blank"}
                  className={"text-xl md:text-4xl font-bold hover:underline"}
                >
                  TikTok
                </a>
              </div>
              <div className="grid-item p-5 bg-secondary-blue topography border-2 border-gray-200 rounded-xl flex gap-4 justify-center items-start col-span-2 flex-col">
                <div className="heading flex justify-start items-center gap-4">
                  <div className="icon w-8 h-8 text-pink-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentcolor"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                      />
                    </svg>
                  </div>
                  <p
                    className={"text-2xl md:text-4xl font-bold hover:underline"}
                  >
                    Correo
                  </p>
                </div>
                <div className="form w-full">
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="email">
                      <label
                        htmlFor="email"
                        className="block text-2xl font-normal pb-1"
                      >
                        Su correo
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="robot@voltec6647.com"
                        className="p-2 bg-gray-900 w-full rounded-lg outline-none"
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="email">
                      <label
                        htmlFor="message"
                        className="block text-2xl font-normal pb-1"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="w-full bg-gray-900 rounded-lg p-2 outline-none"
                        placeholder="Escriba su mensaje aquí..."
                        cols={30}
                        rows={10}
                        value={message}
                        onChange={handleMessageChange}
                      ></textarea>
                    </div>
                    <div className="buttons">
                      <div className="submit">
                        <button
                          type="submit"
                          className="bg-pink-400 hover:bg-pink-500 text-white rounded-lg py-3 px-14 w-full"
                        >
                          Enviar mensaje
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Contacto;
