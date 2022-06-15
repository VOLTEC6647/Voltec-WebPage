import React from "react";
import Post from "./Post";
import Link from "next/link";

// * Types
import BlogPost from "../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
};

const Blog = ({ posts }: Props) => {
  return (
    <div className="blog bg-background-blue p-4 lg:p-14">
      <div className="max-w-6xl mx-auto">
        <div className="headings pt-4 lg:pt-0 pb-8">
          <h1 className="title text-white pb-5 hover:underline">
            <Link href="/blog">
              <a>Blog ⚡️</a>
            </Link>
          </h1>
          <hr />
        </div>
        <div className="posts flex flex-col gap-6">
          {posts?.length > 0 ? (
            posts.map((post: BlogPost) => (
              <Post
                id={post._id}
                likes={post.likes}
                key={post._id.toString()}
                title={post.title}
                badges={post.badges}
                src={post.image}
              >
                {post.content}
              </Post>
            ))
          ) : (
            <div className="h-[50vh] flex justify-center items-center">
              <p className="text-white text-center text-5xl tracking-tighter font-manrope font-bold">
                No posts yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
