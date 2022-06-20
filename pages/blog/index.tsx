import { NextPage, NextPageContext } from "next";
import Blog from "../../components/Blog";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Head from "next/head";

import clientPromise from "../../lib/mongodb";
import BlogPost from "../../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
};

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <div className="bg-background-blue h-screen w-screen">
      <Head>
        <title>Blog | VOLTEC Robotics 6647</title>
      </Head>
      <Navbar />
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full">
          <Image
            src="https://res.cloudinary.com/dnrm/image/upload/v1655230514/atosbot_lxup6j.jpg"
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
            className="blur-sm"
          />
        </div>
      </div>
      <Blog posts={posts} />
      <Footer />
    </div>
  );
};

export default BlogPage;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const posts = await db.collection("Posts").find({}).toArray();

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
