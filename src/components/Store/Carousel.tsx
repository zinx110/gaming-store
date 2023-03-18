"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarouselImage from "./CarouselImage";
interface iconProp {
  img: string;
}

const Carousel = ({ data }: { data: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrowClicked = (dir: "left" | "right") => {
    let newIndex;
    if (dir === "left") {
      const isFirstSlide = currentIndex === 0;
      newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    } else {
      const isLastSlide = currentIndex === slides.length - 1;
      newIndex = isLastSlide ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
  };

  const goToSLide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="w-full h-full  m-auto relative group overflow-hidden flex ">
      {slides.map((slide, key) => (
        <SingleSlide
          key={key}
          slide={slide}
          index={key}
          currentIndex={currentIndex}
        />
      ))}
      <div className="w-full h-full absolute pointer-events-none pr-24">
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

      <div className="w-full gap-4 flex bottom-2 justify-center mb-16 absolute">
        {slides.map((slide, key) => (
          <DotIcon
            key={slide.img}
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

export default Carousel;

interface ArrowButtonProps {
  place: "left" | "right";
  img: string;
  onClick: () => void;
}

const LeftArrowButton = ({ place, img, onClick }: ArrowButtonProps) => {
  return (
    <div
      className={`-left-14 group-hover:left-5 absolute top-[50%] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:bg-white/20 duration-500 pointer-events-auto`}
      onClick={onClick}
    >
      <Icon img={img} />
    </div>
  );
};
const RightArrowButton = ({ place, img, onClick }: ArrowButtonProps) => {
  return (
    <div
      className={`-right-14 group-hover:right-5 absolute top-[50%] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:bg-white/20 duration-500 pointer-events-auto`}
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
  slide: {
    rating?: number | undefined;
    img?: string | any;
    name: string;
    name2: string;
    subname: string;
    description: string;
  };
  index: number;
  currentIndex: number;
  children?: React.ReactNode;
}

const SingleSlide = ({
  slide,
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
      <CarouselImage data={slide} />
    </div>
  );
};

const slides = [
  {
    name: "Oculus",
    name2: "VR",
    subname: "Virtual Reality",
    description:
      "VR box 360 original complete geme.VR gaming complete set of 2 remotes.",
    rating: 4.3,
    img: "/products/oculus.png",
  },
  {
    name: "Gaming",
    name2: "Combo",
    subname: "Mouse + Keyboard",
    description:
      "Gamdias Hermes Lite Mechanical Gaming Keyboard and mouse set.",
    rating: 3.9,
    img: "/products/mkeyboard.png",
  },
  {
    name: "Gaming",
    name2: "Headphone",
    subname: "Emersive surround",
    description:
      "Gamdias Hermes Lite Gaming Headphone. Complete surround sound with ANC and noise cancellation technology.",
    rating: 3.9,
    img: "/products/headphone.png",
  },
];
