import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Settings = () => {
  const { data: session, status } = useSession();

  return (
    <AdminLayout title="Settings" image="/flowers.jpeg">
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
              <input
                type="text"
                value={session?.user?.name || ""}
                className="bg-gray-700 text-gray-300 autofill:bg-neutral-700 outline-none px-3 py-2 rounded-lg w-full"
              />
            </div>
            <div className="email font-manrope bg-background-blue border-l-8 border-accent-blue p-5 rounded-lg flex flex-col gap-2">
              <h2 className="text-xl text-neutral-300 font-medium">Email</h2>
              <input
                type="text"
                value={session?.user?.email || ""}
                className="bg-gray-700 text-gray-300 autofill:bg-neutral-700 outline-none px-3 py-2 rounded-lg w-full"
              />
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
