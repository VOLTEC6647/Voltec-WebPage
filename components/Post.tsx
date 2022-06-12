import React from "react";
import Image from "next/image";
import Badge, { BadgeTypes } from "../components/Badge";

type Props = {
  title: string;
  body: string;
  badges?: string[];
  src: string
};

const Post = ({ title, body, badges, src }: Props) => {
  return (
    <div className="bg-secondary-blue border-l-8 border-pink-400 p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="image h-52 lg:h-full w-full col-span-1 relative border-white rounded-xl border-2">
        <Image
          src={src}
          layout={"fill"}
          objectFit="cover"
          className="border-white rounded-xl border"
          alt="escuela voltec"
        />
      </div>
      <div className="texts col-span-1 lg:col-span-3 flex flex-col justify-between items-start">
        <div>
          <p className="text-sm text-white font-normal font-mono lg:hidden block">
            June 11, 2022
          </p>
          <div className="title flex justify-between items-center w-full lg:pt-20">
            <h1 className="text-5xl text-white font-black font-manrope hover:underline hover:cursor-pointer">{title}</h1>
            <p className="text-sm text-white font-normal font-mono lg:block hidden">
              June 11, 2022
            </p>
          </div>
          <p className="text-gray-300 font-manrope">{body}</p>
        </div>
        <div className="bottom-row flex justify-between items-center w-full pt-4">
          <div className="badges flex gap-4 justify-start items-center">
            {badges &&
              badges.map((badge: string, i: number) => (
                <Badge key={i} type={badge} />
              ))}
          </div>
          <div className="likes text-white flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <div className="count text-lg">
              {Math.floor(Math.random() * 100)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
