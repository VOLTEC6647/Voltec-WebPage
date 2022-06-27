import React from "react";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import { getSession } from "next-auth/react";
import { NextPage, NextPageContext } from "next";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

const container = {
  hidden: { scale: 0.85 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <AdminLayout title="Administrator Dashboard">
      <div className="w-full px-5">
        <div className="user-actions-heading pt-8 pb-2">
          <h2 className="text-gray-400 font-manrope text-2xl font-bold">
            User Actions
          </h2>
        </div>
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          className="options grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: -2 }}
            className="option bg-neutral-800 p-4 text-white rounded-lg"
          >
            <Link href="/admin/settings">
              <a>
                <h2 className="text-2xl font-manrope font-bold">Settings ⚙️</h2>
                <p className="text-gray-300 font-manrope">
                  Change the settings of your user account.
                </p>
              </a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, rotate: -2 }}
            className="option bg-neutral-800 p-4 text-white rounded-lg"
          >
            <Link href="/admin/public-profile">
              <a>
                <h2 className="text-2xl font-manrope font-bold">
                  Public Profile 👁
                </h2>
                <p className="text-gray-300 font-manrope">
                  View how your public voltec6647.com profile looks.
                </p>
              </a>
            </Link>
          </motion.div>
        </motion.div>
        <div className="user-actions-heading pt-8 pb-2">
          <h2 className="text-gray-400 font-manrope text-2xl font-bold">
            Site Actions
          </h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="options grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Link href="/admin/blog">
            <motion.a
              whileHover={{ scale: 1.03, rotate: -2 }}
              className="option bg-neutral-800 p-4 text-white rounded-lg"
            >
              <h2 className="text-2xl font-manrope font-bold">Blog Posts 💬</h2>
              <p className="text-gray-300 font-manrope">
                Manage blog posts, add new ones, delete, and more!
              </p>
            </motion.a>
          </Link>
          <motion.div
            whileHover={{ scale: 1.03, rotate: -2 }}
            className="option bg-neutral-800 p-4 text-white rounded-lg"
          >
            <Link href="/admin/users">
              <a>
                <h2 className="text-2xl font-manrope font-bold">
                  Manage Admins 🔑
                </h2>
                <p className="text-gray-300 font-manrope">
                  Manage users who have administrator access to the VOLTEC
                  website.
                </p>
              </a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, rotate: -2 }}
            className="option bg-neutral-800 p-4 text-white rounded-lg"
          >
            <Link href="/admin/newspaper">
              <a>
                <h2 className="text-2xl font-manrope font-bold">
                  Upload Newspaper 📰
                </h2>
                <p className="text-gray-300 font-manrope">
                  Upload the weekly VOLTEC newspaper.
                </p>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </AdminLayout>
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
