"use client";
import React, { useState } from "react";
import SingleProduct from "./SingleProduct";

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

const AllProducts = ({ data }: { data: dataProp[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-x-6 gap-y-4">
      {data.map((item, key) => (
        <SingleProduct data={item} key={key} />
      ))}
    </div>
  );
};

export default AllProducts;
