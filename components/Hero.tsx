import Link from "next/link";

import { FaLocationArrow } from "react-icons/fa6";

import ShimmerButton from "./ui/shimmer-button";
import { OldSpotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        {/* <div className="bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
          <NewSpotlight />
          <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
              Spotlight <br /> which is not overused.
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
              A subtle yet effective spotlight effect, because the previous
              version is used a bit too much these days.
            </p>
          </div>
        </div> */}

        <OldSpotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <OldSpotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <OldSpotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Crafting Digital Experiences
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Seamlessly Transforming Ideas into Engaging Web Applications."
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Ahmed, a passionate developer based in Tunisia.
          </p>
          <Link href={"#"}>
            <ShimmerButton>
              Show my work
              <FaLocationArrow className="ml-2" />
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
