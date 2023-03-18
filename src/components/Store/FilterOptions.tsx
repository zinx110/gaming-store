"use client";
import Image from "next/image";
import React, { useState } from "react";

const FilterOptions = () => {
  const [active, setActive] = useState("Top");
  const [filter, setFilter] = useState();

  return (
    <div className="flex gap-2 items-center">
      <Option name="Top" active={active} setActive={setActive} />
      <Option name="Popular" active={active} setActive={setActive} />
      <Option name="Recommended" active={active} setActive={setActive} />
      <Filter filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default FilterOptions;

const Option = ({
  name,
  active,
  setActive,
}: {
  name: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string | any>>;
}) => {
  return (
    <button
      onClick={() => setActive(name)}
      className={`px-6 py-2 flex justify-center items-center font-medium text-[10px] leading-3 text-white rounded-2xl border-solid  border-x border-y cursor-pointer ${
        name === active
          ? "border-[#A100ED] bg-[#A100ED]"
          : "border-white hover:bg-white/10"
      }`}
    >
      {name}
    </button>
  );
};

const Filter = ({
  filter,
  setFilter,
}: {
  filter: any;
  setFilter: React.Dispatch<React.SetStateAction<any | undefined>>;
}) => {
  return (
    <button
      onClick={() => {
        setFilter(0);
      }}
      className={`px-2 py-2 gap-2 flex justify-center items-center  rounded-lg border-solid  border-x border-y cursor-pointer border-[#DA00FE]  hover:bg-[#EA10FE]/25`}
    >
      <div className="w-[14px] h-[14px] relative">
        <Image
          src="/assets/filter.svg"
          alt="."
          fill
          className="object-contain"
        />
      </div>
      <p className="font-medium text-[10px] leading-3 text-white -tracking-tighter">
        Filter
      </p>
    </button>
  );
};
