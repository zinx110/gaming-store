"use client";
import Image from "next/image";
import React, { useState } from "react";
import Nav from "./Nav";
import Categories from "./Categories";
import LogoDiv from "./LogoDiv";

const Sidebar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <>
      {!openmenu ? (
        <div className="left-5 top-20 bg-blue-200 h-4 w-4 sm:w-0 flex absolute">
          <button
            onClick={() => {
              setOpenmenu(true);
            }}
          >
            <Image
              className="w-4 h-4 object-contain"
              src="/assets/menu.png"
              width={48}
              height={48}
              alt=""
            />
          </button>
          {openmenu}
        </div>
      ) : null}
      <div className="fixed w-[360px] h-full bg-[#2D2D2D]  py-[100px] px-12 ">
        <button className="w-[200px] h-[54px] m-8 flex items-center justify-center bg-[#8A8A8A] hover:bg-[#7A7A7A] rounded-2xl py-3 px-14 text-2xl leading-8 text-white">
          Catalogue
        </button>
        <Nav />
        <Categories />
      </div>
      <LogoDiv />
    </>
  );
};

export default Sidebar;
