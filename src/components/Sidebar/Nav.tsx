"use client";
import Image from "next/image";
import React, { useState } from "react";
interface prop {
  nav: {
    name: string;
    link: string;
    img: string;
  };
}
const Nav = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <div className=" w-full py-14 flex flex-col gap-8">
      {navs.map((nav) => (
        <NavLink key={nav.name} nav={nav} />
      ))}
    </div>
  );
};

export default Nav;

const NavLink = ({ nav }: prop) => (
  <div className=" h-8 flex hover:cursor-pointer gap-6 items-center hover:bg-[#3D3D3D]">
    <Image
      className=" object-contain"
      src={nav.img}
      width={32}
      height={32}
      alt=""
    />

    <p className="font-mono font-bold text-2xl leading-7 text-white text-left">
      {nav.name}
    </p>
  </div>
);

const navs = [
  { name: "Profile", link: "/profile", img: "/assets/profile.svg" },
  { name: "Search", link: "/search", img: "/assets/Search.svg" },
  { name: "Favorite", link: "/favorite", img: "/assets/Favorite.svg" },
  { name: "Balance", link: "/balance", img: "/assets/Balance.svg" },
];
