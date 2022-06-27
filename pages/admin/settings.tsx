import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Settings = () => {
  const { data: session, status } = useSession();

  return (
    <AdminLayout title="Settings" image="/flowers.jpeg">
      <div className="heading pb-5">
        <h1 className="text-6xl text-white font-bold">Settings</h1>
      </div>
      <div className="content text-white w-full">
        <div className="account flex flex-col gap-4">
          <h2 className="text-3xl text-gray-200 font-bold font-manrope">
            Account <span className="text-pink-500">Settings</span> ⚙️
          </h2>
          <div className="name font-manrope bg-neutral-800 p-5 rounded-lg flex flex-col gap-2">
            <h2 className="text-xl text-gray-300">Name</h2>
            <input
              type="text"
              value={session?.user?.name || ""}
              className="bg-neutral-900 text-gray-300 autofill:bg-neutral-700 outline-none px-3 py-2 rounded-lg w-full"
            />
          </div>
          <div className="email font-manrope bg-neutral-800 p-5 rounded-lg flex flex-col gap-2">
            <h2 className="text-xl text-gray-300">Email</h2>
            <input
              type="text"
              value={session?.user?.email || ""}
              className="bg-neutral-900 text-gray-300 autofill:bg-neutral-700 outline-none px-3 py-2 rounded-lg w-full"
            />
          </div>
          <div className="buttons font-manrope bg-neutral-800 p-5 rounded-lg flex flex-col gap-2">
            <h2 className="text-xl text-gray-300">Actions</h2>
            <div className="buttons bg-neutral-900 p-4 rounded-lg flex gap-4 font-manrope">
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
      </div>
    </AdminLayout>
  );
};

export default Settings;
