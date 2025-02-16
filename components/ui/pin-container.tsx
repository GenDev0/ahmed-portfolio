"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./3d-pin";

/* eslint-disable @next/next/no-img-element */

type AnimatedPinProps = {
  title?: string;
  des?: string;
  img?: string;
  link?: string;
  iconLists?: string[];
};

export function AnimatedPin({
  title,
  des,
  img,
  link,
  iconLists,
}: AnimatedPinProps) {
  return (
    <PinContainer title={link} href={link}>
      <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
        <div
          className="relative h-full w-full overflow-hidden lg:rounded-3xl"
          style={{ backgroundColor: "#13162D" }}
        >
          <img src="/bg.png" alt="bgimg" />
        </div>
        <img src={img} alt="cover" className="absolute bottom-0 z-10" />
      </div>
      <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
        {title}
      </h1>

      <p
        className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
        style={{
          color: "#BEC1DD",
          margin: "1vh 0",
        }}
      >
        {des}
      </p>
      <div className="mb-3 mt-7 flex items-center justify-between">
        <div className="flex items-center">
          {iconLists?.map((icon, index) => (
            <div
              key={index}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <img src={icon} alt="icon5" className="p-2" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <p className="flex text-sm text-purple md:text-xs lg:text-xl">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </div>
    </PinContainer>
  );
}
