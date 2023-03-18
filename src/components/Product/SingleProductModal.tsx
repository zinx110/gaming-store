"use client";
import React from "react";
import ModalContainer from "../ModalContainer/ModalContainer";

const AllProducts = ({
  data,
}: {
  data: { name: string; category: string; img: string; price: number }[];
}) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-x-6 gap-y-4">
      a
    </div>
  );
};

export default AllProducts;
