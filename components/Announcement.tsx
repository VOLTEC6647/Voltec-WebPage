import { NextComponentType } from "next";
import React, { ReactComponentElement } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  background?: string;
};

const Announcement = ({ title, children, background }: Props) => {
  return (
    <div
      className={`announcement bg-background-blue w-full ${background}`}
    >
      <h1 className="heading text-6xl text-white font-sans font-bold tracking-tighter">
        {title}
      </h1>
      <div className="content pt-4">{children}</div>
    </div>
  );
};

export default Announcement;
