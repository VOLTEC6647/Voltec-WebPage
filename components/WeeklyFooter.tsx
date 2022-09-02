import React from "react";
import Link from "next/link";
import Image from "next/image";

const WeeklyFooter = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="px-5">
        <hr />
      </div>
      <div className="grid grid-cols-2 bg-white black pt-5 p-5 font-manrope gap-2 md:gap-4">
        <div className="links text-black col-span-1 flex flex-col font-manrope tracking-tighter h-full justify-start gap-2">
          <Link href="/">
            <a className="hover:underline text-lg">Inicio</a>
          </Link>
          <Link href="/blog">
            <a className="hover:underline text-lg">Blog</a>
          </Link>
          <Link href="/weekly">
            <a className="hover:underline text-lg">Weekly</a>
          </Link>
          <Link href="/nuestra-historia">
            <a className="hover:underline text-lg">Nuestra Historia</a>
          </Link>
          <Link href="/patrocinadores">
            <a className="hover:underline text-lg">Patrocinadores</a>
          </Link>
        </div>
        <div className="links text-black col-span-1 flex flex-col font-manrope tracking-tighter leading-loose h-full justify-start gap-2">
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.instagram.com/voltecrobotics6647/"
            className="hover:underline text-lg"
          >
            Instagram
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/VOLTECrobotics6647/"
            className="hover:underline text-lg"
          >
            Facebook
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://twitter.com/voltec6647"
            className="hover:underline text-lg"
          >
            Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.tiktok.com/@voltectok"
            className="hover:underline text-lg"
          >
            TikTok
          </a>
        </div>
        <div className="voltec-logo flex justify-start items-center col-span-2 pt-4">
          <Image
            src="/voltec.png"
            height={"50"}
            width={"50"}
            objectFit="contain"
            alt="VOLTEC Logo"
          />
          <h4 className="font-bold text-2xl font-sans leading-none">
            VOLTEC Robotics <br /> 6647
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WeeklyFooter;
