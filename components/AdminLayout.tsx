import React from "react";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  title: string;
  image?: string;
};

const AdminLayout = ({ children, title, image }: Props) => {
  const router = useRouter();
  const url = router.pathname.split("/");

  const { data: session, status } = useSession();
  return (
    <AnimateSharedLayout>
      <div className="h-screen flex flex-col md:flex-row w-full bg-primary-blue">
        <Sidebar session={session} />
        <div className="content bg-white text-black ml-80 w-full">
          <div className="top-bar flex justify-between items-center p-3 bg-neutral-820 text-white">
            <div className="heading flex justify-start items-center text-gray-500">
              {router.pathname != "/admin" && (
                <>
                  <div
                    onClick={() => router.back()}
                    className="back hover:bg-neutral-300 rounded-lg mr-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </>
              )}
              {url.map((i, index, arr) => {
                console.log(i, index, arr);
                return (
                  <>
                    <Link href={index === 1 ? "/" + i : "/admin/" + i}>
                      <a className="hover:underline" key={i}>
                        {i.charAt(0).toUpperCase() +
                          i.substring(1).replace(/-/, " ")}
                      </a>
                    </Link>
                    {index == arr.length ? null : (
                      <span className="px-2">/</span>
                    )}
                  </>
                );
              })}
            </div>
            <div className="search flex justify-center items-center shadow-sm">
              <input
                type="text"
                className="bg-neutral-300 text-gray-900 autofill:bg-neutral-700 outline-none px-3 w-72 py-2 rounded-l-lg"
                name="search"
                id="search"
                placeholder="Search..."
              />
              <button className="h-full p-3 bg-accent-blue rounded-r-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="image-container bg-neutral-500">
            {image && (
              <div className="relative h-64 opacity-60">
                <Image
                  src={image}
                  layout="fill"
                  alt="Cover Image"
                  objectFit="cover"
                />
              </div>
            )}
          </div>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full p-6 text-white"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimateSharedLayout>
  );
};

export default AdminLayout;
