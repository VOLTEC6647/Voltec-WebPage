import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { NextPageContext, NextPage } from "next";
import clientPromise from "../../lib/mongodb";
import User from "../../lib/types/User";
import Footer from "../../components/Footer";

type Props = {
  admins: User[];
};

const Users: NextPage<Props> = ({ admins }) => {
  console.log(admins);
  return (
    <div className="h-screen w-screen admin-users">
      <div className="bg-background-blue">
        <Navbar />
      </div>
      <div className="heading p-8 py-24 text-white">
        <h1 className="title text-white">Administrar Usuarios 🔧</h1>
        <p className="font-manrope text-sm md:text-lg">
          ⚠️ <span className="text-red-400">Tenga cuidado</span> al hacer
          cambios en esta sección.
        </p>
      </div>
      <div className="users text-white px-8 py-8 bg-background-blue">
        <h2 className="text-5xl font-bold">Usuarios</h2>
        <div className="users-list py-3 flex flex-col gap-5">
          {admins ? (
            admins.map((admin: User) => {
              return (
                <div
                  className="user bg-gray-700 p-3 md:p-5"
                  key={admin._id.toString()}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-5">
                      <div className="relative h-20 w-20 md:w-28 md:h-28 border-white border-4 rounded-full">
                        <Image
                          src={`https://avatars.dicebear.com/api/micah/${admin.first_name}.svg`}
                          layout="fill"
                          objectFit="cover"
                          className="border-4 rounded-full border-white user-pic-bg"
                          alt="User profile picture"
                        />
                      </div>
                      <div className="texts">
                        <h2 className="text-gray-300 text-sm md:text-lg font-medium">
                          {admin.role.charAt(0).toUpperCase() +
                            admin.role.substring(1)}
                        </h2>
                        <h1 className="text-2xl md:text-4xl font-manrope font-bold">
                          {admin.first_name} {admin.last_name}{" "}
                          <span className="text-base md:text-lg text-gray-300">
                            ({admin.pronouns})
                          </span>
                        </h1>
                        <h2 className="text-pink-400 text-sm md:text-lg font-medium">
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
                        className={`p-5 disabled:opacity-60 rounded-xl bg-red-400 text-white flex justify-center items-center gap-2 `}
                      >
                        <p className="text-sm md:text-lg font-manrope">
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
                </div>
              );
            })
          ) : (
            <h1>No administrators</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Users;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Users");

    const admins = await db.collection("Admins").find({}).limit(3).toArray();
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
