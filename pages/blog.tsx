import { NextPage, NextPageContext } from "next";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import clientPromise from "../lib/mongodb";
import BlogPost from "../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
};

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <div className="bg-background-blue h-screen w-screen">
      <Navbar />
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
