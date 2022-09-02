import React from "react";
import { GetServerSidePropsContext } from "next";
import BlogPost from "../../lib/types/BlogPost";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

type Props = {
  post: BlogPost;
  error?: string;
  tags: [];
};

const Post = ({ post, error }: Props) => {
  return (
    <div className="bg-background-blue h-screen w-screen">
      <Navbar />
      <div className="image h-1/3">
        <div className="image-container relative h-full w-full cursor-pointer">
          <Image
            src={"/blog.jpeg"}
            alt="AtosBot, the VOLTEC robot"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-4 lg:p-14 bg-background-blue">
        <div className="max-w-4xl mx-auto">
          <div className="headings w-full prose lg:prose-xl pt-4 lg:pt-0">
            <span className="date text-base font-mono text-white">
              {new Date(post.date).toLocaleDateString()}
            </span>
            <h1 className="text-5xl lg:text-6xl w-full text-white pb-5">
              {post?.title?.rendered}
            </h1>
          </div>
          <hr />
          <div
            className="post-content prose lg:prose-xl max-w-none text-white font-manrope pt-4 prose-invert text-justify"
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
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

  try {
    const url = `https://${process.env.WORDPRESS_HOSTNAME}/wp-json/wp/v2/portfolio/${id}?_embed`;
    const res = await fetch(url);
    const post = await res.json();

    const tagRes = await fetch(
      `https://${process.env.WORDPRESS_HOSTNAME}/wp-json/wp/v2/tags`
    );
    const tags = await tagRes.json();

    return {
      props: {
        post,
        tags,
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
