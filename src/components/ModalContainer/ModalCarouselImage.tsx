"use client";
import Button from "@/lib/Button";
import Image from "next/image";
import React from "react";

interface dataProp {
  img?: string[] | any;
}

const ModalCarouselImage = ({ img }: dataProp) => {
  return (
    <div className=" w-full h-full ">
      <img className="w-full h-full object-contain" src={img}></img>
    </div>
  );
};

export default ModalCarouselImage;
