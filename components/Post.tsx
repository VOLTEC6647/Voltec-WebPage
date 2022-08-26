import React, { useState } from "react";
import Image from "next/image";
import Badge, { BadgeTypes } from "../components/Badge";
import formatLikes from "../lib/formatLikes";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  image: string | null;
  excerpt: string;
  date: Date;
};

const Post = ({ id, title, image, excerpt, date }: Props) => {
  return (
    <div className="bg-secondary-blue border-l-8 border-pink-400 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
      <div className="image h-52 lg:h-52 w-full col-span-1 relative border-white rounded-xl border-2">
        {image != null ? (
          <Image
            src={image}
            layout={"fill"}
            objectFit="cover"
            className="border-white rounded-xl border"
            alt="escuela voltec"
            placeholder="blur"
            blurDataURL="/placeholder.jpeg"
          />
        ) : null}
      </div>
      <div className="texts col-span-1 lg:col-span-3 flex flex-col justify-between items-start w-full">
        <div className="w-full">
          <p className="text-sm text-white font-normal font-mono lg:hidden block">
            June 11, 2022
          </p>
          <div className="title flex justify-between items-center w-full lg:pt-16">
            <h1 className="text-3xl md:text-6xl text-white font-black font-manrope hover:underline hover:cursor-pointer">
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
            </h1>
            <div className="prose text-sm text-white font-normal font-mono lg:block hidden">
              {new Date(date).toLocaleDateString()}
            </div>
          </div>
          <div
            className="prose max-w-none text-gray-300 text-sm md:text-base font-manrope text-ellipsis pt-2"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
