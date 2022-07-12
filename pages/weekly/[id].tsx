import React, { useState } from "react";
import clientPromise from "../../lib/mongodb";
import { NextPage, NextPageContext } from "next";
import Issue from "../../lib/types/NewspaperIssue";
import { ObjectId } from "mongodb";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  issue: Issue;
};

const Newspaper: NextPage<Props> = ({ issue }) => {
  if (issue.visibility === false) {
    return (
      <div className="h-screen w-screen">
        <div className="bg-black">
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-[90vh] w-full">
          <h1 className="title text-black font-manrope tracking-tighter">
            This issue is private.
          </h1>
        </div>
      </div>
    );
  }

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
      <div className="content max-w-4xl mx-auto h-full px-4">
        <div className="information pt-8">
          <span className="text-neutral-500">
            {new Date(issue.date).toLocaleDateString()}
          </span>
          <h1 className="text-6xl font-bold font-sans text-black tracking-tighter">
            {issue.title}
          </h1>
          <p className="text-neutral-600 font-manrope tracking-tighter text-lg">
            {issue.description}
          </p>
        </div>
        <div className="actions w-full rounded-lg my-4 flex gap-2">
          <button
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=Miren%20esta%20edici%C3%B3n%20de%20VOLTEC%20Weekly!&url=${encodeURIComponent(
                  window.location.toString()
                )}`
              );
            }}
            className="hover:bg-neutral-100 hover:shadow-sm border-accent-blue border-2 p-3 rounded-lg text-accent-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.toString());
              toast.success("Copied to clipboard!");
            }}
            className="hover:bg-neutral-100 hover:shadow-sm border-pink-400 border-2 p-3 rounded-lg text-pink-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z" />
            </svg>
          </button>
        </div>
        <div className="pdf h-screen w-full">
          <embed
            src={issue.fileUrl}
            type="application/pdf"
            className="w-full h-full"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Newspaper;

export async function getServerSideProps(context: NextPageContext) {
  try {
    if (!context.query.id) {
      return {
        props: {
          redirect: "/",
          permanent: false,
        },
      };
    }

    const client = await clientPromise;
    const db = client.db("Newspapers");

    const issue = await db
      .collection("issues")
      .findOne({ _id: new ObjectId(context.query.id.toString()) });

    return {
      props: {
        issue: JSON.parse(JSON.stringify(issue)),
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
