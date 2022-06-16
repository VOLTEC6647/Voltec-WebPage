import React from "react";
import BlogPost from "../../lib/types/BlogPost";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Badge from "../../components/Badge";
import Image from "next/image";

type Props = {
  post: BlogPost;
  error?: string;
};

const Post = ({ post, error }: Props) => {
  return (
    <div className="bg-background-blue h-screen w-screen">
      <Navbar />
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full cursor-pointer">
          <Image
            src={post.image}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-4 lg:p-14 bg-background-blue">
        <div className="max-w-6xl mx-auto">
          <div className="badges flex justify-start items-center gap-4 pb-4">
            {post.badges.map((i) => {
              return <Badge key={i} type={i} />;
            })}
          </div>
          <div className="headings pt-4 lg:pt-0 pb-8">
            <span className="date text-base font-mono text-white">{post.date ? post.date : new Date().toLocaleDateString()}</span>
            <h1 className="title text-white pb-5">{post.title}</h1>
            <hr />
          </div>
          <div className="post-content text-white font-manrope">
            {post.content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;

export async function getServerSideProps(context: any) {
  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const posts = await db
      .collection("Posts")
      .find({ _id: new ObjectId(context.params.post) })
      .toArray();

    return {
      props: {
        post: JSON.parse(JSON.stringify(posts[0])),
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
