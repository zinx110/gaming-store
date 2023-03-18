"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ModalCarouselImage from "./ModalCarouselImage";
interface iconProp {
  img: string;
}

const ModalCarousel = ({ data }: { data: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrowClicked = (dir: "left" | "right") => {
    let newIndex;
    if (dir === "left") {
      const isFirstSlide = currentIndex === 0;
      newIndex = isFirstSlide ? data?.img?.length - 1 : currentIndex - 1;
    } else {
      const isLastSlide = currentIndex === data?.img?.length - 1;
      newIndex = isLastSlide ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
  };

  const goToSLide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < data?.img?.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="w-full h-[250px]  m-auto relative group overflow-hidden flex ">
      {data?.img?.map((img: any, key: number) => (
        <SingleSlide
          key={key}
          img={img}
          index={key}
          currentIndex={currentIndex}
        />
      ))}
      <div className="w-full h-full absolute pointer-events-none ">
        <div className="w-full h-full relative  overflow-hidden">
          <LeftArrowButton
            place="left"
            img={"/assets/arrowleft.svg"}
            onClick={() => {
              arrowClicked("left");
            }}
          />
          <RightArrowButton
            place="right"
            img={"/assets/arrowRight.svg"}
            onClick={() => {
              arrowClicked("right");
            }}
          />
        </div>
      </div>

      <div className="w-full gap-4 flex bottom-2 justify-center  absolute">
        {data?.img?.map((img: any, key: number) => (
          <DotIcon
            key={img}
            onClick={() => {
              goToSLide(key);
            }}
            active={key === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalCarousel;

interface ArrowButtonProps {
  place: "left" | "right";
  img: string;
  onClick: () => void;
}

const LeftArrowButton = ({ place, img, onClick }: ArrowButtonProps) => {
  return (
    <div
      className={`-left-5  absolute top-[50%] -translate-x-0 translate-y-[-50%] px-6 py-2 text-2xl rounded-full p-2cursor-pointer bg-[#DA00FE] hover:bg-[#de67f3] text-white cursor-pointer  duration-500 pointer-events-auto`}
      onClick={onClick}
    >
      <Icon img={img} />
    </div>
  );
};
const RightArrowButton = ({ place, img, onClick }: ArrowButtonProps) => {
  return (
    <div
      className={`-right-5  absolute top-[50%] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full px-6 py-2 text-white cursor-pointer   bg-[#DA00FE] hover:bg-[#de67f3] duration-500 pointer-events-auto`}
      onClick={onClick}
    >
      <Icon img={img} />
    </div>
  );
};

const Icon = ({ img }: iconProp) => {
  return (
    <div className="w-[32px] h-[32px] relative flex justify-center items-center">
      <Image alt="." src={img} fill className="object-cover" />
    </div>
  );
};

interface DotIconProps {
  onClick: () => void;
  active: boolean;
}

const DotIcon = ({ onClick, active }: DotIconProps) => (
  <button
    className={`w-4 h-4 rounded-full ${
      active ? "bg-[#A100ED]" : "bg-white/80 hover:bg-white/50"
    } `}
    onClick={onClick}
  />
);

interface SingleSlideProps {
  img?: string[] | any;

  index: number;
  currentIndex: number;
  children?: React.ReactNode;
}

const SingleSlide = ({
  img,
  index,
  currentIndex,
  children,
}: SingleSlideProps) => {
  const [position, setPosition] = useState(index - currentIndex);

  useEffect(() => {
    const pos = index - currentIndex;

    setPosition(pos);
  }, [index, currentIndex]);

  return (
    <div
      className={`
${position < 0 ? "-translate-x-full" : ""}
${position === 0 ? "-translate-x-0" : ""}
${position > 0 ? "translate-x-full" : ""}
      absolute  w-full h-full rounded-2xl bg-center transition-all duration-500 delay-100`}
    >
      <ModalCarouselImage img={img} />
    </div>
  );
};
