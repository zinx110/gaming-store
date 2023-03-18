"use client";
import Image from "next/image";
import React, { useState } from "react";
interface prop {
  category: {
    name: string;
    link: string;
    img: string;
  };
}
const Categories = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <div className=" w-full  flex flex-col gap-6">
      <h4 className="font-mono font-normal text-2xl leading-7 text-white text-left">
        Category
      </h4>
      {category.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
};

export default Categories;

const Category = ({ category }: prop) => (
  <div className=" h-8 flex hover:cursor-pointer gap-6 items-center hover:bg-[#3D3D3D]">
    <Image
      className=" object-contain"
      src={category.img}
      width={32}
      height={32}
      alt=""
    />

    <p className="font-mono font-bold text-2xl leading-7 text-[#8A8A8A] text-left">
      {category.name}
    </p>
  </div>
);

const category = [
  { name: "Computer", link: "/computer", img: "/assets/computer.svg" },
  { name: "Headphone", link: "/headphone", img: "/assets/headphone.svg" },
  { name: "Mouse", link: "/mouse", img: "/assets/mouse.svg" },
  { name: "Gaming Keyboard", link: "/keyboard", img: "/assets/keyboard.svg" },
];
