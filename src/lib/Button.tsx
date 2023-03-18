"use client";
import React from "react";

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="px-6 py-3 gap-2 flex justify-center items-center bg-white hover:bg-slate-200 rounded-2xl "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
