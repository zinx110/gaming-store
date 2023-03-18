"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface props {
  size?: 1 | 2 | 3 | 4;
  clickable?: boolean;
  onclick?: () => void;
  img: string;
  imageSize?: number;
}

const Avatar = ({ size, clickable, onclick, img }: props) => {
  const [imageSize, setImageSize] = useState(48);
  useEffect(() => {
    if (!size || size === 1) {
      setImageSize(48);
    }
    if (size && size === 2) {
      setImageSize(56);
    }
    if (size && size === 3) {
      setImageSize(64);
    }
    if (size && size === 4) {
      setImageSize(80);
    }
  }, [size]);
  return (
    <button
      className={`w-[${imageSize}px] h-[${imageSize}px] relative rounded-full  overflow-hidden  hover:bg-[#343434] flex items-center justify-center `}
    >
      <ImageComp img={img} imageSize={imageSize} />
    </button>
  );
};

export default Avatar;

const ImageComp = ({ img, imageSize }: props) => {
  return (
    <Image
      alt="."
      src={img}
      className="object-cover"
      width={imageSize}
      height={imageSize}
    />
  );
};
