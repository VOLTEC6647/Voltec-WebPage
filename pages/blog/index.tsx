import { GetServerSidePropsContext, NextPage, NextPageContext } from "next";
import Blog from "../../components/Blog";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Head from "next/head";

import BlogPost from "../../lib/types/BlogPost";

type Props = {
  posts: BlogPost[];
  error: any;
};

const BlogPage: NextPage<Props> = ({ posts, error }) => {
  return (
    <div className="bg-background-blue h-screen w-screen">
      <Head>
        <title>Blog | VOLTEC Robotics 6647</title>
        <meta
          name="description"
          content="Ve las publicaciones de VOLTEC Robotics 6647!"
        />

        <meta itemProp="name" content="Blog | VOLTEC Robotics 6647" />
        <meta
          itemProp="description"
          content="Ve las publicaciones de VOLTEC Robotics 6647!"
        />
        <meta itemProp="image" content="https://voltec.medina.dev/voltec.png" />

        <meta property="og:url" content="https://voltec.medina.dev/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | VOLTEC Robotics 6647" />
        <meta
          property="og:description"
          content="Ve las publicaciones de VOLTEC Robotics 6647!"
        />
        <meta
          property="og:image"
          content="https://voltec.medina.dev/voltec.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | VOLTEC Robotics 6647" />
        <meta
          name="twitter:description"
          content="Ve las publicaciones de VOLTEC Robotics 6647!"
        />
        <meta
          name="twitter:image"
          content="https://voltec.medina.dev/voltec.png"
        />
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
      <Blog error={error} posts={posts} />
      <Footer />
    </div>
  );
};

export default BlogPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.post;
  console.log("ID: " + id);

  try {
    const url = `https://${process.env.WORDPRESS_HOSTNAME}/wp-json/wp/v2/portfolio/?_embed`;
    console.log(url);
    const res = await fetch(url);

    const posts = await res.json();

    return {
      props: {
        posts,
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
