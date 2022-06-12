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
  | string;

const Badge = ({ type }: Props) => {
  return (
    <div
      className={`badge badge-${type} bg-cover text-white tracking-tighter py-1 font-mono px-2 rounded-xl`}
    >
      {type.substring(0, 1).toUpperCase() + type.substring(1)}
    </div>
  );
};

export default Badge;
