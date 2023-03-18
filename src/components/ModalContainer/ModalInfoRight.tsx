"use client";
import { useApp } from "@/context/AppContext";
import React, { useEffect, useState } from "react";
import ModalCarousel from "./ModalCaousel";

interface dataProp {
  children?: React.ReactNode;
}
const ModalInfoRight = ({ children }: dataProp) => {
  const { modalData } = useApp();
  return (
    <div className="flex-1 h-[90%] flex-col justify-between pt-[30px]">
      <Top3Buttons />
      <QuantityDiv name={modalData?.name} />

      <ModalCarousel data={modalData} />

      <BottomTextDiv
        bottomText1={modalData.bottomText1}
        bottomText2={modalData.bottomText2}
      />
    </div>
  );
};

export default ModalInfoRight;

const Top3Buttons = () => {
  return (
    <div className="w-full h-[50px] flex justify-between px-5">
      <SIngleButton name="Services" />
      <SIngleButton name="Products" />
      <SIngleButton name="Shop Now" />
    </div>
  );
};
const SIngleButton = ({ name }: { name: string }) => {
  return (
    <button
      onClick={() => {}}
      className={`px-8 py-4 flex justify-center items-center font-medium text-[20px] leading-5 text-white rounded-full border-solid   cursor-pointer bg-[#DA00FE] hover:bg-[#de67f3] uppercase `}
    >
      {name}
    </button>
  );
};

const QuantityDiv = ({ name }: { name: string | any }) => {
  const [quantity, setQuantity] = useState<number>(2);
  useEffect(() => {
    console.log(quantity);
  }, [quantity]);
  return (
    <div className="w-full h-[160px] flex justify-between px-5 mt-[60px] gap-2">
      <div className="flex-1 h-full flex flex-col justify-between">
        <h2 className="font-normal text-[50px] leading-[56px]">
          {quantity > 9 ? quantity : `0${quantity >= 0 ? quantity : 0}`}
        </h2>
        <h2 className="font-normal text-[36px] leading-[40px]">{name}</h2>
      </div>
      <div className="w-11 h-full flex flex-col">
        <button
          className="flex-1 w-full bg-[#DA00FE] hover:bg-[#de67f3] rounded-t-xl"
          onClick={() => setQuantity((prev) => ++prev)}
        >
          +
        </button>
        <button
          className="flex-1 w-full bg-[#DA00FE] hover:bg-[#de67f3] rounded-b-xl"
          onClick={() => setQuantity((prev) => (prev > 0 ? --prev : 0))}
        >
          -
        </button>
      </div>
    </div>
  );
};
const BottomTextDiv = ({
  bottomText1,
  bottomText2,
}: {
  bottomText1: string | any;
  bottomText2: string | any;
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5">
      <h2 className="font-normal text-[24px] leading-[27px] italic text-black">
        {bottomText1}
      </h2>
      <h2 className="font-normal text-[24px] leading-[27px] italic text-[#DA00FE]">
        {bottomText2}
      </h2>
    </div>
  );
};
