import React, { ChangeEventHandler, useCallback, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useDropzone } from "react-dropzone";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import { motion } from "framer-motion";
import Head from "next/head";

const sizeOf = function (bytes: number) {
  if (bytes == 0) {
    return "0.00 B";
  }
  var e = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    (bytes / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP".charAt(e) + "B"
  );
};

const Newspaper = () => {
  const [files, setFiles]: Array<any> = useState([]);
  const [title, setTitle] = useState(
    `VOLTEC Weekly | ${new Date().toLocaleDateString()}`
  );
  const [description, setDescription] = useState(
    "In this week's edition of VOLTEC Weekly, we discuss the latest news and events regarding..."
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesArray = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    console.log(filesArray);
    setFiles(filesArray);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const deleteFile: any = (event: any, name: string) => {
    event.preventDefault();
    setFiles(
      files.filter(function (i: File) {
        return i.name !== name;
      })
    );
  };

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDescription(e.target.value);
  };

  return (
    <AdminLayout
      title="Newspaper"
      image="https://images.unsplash.com/photo-1591647273840-8826c6cfab8b"
    >
      <Head>
        <title>Manage Newspaper | VOLTEC Robotics 6647</title>
      </Head>
      <div className="heading">
        <h1 className="text-5xl text-neutral-900 font-manrope font-bold">
          Upload Newspaper
        </h1>
        {files.length == 0 ? (
          <p className="font-manrope text-neutral-400 font-bold text-lg pt-1">
            Select a file to begin.
          </p>
        ) : null}
      </div>
      <div className="content grid grid-cols-1 pt-8 h-full gap-4">
        {files.length == 0 ? (
          <div className="uploader-section font-manrope h-[52vh]">
            <div
              {...getRootProps()}
              className="w-full bg-neutral-100 hover:bg-neutral-200 border-neutral-300 border-4 border-dashed py-5 rounded-lg text-black h-full flex justify-center items-center"
            >
              <input
                {...getInputProps()}
                className="w-full h-full text-neutral-400"
                accept="application/pdf"
              />
              {isDragActive ? (
                <div className="dropzone text-neutral-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-36 w-36"
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
                  <p>Drop the files here ...</p>
                </div>
              ) : (
                <div className="dropzone text-neutral-300 flex flex-col justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-36 w-36"
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
                  <p className="text-neutral-600 font-bold">
                    Drag &apos;n&apos; drop some files here, or click to select
                    files
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <motion.div className="content">
            <div className="information-top flex flex-col justify-start items-start gap-2 w-full">
              <div className="news-title w-full">
                <label
                  htmlFor="title"
                  className="font-space-grotesk text-neutral-500 text-lg"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full p-2 font-manrope border-2 border-neutral-300 rounded-lg text-neutral-500 font-bold"
                />
              </div>
              <div className="news-description w-full">
                <label
                  htmlFor="title"
                  className="font-space-grotesk text-neutral-500 text-lg"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="w-full p-2 font-manrope border-2 border-neutral-300 rounded-lg text-neutral-500 font-bold"
                />
              </div>
            </div>
            <div className="files-map flex flex-col justify-start items-start gap-2 w-full py-2">
              <p className="font-space-grotesk text-neutral-500 text-lg">
                Files
              </p>
              {files.map((i: File) => {
                return (
                  <div className="file w-full" key={i.name}>
                    <div className="file-display flex gap-2 justify-between items-center text-neutral-600 font-manrope font-bold bg-neutral-200 p-4 rounded-lg w-full">
                      <div className="info flex justify-start items-center gap-2">
                        <div className="check text-blue-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="files">
                          <a
                            /* @ts-ignore */
                            href={i.preview || ""}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {i.name}{" "}
                            <span className="text-neutral-500 text-xs">
                              &nbsp;({sizeOf(i.size)})
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="cancel text-neutral-400 cursor-pointer"
                        onClick={() => deleteFile(event, i.name)}
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="publish-button text-black pt-2">
              <button className="bg-accent-blue text-white px-14 rounded-lg w-full hover:shadow-lg transition-all duration-150 py-3">
                Publish
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Newspaper;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
}
