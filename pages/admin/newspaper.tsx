import { NextPageContext } from "next";
import React from "react";
import clientPromise from "../../lib/mongodb";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";

const Newspaper = () => {
  return (
    <AdminLayout title="Newspaper">
      <h1 className="text-5xl text-neutral-900 font-manrope font-bold">Upload Newspaper</h1>
    </AdminLayout>
  );
};

export default Newspaper;