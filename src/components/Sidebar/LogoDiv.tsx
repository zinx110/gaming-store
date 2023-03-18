"use client";
import Image from "next/image";
import React, { useState } from "react";

const LogoDiv = () => (
  <div className="m-5 h-14 flex fixed hover:cursor-pointer">
    <Image
      className="w-14 h-14 object-contain"
      src="/assets/logo.svg"
      width={56}
      height={56}
      alt=""
    />
    <div className="px-2 h-9 mt-5">
      <p className="h-4 font-mono font-bold text-lg leading-5 text-[#DA00FE] text-left">
        GAME
      </p>
      <p className="h-4 font-mono font-bold text-lg leading-5 text-[#A100ED] text-right pl-5">
        STORE
      </p>
    </div>
  </div>
);

export default LogoDiv;
