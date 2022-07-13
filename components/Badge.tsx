import React from "react";

type Props = {
  type: BadgeTypes;
};

export type BadgeTypes =
  | "community"
  | "offseason"
  | "season"
  | "information"
  | "robots"
  | "sponsor"
  | "volunteer"
  | "event"
  | "public"
  | "private"
  | string;

const Badge = ({ type }: Props) => {
  return (
    <div
      className={`badge badge-${type} bg-cover text-xs text-white tracking-tighter py-1 font-mono px-2 rounded-xl flex justify-center items-center gap-1`}
    >
      {type === "public" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
        </svg>
      ) : type === "private" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : null}
      {type.substring(0, 1).toUpperCase() + type.substring(1)}
    </div>
  );
};

export default Badge;
