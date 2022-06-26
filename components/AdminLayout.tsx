import React from "react";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  title: string;
};

const AdminLayout = ({ children, title }: Props) => {
  const router = useRouter();

  const { data: session, status } = useSession();
  return (
    <div className="h-screen flex flex-col md:flex-row w-full">
      <Sidebar session={session} />
      <div className="content bg-dark text-black ml-80 w-full">
        <div className="top-bar flex justify-between items-center p-5 bg-neutral-900 text-white">
          <div className="heading flex justify-start items-center">
            {router.pathname != "/admin" && (
              <div
                onClick={() => router.back()}
                className="back hover:bg-neutral-700 rounded-lg mr-2"
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
            )}
            <h1 className="text-4xl text-neutral-200 font-manrope font-semibold tracking-tighter">
              {title}
            </h1>
          </div>
          <div className="search flex justify-center items-center shadow-sm">
            <input
              type="text"
              className="bg-neutral-700 text-gray-300 autofill:bg-neutral-700 outline-none px-3 w-72 py-2 rounded-l-lg"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <button className="h-full p-3 bg-pink-600 rounded-r-lg">
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
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
