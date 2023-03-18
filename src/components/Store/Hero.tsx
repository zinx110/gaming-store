"use client";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "./Carousel";
interface iconProp {
  img: string;
}
const Hero = () => {
  const [] = useState();
  return (
    <div className=" ml-[120px] mr-6 h-[400px] bg-[#ff0000] flex items-center justify-center  relative ">
      <Carousel data={[{}]} />
    </div>
  );
};

export default Hero;
