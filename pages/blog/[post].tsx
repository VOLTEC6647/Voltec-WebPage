import React from "react";
import BlogPost from "../../lib/types/BlogPost";
import clientPromise from "../../lib/mongodb";

type Props = {
    post: BlogPost;
}

const Post = ({ post }: Props) => {
  return <div>
    <h1>{post.title}</h1>
  </div>;
};

export default Post;

export async function getServerSideProps(context: any) {
  try {
    const client = await clientPromise;
    const db = client.db("Blog");

    const posts = await db
      .collection("Posts")
      .find({ _id: context.params.post })
      .toArray();
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
