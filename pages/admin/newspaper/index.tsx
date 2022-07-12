import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import clientPromise from "../../../lib/mongodb";
import { NextPage, NextPageContext } from "next";
import Issue from "../../../lib/types/NewspaperIssue";

type Props = {
  issues: Issue[];
};

const index: NextPage<Props> = ({ issues }) => {
  return (
    <AdminLayout title={"Manage Newspaper"} image={"/flowers.jpeg"}>
      <Head>
        <title>Settings | VOLTEC Robotics 6647</title>
      </Head>
      <div className="heading pb-5">
        <motion.h1
          layoutId="settings-title"
          className="text-6xl text-neutral-900 font-bold flex justify-between items-center font-manrope"
        >
          Manage Newspaper
          <div className="upload-button hover:underline rounded-lg bg-accent-blue font-manrope font-bold p-4 text-white flex justify-start items-center gap-2">
            <Link href="/admin/newspaper/upload">
              <a className="text-xl">Upload</a>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </motion.h1>
      </div>
      <hr />
      <div className="view pt-4">
        <div className="heading">
          <h1 className="text-4xl font-manrope font-bold text-black">
            Published issues
          </h1>
        </div>
        <div className="issues pt-2 grid grid-cols-1 gap-4">
          {issues.map((i: Issue) => {
            return (
              <div
                key={i._id.toString()}
                className="issue bg-neutral-100 hover:bg-neutral-200 text-black p-4 rounded-lg flex justify-between items-center gap-2"
              >
                <div className="issue-main flex justify-start items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div className="issue-information flex flex-col justify-start items-start">
                    <a
                      href={`/newspaper/${i._id}`}
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="font-manrope font-bold text-2xl"
                    >
                      {i.title}
                    </a>
                    <p className="text-neutral-500 text-lg">
                      Published on {new Date(i.date).toLocaleDateString()}
                    </p>
                    <a
                      href={i.fileUrl}
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-accent-blue hover:text-blue-500 flex justify-center items-center gap-1"
                    >
                      Download file
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="issue-actions">
                  <div className="edit bg-pink-500 py-2 px-4 rounded-lg text-white">
                    <Link href={`/admin/newspaper/edit/${i._id}`}>
                      <a className="text-lg flex justify-center items-center gap-2">
                        Edit{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default index;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Newspapers");

    const issues = await db.collection("issues").find({}).toArray();
    console.log("index.tsx " + JSON.parse(JSON.stringify(issues)));

    return {
      props: {
        issues: JSON.parse(JSON.stringify(issues)),
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
