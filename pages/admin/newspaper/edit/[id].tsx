import React, { useState } from "react";
import AdminLayout from "../../../../components/AdminLayout";
import Head from "next/head";
import { motion } from "framer-motion";
import { GetServerSideProps, NextPage, NextPageContext } from "next";
import clientPromise from "../../../../lib/mongodb";
import { getSession } from "next-auth/react";
import Issue from "../../../../lib/types/NewspaperIssue";
import { ObjectId } from "bson";

type Props = {
  issue: Issue;
};

const Edit: NextPage<Props> = ({ issue }) => {
  const [visibility, setVisibility] = useState<boolean | undefined>(
    issue.visibility
  );

  const deleteIssue = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this issue?"
    );
    if (confirmed) {
      const request = await fetch("/api/delete-issue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: issue._id,
        }),
      });

      const data = await request.json();
      console.log(data);

      if (request.ok) {
        window.location.href = "/admin/newspaper";
      }
    }
  };

  const toggleVisibility = async () => {
    const request = await fetch("/api/update-issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: issue._id,
        visibility: issue.visibility,
      }),
    });
    setVisibility(!visibility);
  };

  return (
    <AdminLayout title="edit" image={"/flowers.jpeg"}>
      <Head>
        <title>Edit Post | VOLTEC Robotics 6647</title>
      </Head>
      <div className="heading pb-5">
        <motion.h1
          layoutId="settings-title"
          className="text-6xl text-neutral-900 font-bold font-manrope"
        >
          {issue.title}
        </motion.h1>
        <p className="text-neutral-500 text-lg">
          Published on {new Date(issue.date).toLocaleDateString()}
        </p>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="preview">
          <h1 className="text-4xl font-manrope font-bold text-black pb-2">
            File
          </h1>
          <div className="pdf h-[70vh] w-full p-2 border-2">
            <iframe src={issue.fileUrl} className="w-full h-full" />
          </div>
        </div>
        <div className="actions">
          <h1 className="text-4xl font-manrope font-bold text-black pb-2">
            Actions
          </h1>
          <div className="buttons flex justify-start items-center gap-2">
            <button
              className="bg-red-500 py-3 px-8 rounded-xl"
              onClick={deleteIssue}
            >
              Delete
            </button>
            <button
              className="bg-accent-blue py-3 px-8 rounded-xl"
              onClick={toggleVisibility}
            >
              {visibility === true ? "Make Private" : "Make Public"}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Edit;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  if (!context.query.id) {
    return {
      redirect: {
        destination: "/admin/newspaper",
        permanent: false,
      },
    };
  }

  const id: string = context.query.id.toString() || "";
  console.log("id: " + id);

  try {
    const client = await clientPromise;
    const db = client.db("Newspapers");

    const issue = await db
      .collection("issues")
      .find({ _id: new ObjectId(id) })
      .toArray();
    console.log("index.tsx " + JSON.parse(JSON.stringify(issue)));

    return {
      props: {
        issue: JSON.parse(JSON.stringify(issue[0])),
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
};
