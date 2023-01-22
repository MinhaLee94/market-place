import React from "react";

type FloatBtnProps = {
  iconPath: string;
};

export const FloatBtn = ({ iconPath }: FloatBtnProps) => {
  return (
    <button className="fixed bottom-24 right-5 cursor-pointer  rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500">
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={iconPath}
        ></path>
      </svg>
    </button>
  );
};
