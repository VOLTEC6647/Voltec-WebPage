import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { NextPageContext, NextPage } from "next";
import clientPromise from "../../lib/mongodb";
import User from "../../lib/types/User";
import Footer from "../../components/Footer";
import AdminLayout from "../../components/AdminLayout";
import { motion } from "framer-motion";
import Head from "next/head";
import { getSession } from "next-auth/react";

type Props = {
  admins: User[];
};

const Users: NextPage<Props> = ({ admins }) => {
  console.log(admins);
  return (
    <AdminLayout title="Manage Administrators" image="/flowers.jpeg">
      <Head>
        <title>Manage Administrators | VOLTEC Robotics 6647</title>
      </Head>
      <div className="heading pb-5">
        <motion.h1
          layoutId="settings-title"
          className="text-6xl text-neutral-900 font-bold font-manrope"
        >
          Manage Administrators
        </motion.h1>
      </div>
      <div className="w-full flex flex-col gap-4">
        {admins ? (
          admins.map((admin: User) => {
            return (
              <motion.div
                className="user bg-background-blue border-l-8 border-accent-blue rounded-xl p-3 md:p-5"
                key={admin._id.toString()}
              >
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-5">
                    <div className="relative h-16 w-16 md:w-24 md:h-24 border-white border-4 rounded-full">
                      <Image
                        src={
                          admin.image
                            ? admin.image
                            : `https://avatars.dicebear.com/api/micah/${admin.first_name}.svg`
                        }
                        layout="fill"
                        objectFit="cover"
                        className="border-4 rounded-full border-white user-pic-bg"
                        alt="User profile picture"
                      />
                    </div>
                    <div className="texts">
                      <h2 className="text-gray-300 text-sm md:text-base font-medium">
                        {admin.role.charAt(0).toUpperCase() +
                          admin.role.substring(1)}
                      </h2>
                      <h1 className="text-xl md:text-3xl text-white font-manrope font-bold">
                        {admin.first_name} {admin.last_name}{" "}
                        <span className="text-base md:text-base text-neutral-400">
                          ({admin.pronouns})
                        </span>
                      </h1>
                      <h2 className="text-pink-600 text-sm md:text-base font-medium">
                        <a href={`mailto:${admin.email}`}>{admin.email}</a>
                      </h2>
                    </div>
                  </div>
                  <div className="buttons">
                    <button
                      disabled={admin.locked === true ? true : false}
                      title={
                        admin.locked === true
                          ? "You don't have permission to delete this user."
                          : ""
                      }
                      className={`p-3 px-5 disabled:opacity-60 rounded-xl bg-red-500 text-white flex justify-center items-center gap-2 `}
                    >
                      <p className="text-sm md:text-base font-manrope">
                        Delete
                      </p>
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <h1>No administrators</h1>
        )}
      </div>
    </AdminLayout>
  );
};

export default Users;

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
    const db = client.db("Users");

    const admins = await db.collection("Admins").find({}).toArray();
    console.log("index.tsx " + JSON.parse(JSON.stringify(admins)));

    return {
      props: {
        admins: JSON.parse(JSON.stringify(admins)),
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
