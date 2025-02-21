import { FaLocationArrow } from "react-icons/fa6";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { socialMedia } from "@/data";

import MagicButton from "./ui/magic-button";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <BackgroundBeamsWithCollision className="flex w-full flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="relative z-20 text-center font-sans text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl">
            Let&apos;s Build Your Digital{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-gradient-to-r from-purple via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Success Story.</span>
              </div>
              <div className="relative bg-gradient-to-r from-purple via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent">
                <span className="">Success Story.</span>
              </div>
            </div>
          </h2>
          <p className="my-5 text-center text-white-200 md:mt-10">
            Ready to see real results? Let&apos;s talk about how I can transform
            your online presence and drive your business forward.
          </p>
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-between space-y-2 px-20 md:flex-row md:space-y-0">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © 2025 Ahmed Chebbi
          </p>

          <div className="flex items-center gap-6 md:gap-3">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default Footer;
