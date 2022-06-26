import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { NextPage, NextPageContext } from "next";
import Sidebar from "../../components/Sidebar";
import { useSession } from "next-auth/react";

const Index: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Sidebar session={session} />
      <div className="content bg-dark text-black">
        <div className="top-bar flex justify-between items-center py-4 px-4 bg-neutral-900 text-white">
          <div className="heading">
            <h1 className="text-4xl font-semibold tracking-tighter">
              Welcome, {session?.user?.name || "User"}
            </h1>
          </div>
          <div className="search flex justify-center items-center shadow-sm">
            <input
              type="text"
              className="bg-neutral-700 text-gray-300 autofill:bg-neutral-700 outline-none px-3 w-72 py-3 rounded-l-lg"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <button className="h-full p-3 bg-pink-600 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
        <div className="w-full px-5">
          <div className="user-actions-heading pt-8 pb-2">
            <h2 className="text-gray-400 font-manrope text-2xl font-bold">
              User Actions
            </h2>
          </div>
          <div className="options grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/settings">
              <a className="option bg-neutral-800 hover:bg-neutral-900  p-4 text-white rounded-lg">
                <h2 className="text-2xl font-manrope font-bold">Settings ⚙️</h2>
                <p className="text-gray-300 font-manrope">
                  Change the settings of your user account.
                </p>
              </a>
            </Link>
            <Link href="/admin/public-profile">
              <a className="option bg-neutral-800 hover:bg-neutral-900  p-4 text-white rounded-lg">
                <h2 className="text-2xl font-manrope font-bold">
                  Public Profile 👁
                </h2>
                <p className="text-gray-300 font-manrope">
                  View how your public voltec6647.com profile looks.
                </p>
              </a>
            </Link>
          </div>
          <div className="user-actions-heading pt-8 pb-2">
            <h2 className="text-gray-400 font-manrope text-2xl font-bold">
              Site Actions
            </h2>
          </div>
          <div className="options grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/blog">
              <a className="option bg-neutral-800 hover:bg-neutral-900  p-4 text-white rounded-lg">
                <h2 className="text-2xl font-manrope font-bold">
                  Blog Posts 💬
                </h2>
                <p className="text-gray-300 font-manrope">
                  Manage blog posts, add new ones, delete, and more!
                </p>
              </a>
            </Link>
            <Link href="/admin/users">
              <a className="option bg-neutral-800 hover:bg-neutral-900  p-4 text-white rounded-lg">
                <h2 className="text-2xl font-manrope font-bold">
                  Manage Admins 🔑
                </h2>
                <p className="text-gray-300 font-manrope">
                  Manage users who have administrator access to the VOLTEC
                  website.
                </p>
              </a>
            </Link>
            <Link href="/admin/newspaper">
              <a className="option bg-neutral-800 hover:bg-neutral-900  p-4 text-white rounded-lg">
                <h2 className="text-2xl font-manrope font-bold">
                  Upload Newspaper 📰
                </h2>
                <p className="text-gray-300 font-manrope">
                  Upload the weekly VOLTEC newspaper.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
}
