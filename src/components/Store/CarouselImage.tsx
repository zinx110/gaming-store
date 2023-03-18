"use client";
import Button from "@/lib/Button";
import Image from "next/image";
import React from "react";

interface dataProp {
  data?: {
    rating?: number | undefined;
    img?: string | any;
    name: string;
    name2: string;
    subname: string;
    description: string;
  };
}

const CarouselImage = ({ data }: dataProp) => {
  return (
    <div className=" w-full h-full bg-[#242424]">
      <div className="w-full h-full absolute py-16 pr-24">
        <div
          className={`bg-gradient-to-b from-[rgb(161,0,237)]/25 to-[#DA00FE] backdrop-blur-sm w-full h-full rounded-2xl   bg-center `}
        />
      </div>
      <div className="w-full h-full absolute flex justify-between items-center ">
        <Left data={data} />
        <Right img={data?.img} />
      </div>
    </div>
  );
};

export default CarouselImage;

const Left = ({ data }: dataProp) => {
  return (
    <div className="h-full py-24 px-14 flex flex-col gap-1 justify-between">
      <StarsComponent rating={Math.ceil(3.4)} />
      <div className="w-full  flex flex-col mb-2">
        <h3 className=" font-sans font-normal text-[40px] leading-[44px] -tracking-tighter text-white">
          {"["}
          {data?.name} <span className="text-[#DA00FE]">{data?.name2}</span>
          {"]"}
        </h3>
        <h3 className="font-sans font-normal text-[40px] leading-[44px] -tracking-tighter text-white">
          {data?.subname}
        </h3>
      </div>
      <p className="w-full  font-sans font-bold text-xs leading-4 -tracking-tighter text-white mb-2">
        {data?.description}
      </p>
      <div className="">
        <Button onClick={() => {}}>
          <div className="w-[24px] h-[24px] relative flex justify-center items-center ">
            <Image
              alt="."
              src="/assets/shop.svg"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-normal text-lg leading-6 tracking-tighter text-[#DA00FE]">
            Order Now
          </p>
        </Button>
      </div>
    </div>
  );
};
const Right = ({ img }: { img: string }) => {
  return (
    <div className=" w-1/2 h-full relative flex justify-center items-center ">
      <Image
        alt="."
        src={img}
        fill
        className="object-contain"
        style={{ fill: "#ffffff" }}
      />
    </div>
  );
};

const StarsComponent = ({ rating }: { rating: number | undefined }) => {
  return (
    <div className="h-3 flex gap-1">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <SingleStar key={index} rating={rating} index={index + 1} />
      ))}
    </div>
  );
};
const SingleStar = ({
  rating,
  index,
}: {
  rating: number | undefined;
  index: number;
}) => {
  return (
    <div className="w-[12px] h-[12px] relative flex justify-center items-center ">
      <Image
        alt="."
        src={
          rating && index <= rating
            ? "/assets/star.svg"
            : "/assets/greyStar.svg"
        }
        fill
        className="object-cover"
        style={{ fill: "#ffffff" }}
      />
    </div>
  );
};
