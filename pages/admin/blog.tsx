import { NextPageContext } from "next";
import React from "react";
import clientPromise from "../../lib/mongodb";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const blog = () => {
  return (
    <div className="h-screen w-screen bg-background-blue">
      <div className="bg-background-blue">
        <Navbar />
      </div>
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full cursor-pointer">
          <Image
            src={"/newspaper.jpeg"}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
            className="blur-md"
          />
        </div>
      </div>
      <div className="py-14 bg-background-blue">
        <div className="headings pt-4 lg:pt-0 pb-8 px-5">
          <h1 className="title text-white pb-5">
            Administrar Blog 💬
          </h1>
          <hr />
        </div>
        <div className="blog-posts flex flex-col justify-center items-start">
            <div className="post">
                
            </div>
        </div>
      </div>
    </div>
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
