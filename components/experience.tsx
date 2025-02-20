import { workExperience } from "@/data";

import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20" id="experiences">
      <h1 className="heading">
        My <br />
        <span className="text-purple">Work Experience</span>
      </h1>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {workExperience.map(({ id, title, desc, thumbnail }) => (
          <Button
            key={id}
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Experience;
