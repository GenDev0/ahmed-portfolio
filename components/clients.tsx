import { companies, testimonials } from "@/data";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <br />
        <span className="text-purple">Future clients</span>
      </h1>
      <div className="mt-10 flex flex-col items-center">
        <div className="relative flex h-[50vh] flex-col items-center overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-8">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 md:max-w-60">
              <img src={img} alt={name} className="w-10 md:w-10" />
              <img src={nameImg} alt={name} className="w-24 md:w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Clients;
