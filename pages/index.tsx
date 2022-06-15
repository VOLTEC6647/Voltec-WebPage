import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import Blog from "../components/Blog";
import clientPromise from "../lib/mongodb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";

import BlogPost from "../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="app">
      <Head>
        <title>VOLTEC Robotics 6647</title>
      </Head>
      <div className="w-full h-screen bg-primary-blue">
        <div className="content absolute z-10">
          <Navbar />
          <div className="hero w-screen h-[90vh] flex justify-center items-center">
            <img src="/voltec.png" alt="" className="h-1/4 lg:h-1/2" />
            <h1 className="text-6xl lg:text-10xl font-black opacity-100 text-white font-sans tracking-tighter leading-none">
              VOLTEC <br /> 6647
            </h1>
          </div>
        </div>
        <div className='bg-[url("/cover.jpeg")] absolute h-screen w-full bg-cover opacity-20'></div>
      </div>
      <Blog posts={posts} />
      <Footer />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const posts = await db.collection("Posts").find({}).toArray();
    console.log("index.tsx " + JSON.parse(JSON.stringify(posts)));

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
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
