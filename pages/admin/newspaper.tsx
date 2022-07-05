import React, { MouseEventHandler, useCallback, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useDropzone } from "react-dropzone";

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

  return (
    <AdminLayout title="Newspaper">
      <div className="heading">
        <h1 className="text-5xl text-neutral-900 font-manrope font-bold">
          Upload Newspaper
        </h1>
      </div>
      <div className="content grid grid-cols-1 pt-8 h-full gap-4">
        {files.length == 0 ? (
          <div className="uploader-section h-full font-manrope">
            <div
              {...getRootProps()}
              className="w-full bg-neutral-100 hover:bg-neutral-200 border-pink-400 py-5 border-2 rounded-lg text-black h-full flex justify-center items-center"
            >
              <input
                {...getInputProps()}
                className="w-full h-full"
                accept="application/pdf"
              />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>
                  Drag &apos;n&apos; drop some files here, or click to select
                  files
                </p>
              )}
            </div>
          </div>
        ) : (
          files.map((i: File) => {
            return (
              <>
                <div className="file-display flex gap-2 justify-between items-center text-neutral-600 font-manrope font-bold bg-neutral-200 p-4 rounded-lg">
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
                    <div className="image-preview">
                      <p>
                        {i.name}{" "}
                        <span className="text-neutral-500 text-xs">
                          &nbsp;({sizeOf(i.size)})
                        </span>
                      </p>
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
              </>
            );
          })
        )}
        <div className="information-section text-black">
          <div className="heading-content">
            <button className="bg-accent-blue text-white px-14 rounded-lg w-full hover:bg-blue-500 py-3">
              Publish
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Newspaper;
