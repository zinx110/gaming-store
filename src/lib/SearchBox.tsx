"use client";

import Image from "next/image";

const SearchBox = () => {
  return (
    <div className="ml-[120px] mt-10 bg-[rgb(95,95,95)]/[.35] px-6 py-3 gap-6 h-14 w-[360px] rounded-2xl flex items-center outline-none text-[#8A8A8A]">
      <div className="w-8 h-8 relative">
        <Image
          alt="."
          src="/assets/search.svg"
          className="object-cover"
          width={32}
          height={32}
        />
      </div>
      <input
        className="h-8 w-[240px] flex items-center justify-start outline-none text-white font-medium text-2xl leading-8 bg-transparent placeholder:text-[#8A8A8A]"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
