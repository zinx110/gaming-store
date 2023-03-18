"use client";
import { useApp } from "@/context/AppContext";
import React from "react";
import ModalInfoRight from "./ModalInfoRight";

interface dataProp {
  children?: React.ReactNode;
}
const ModalContainer = ({ children }: dataProp) => {
  const { isModalOpen, openModal, closeModal, modalData } = useApp();
  return (
    <>
      {isModalOpen && (
        <div
          className="fixed w-full h-full bg-gray-500 bg-opacity-25 transition-opacity flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="flex w-[1200px] h-[750px] bg-white border-solid border-black border-[10px] shadow-[0_30px_30px_25px_rgba(218,0,254,0.2)] rounded-3xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex-1 h-[90%] bg-[#DA00FE]/50 rounded-xl pr-2 pb-2">
              <div className="w-full h-full bg-[#282828] rounded-xl p-[30px] flex flex-col">
                <h3 className="font-bold text-xl leading-6 text-white">
                  {modalData.company}
                </h3>
                <h3 className="font-normal text-xl leading-6 text-white">
                  {modalData.companyMotto}
                </h3>
                <div className="flex flex-col px-10 mt-10">
                  <h2 className="font-bold text-4xl leading-[50px] text-white mt-10">
                    {modalData.subname}
                  </h2>
                  <h2 className="font-bold text-4xl leading-10 text-[#DA00FE] mt-10">
                    {modalData.subname2}
                  </h2>
                  <h3 className="font-normal text-2xl leading-6 text-white mt-10">
                    {modalData.category}
                  </h3>
                  <h3 className="font-normal text-2xl leading-6 text-white mt-12 italic">
                    ${modalData.price}
                  </h3>
                </div>
              </div>
            </div>
            <ModalInfoRight />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
