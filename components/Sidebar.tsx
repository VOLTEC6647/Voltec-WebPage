import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  session: Session | null;
};

const Sidebar = ({ session }: Props) => {
  return (
    <div className="bg-neutral-900 w-full md:w-96 h-full p-6 text-white flex flex-col gap-2">
      <div className="sidebar-logo flex justify-start items-center">
        <div className="relative h-28 w-28 border-2 border-white rounded-full">
          <Image
            src={session?.user?.image || "/voltec.png"}
            alt="VOLTEC Logo"
            objectFit="contain"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>
      <h1 className="font-bold text-4xl">
        <Link href="/admin">
          <a className="hover:underline">Dashboard</a>
        </Link>
      </h1>
      <div className="flex-menu flex flex-col justify-between items-start h-full">
        <div className="main-menu w-full">
          <div className="actions-menu w-full">
            <h1 className="font-manrope pb-2 text-xl font-bold text-gray-400 w-full">
              User actions
            </h1>
            <div className="list-none gap-2 flex flex-col">
              <Link href="/admin/settings">
                <a className=" w-full hover:bg-neutral-700  p-3 px-3 rounded-lg flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Settings</span>
                </a>
              </Link>
              <Link href="/admin/public-profile">
                <a className=" w-full hover:bg-neutral-700  p-3 px-3 rounded-lg flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>Public profile</span>
                </a>
              </Link>
              <Link href="/admin/appearance">
                <a className=" w-full hover:bg-neutral-700  p-3 px-3 rounded-lg flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  <span>Appearance</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="actions-menu w-full">
            <h1 className="font-manrope py-2 text-xl font-bold text-gray-400">
              Site management
            </h1>
            <div className="list-none gap-2 flex flex-col w-full">
              <Link href="/admin/blog">
                <a className=" w-full hover:bg-neutral-700  p-3 px-3 rounded-lg flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Blog posts</span>
                </a>
              </Link>
              <Link href="/admin/users">
                <a className=" w-full hover:bg-neutral-700  p-3 px-3 rounded-lg flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Manage admins</span>
                </a>
              </Link>
              <Link href="/admin/newspaper">
                <a className=" w-full hover:bg-neutral-700  p-3 px-3 rounded-lg flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <span>Upload newspaper</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="actions-menu pt-4 w-full">
          <div className="list-none gap-2 flex flex-col w-full">
            <button
              onClick={() => {
                signOut();
              }}
              className=" w-full bg-pink-700 hover:bg-red-700 p-3 px-3 rounded-lg flex justify-start items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
