import { NextPageContext } from "next";
import React from "react";
import clientPromise from "../../lib/mongodb";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";

const blog = () => {
  return (
    <AdminLayout title="Blog">
      <h1 className="text-5xl text-neutral-900 font-manrope font-bold">Manage Blog</h1>
    </AdminLayout>
  );
};

export default blog;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const admins = await db.collection("Posts").find({}).limit(3).toArray();
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
