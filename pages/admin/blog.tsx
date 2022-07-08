import { NextPage, NextPageContext } from "next";
import React from "react";
import clientPromise from "../../lib/mongodb";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import BlogPost from "../../lib/types/BlogPost";
import { motion } from "framer-motion";
import { getSession } from "next-auth/react";

type Props = {
  posts: BlogPost[];
};

const blog: NextPage<Props> = ({ posts }) => {
  return (
    <AdminLayout title="Blog">
      <h1 className="text-5xl text-neutral-900 font-manrope font-bold">
        Manage Blog
      </h1>
      <div className="posts flex flex-col justify-start items-start gap-4 w-full pt-4">
        {posts.map((post) => {
          return (
            <motion.div
              className="user bg-background-blue border-l-8 border-accent-blue rounded-xl p-3 md:p-5 w-full"
              key={post._id.toString()}
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-5">
                  <div className="relative h-16 w-16 md:w-24 md:h-24 border-white border-4 rounded-lg">
                    <Image
                      src={
                        post.image
                          ? post.image
                          : `https://avatars.dicebear.com/api/micah/${post._id}.svg`
                      }
                      layout="fill"
                      objectFit="cover"
                      className="border-4 rounded-lg border-white user-pic-bg"
                      alt="User profile picture"
                    />
                  </div>
                  <div className="texts">
                    <a
                      href={`/blog/${post._id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl md:text-3xl text-white font-manrope font-bold hover:underline"
                    >
                      {post.title}
                    </a>
                    <p className="text-neutral-400">
                      {post.content.substring(0, 100)}...
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <Link href={`/admin/blog/edit/${post._id}`}>
                    <a
                      className={`p-3 px-5 disabled:opacity-60 rounded-xl bg-accent-blue text-white flex justify-center items-center gap-2 `}
                    >
                      <p className="text-sm md:text-base font-manrope">Edit</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 md:h-6 w-5 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AdminLayout>
  );
};

export default blog;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const posts = await db.collection("Posts").find({}).toArray();
    console.log("index.tsx " + JSON.parse(JSON.stringify(posts)));

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        error: true,
      },
    };
  }
}
