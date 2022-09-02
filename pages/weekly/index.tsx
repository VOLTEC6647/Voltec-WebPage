import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import clientPromise from "../../lib/mongodb";
import { NextPage, NextPageContext } from "next";
import Issue from "../../lib/types/NewspaperWP";
import Link from "next/link";
import { fetchNewspaperIssues } from "../../lib/wordpress/newspaper";
import WeeklyFooter from "../../components/WeeklyFooter";

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
      <div className="bg-background-blue-darker">
        <Navbar />
      </div>
      <div>
        <div className="cover-image h-56 w-full relative">
          <Image
            src="/blog.jpeg"
            objectFit="cover"
            layout="fill"
            alt="VOLTEC Weekly"
          />
        </div>
      </div>
      <div className="content max-w-4xl mx-auto px-4 mb-10">
        <div className="information pt-8">
          <h1 className="text-6xl font-bold font-sans text-black tracking-tight">
            VOLTEC Weekly
          </h1>
          <p className="text-neutral-600 font-manrope text-lg">
            VOLTEC Weekly es el periódico oficial de VOLTEC. Contiene
            información relacionada a eventos, noticias, planes a futuro, datos
            curiosos, entre otros.
          </p>
        </div>
        <div className="issues pt-8 flex flex-col gap-4">
          {issues && issues.length > 0 ? (
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
                      <a className="text-4xl hover:underline font-bold font-manrope text-black">
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
            ))
          ) : (
            <div className="no-items w-full grid place-items-center py-48 bg-neutral-100 rounded-xl border-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>

              <h4 className="text-lg">No hay ediciones de periodico por el momento.</h4>
              <Link href="/">
                <a className="text-teal-600 underline">Ir al inicio</a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <WeeklyFooter />
    </div>
  );
};

export default Index;
