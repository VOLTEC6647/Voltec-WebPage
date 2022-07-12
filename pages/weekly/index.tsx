import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import clientPromise from "../../lib/mongodb";
import { NextPage, NextPageContext } from "next";
import Issue from "../../lib/types/NewspaperIssue";
import Link from "next/link";

type Props = {
  issues: Issue[];
};

const index: NextPage<Props> = ({ issues }) => {
  console.log(issues);
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="">
        <div className="cover-image h-56 w-full relative">
          <Image
            src="/voltec-weekly.jpeg"
            objectFit="cover"
            layout="fill"
            alt="VOLTEC Weekly"
          />
        </div>
      </div>
      <div className="content max-w-5xl mx-auto px-4">
        <div className="information pt-8">
          <h1 className="text-6xl font-bold font-sans text-black tracking-tighter">
            VOLTEC Weekly
          </h1>
          <p className="text-neutral-600 font-manrope tracking-tighter text-lg">
            VOLTEC Weekly es el periódico oficial de VOLTEC. Contiene
            información relacionada a eventos, noticias, planes a futuro, datos
            curiosos, entre otros.
          </p>
        </div>
        <div className="issues pt-8 flex flex-col gap-4">
          {issues.map((issue) => (
            <div
              key={issue._id.toString()}
              className="issue flex flex-col md:flex-row justify-start items-center border-neutral-200 rounded-lg border-2 p-4 gap-4"
            >
              <div className="image relative w-full md:w-24 h-36 md:h-24 rounded-lg">
                <Image
                  src={`https://source.unsplash.com/random/${issue._id}`}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-lg"
                  alt={issue.title}
                />
              </div>
              <div className="text">
                <div className="issue-title">
                  <span className="block">{new Date(issue.date).toLocaleDateString()}</span>
                  <Link href={`/weekly/${issue._id.toString()}`}>
                    <a className="text-4xl hover:underline font-bold font-manrope text-black tracking-tighter">
                      {issue.title}
                    </a>
                  </Link>
                </div>
                <div className="description">
                  <p>{issue.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const client = await clientPromise;
    const db = client.db("Newspapers");

    const issue = await db.collection("issues").find({}).toArray();

    return {
      props: {
        issues: JSON.parse(JSON.stringify(issue)),
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        error: JSON.stringify(e),
      },
    };
  }
}
