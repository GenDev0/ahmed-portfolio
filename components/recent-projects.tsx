import { projects } from "@/data";

import { AnimatedPin } from "./ui/pin-container";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of My <br />
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <AnimatedPin
              key={id}
              title={title}
              des={des}
              img={img}
              iconLists={iconLists}
              link={link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;
