import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import clientPromise from "../../lib/mongodb";
import { NextPage, NextPageContext } from "next";
import Issue from "../../lib/types/NewspaperWP";
import Link from "next/link";
import { fetchNewspaperIssues } from "../../lib/wordpress/newspaper";

const BASE_URL = "http://voltec.local/wp-json/wp/v2";

type Props = {
  issues: Issue[];
};

const Index: NextPage<Props> = () => {
  const [issues, setIssues] = useState<Array<Issue>>([]);
  console.log(issues);

  useEffect(() => {
    const getIssues = async () => {
      const posts = await fetchNewspaperIssues();
      setIssues(posts);
    };
    getIssues();
  }, []);

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
      <div className="content max-w-4xl mx-auto px-4">
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
          {issues &&
            issues.map((issue) => (
              <div
                key={issue.id.toString()}
                className="issue flex flex-col md:flex-row justify-start items-center border-neutral-200 rounded-lg border-2 p-4 gap-4"
              >
                <div className="image relative w-full md:w-24 h-36 object-cover md:h-24 rounded-lg">
                  <Image
                    src={`https://source.unsplash.com/random?nature,${issue.id}`}
                    objectFit="cover"
                    layout="fill"
                    className="rounded-lg"
                    alt={issue.title.rendered}
                  />
                </div>
                <div className="text">
                  <div className="issue-title">
                    <span className="block">
                      {new Date(issue.date).toLocaleDateString()}
                    </span>
                    <Link href={`/weekly/${issue.id.toString()}`}>
                      <a className="text-4xl hover:underline font-bold font-manrope text-black tracking-tighter">
                        {issue.title.rendered}
                      </a>
                    </Link>
                  </div>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: issue.acm_fields.description,
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
