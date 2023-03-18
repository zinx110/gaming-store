"use client";
import { useApp } from "@/context/AppContext";
import Image from "next/image";
import React from "react";
import SingleProductModal from "./SingleProductModal";

interface dataProp {
  name?: string;
  category?: string;
  img?: string | string[];
  price?: number;
  company?: string;
  companyMotto?: string;
  bottomText1?: string;
  bottomText2?: string;
  subname?: string;
  subname2?: string;
}
const SingleProduct = ({ data }: { data: dataProp }) => {
  const { openModal } = useApp();
  return (
    <>
      <div
        className="w-full h-[360px] relative cursor-pointer"
        onClick={() => openModal(data)}
      >
        <Background />
        <Info data={data} />
      </div>
    </>
  );
};

export default SingleProduct;

const Background = () => {
  return (
    <div className="w-full h-full pt-10 absolute">
      <div className="w-full h-full bg-[#323232] rounded-lg" />
    </div>
  );
};
const Info = ({ data }: { data: dataProp }) => {
  return (
    <div className="absolute w-full h-full  p-3 hover:p-0 transition-all duration-200">
      <div className="w-full h-full flex flex-col items-center px-5">
        <div className="w-full aspect-square  relative">
          <Image
            src={data?.img ? data?.img[0] : ""}
            alt="."
            fill
            className="object-contain"
          />
        </div>
        <h2 className="font-normal text-base leading-5 text-white font-[Inter] mb-2">
          {data?.name}
        </h2>
        <h4 className="font-normal text-[10px] leading-3 text-[#8A8A8A] font-[Inter] mb-4">
          {data?.category}
        </h4>
        <h3 className="font-medium text-xs leading-4 text-brightPink font-[Inter] mb-4">
          {data?.category}
        </h3>
        <AddToCartButton id={data?.name} />
      </div>
    </div>
  );
};

const AddToCartButton = ({ id }: { id: string | any }) => {
  return (
    <button
      onClick={() => {
        console.log(id);
      }}
      className="flex gap-1 px-3 py-1 rounded-lg items-center hover:bg-white/20"
    >
      <div className="w-6 h-6 relative">
        <Image
          fill
          className="object-contain"
          src="/assets/plusIcon.svg"
          alt="."
        />
      </div>
      <p className="font-normal text-[10px] leading-3 text-white">
        Add to Cart
      </p>
    </button>
  );
};
