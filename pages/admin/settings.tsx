import React, { ChangeEventHandler, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPageContext } from "next";
import Head from "next/head";

const Settings = () => {
  const { data: session, status } = useSession();

  const [name, setName] = useState(session?.user?.name || "");

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const saveName = async () => {
    const sendRequest = await fetch("/api/save-user", {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
    });
  };

  return (
    <AdminLayout title="Settings" image="/flowers.jpeg">
      <Head>
        <title>Settings | VOLTEC Robotics 6647</title>
      </Head>
      <div className="heading pb-5">
        <motion.h1
          layoutId="settings-title"
          className="text-6xl text-neutral-900 font-bold"
        >
          Settings
        </motion.h1>
      </div>
      <motion.div className="content text-neutral-700 w-full">
        <div className="account flex flex-col gap-4">
          <h2 className="text-3xl text-neutral-700 font-bold font-manrope">
            Account <span className="text-pink-500">Settings</span> ⚙️
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="name font-manrope bg-background-blue border-l-8 border-accent-blue p-5 rounded-lg flex flex-col gap-2">
              <h2 className="text-xl text-neutral-300 font-medium">Name</h2>
              <div className="input justify-center items-center flex">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="bg-gray-700 text-gray-300 autofill:bg-neutral-700 outline-none px-3 py-2 rounded-l-lg w-full"
                />
                <button className="rounded-r-lg py-2 px-3 text-white bg-accent-blue">
                  Save
                </button>
              </div>
            </div>
            <div className="email font-manrope bg-background-blue border-l-8 border-accent-blue p-5 rounded-lg flex flex-col gap-2">
              <h2 className="text-xl text-neutral-300 font-medium">Email</h2>
              <div className="input justify-center items-center flex">
                <input
                  type="text"
                  value={session?.user?.email || ""}
                  className="bg-gray-700 text-gray-300 autofill:bg-neutral-700 outline-none px-3 py-2 rounded-l-lg w-full cursor-not-allowed"
                />
              </div>
            </div>
          </div>
          <div className="buttons font-manrope bg-background-blue border-l-8 border-accent-blue p-5 rounded-lg flex flex-col gap-2">
            <h2 className="text-xl text-neutral-300 font-medium">Actions</h2>
            <div className="buttons bg-gray-700 p-4 rounded-lg flex gap-4 font-manrope">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Delete Account
              </button>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Log Out
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Public Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Settings;

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
