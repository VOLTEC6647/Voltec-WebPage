import React from "react";
import BlogPost from "../../lib/types/BlogPost";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Badge from "../../components/Badge";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";

type Props = {
  post: BlogPost;
  error?: string;
};

const Post = ({ post, error }: Props) => {
  console.log(post);

  return (
    <div className="bg-background-blue h-screen w-screen">
      <Navbar />
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full cursor-pointer">
          <Image
            src={post._links["wp:featuredmedia"][0].link}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-4 lg:p-14 bg-background-blue">
        <div className="max-w-6xl mx-auto">
          {/* <div className="badges flex justify-start items-center gap-4 pb-4">
            {post.tags.map((i: string) => {
              return <Badge key={i} type={i} />;
            })}
          </div> */}
          <div className="headings pt-4 lg:pt-0 pb-8">
            <span className="date text-base font-mono text-white">
              {new Date(post.date).toLocaleDateString()}
            </span>
            <h1 className="title text-white pb-5">{post.title.rendered}</h1>
            <hr />
          </div>
          <div
            className="post-content text-white font-manrope"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.post;
  console.log("ID: " + id);

  try {
    const res = await fetch(
      `https://${process.env.WORDPRESS_HOSTNAME}/wp-json/wp/v2/posts/${id}?_embed`
    );

    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }
}
