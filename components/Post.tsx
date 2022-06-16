import React, { useState } from "react";
import Image from "next/image";
import Badge, { BadgeTypes } from "../components/Badge";
import formatLikes from "../lib/formatLikes";
import Link from "next/link";
import { ObjectId } from "mongodb";

type Props = {
  id: ObjectId;
  title: string;
  body?: string;
  badges?: string[];
  src: string;
  likes: number;
  children?: React.ReactNode;
};

const Post = ({ id, title, badges, src, children, likes }: Props) => {
  const [clientLikes, setClientLikes] = useState(likes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setClientLikes(liked ? clientLikes - 1 : clientLikes + 1);
  };

  return (
    <div className="bg-secondary-blue border-l-8 border-pink-400 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="image h-52 lg:h-full w-full col-span-1 relative border-white rounded-xl border-2">
        <Image
          src={src}
          layout={"fill"}
          objectFit="cover"
          className="border-white rounded-xl border"
          alt="escuela voltec"
          placeholder="blur"
          blurDataURL="/placeholder.jpeg"
        />
      </div>
      <div className="texts col-span-1 lg:col-span-3 flex flex-col justify-between items-start">
        <div>
          <p className="text-sm text-white font-normal font-mono lg:hidden block">
            June 11, 2022
          </p>
          <div className="title flex justify-between items-center w-full lg:pt-16">
            <h1 className="text-3xl md:text-6xl text-white font-black font-manrope hover:underline hover:cursor-pointer">
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
            </h1>
            <p className="text-sm text-white font-normal font-mono lg:block hidden">
              June 11, 2022
            </p>
          </div>
          <p className="text-gray-300 text-sm md:text-base font-manrope text-ellipsis pt-2">
            {children?.toString().substring(0, 200)}...
          </p>
        </div>
        <div className="bottom-row flex flex-col md:flex-row md:justify-between justify-start items-start md:items-center w-full pt-4 gap-4">
          <div className="badges flex gap-2 justify-start items-center">
            {badges &&
              badges.map((badge: string, i: number) => (
                <Badge key={i} type={badge} />
              ))}
          </div>
          <div className="likes text-white flex justify-center items-center gap-4">
            <div
              className="like-button bg-slate-700 p-2 rounded-lg cursor-pointer"
              onClick={toggleLike}
            >
              {!liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 md:h-8 w-5 md:w-8"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 md:h-8 w-5 md:w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              )}
            </div>
            <div className="count text-lg">{formatLikes(clientLikes)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
