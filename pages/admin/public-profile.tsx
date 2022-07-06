import { NextPageContext } from "next";
import React from "react";
import clientPromise from "../../lib/mongodb";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AdminLayout from "../../components/AdminLayout";

const Profile = () => {
  return (
    <AdminLayout title="Blog">
      <Head>
        <title>My Profile | VOLTEC Robotics 6647</title>
      </Head>
      <h1 className="text-5xl text-neutral-900 font-manrope font-bold">
        Public Profile
      </h1>
    </AdminLayout>
  );
};

export default Profile;
