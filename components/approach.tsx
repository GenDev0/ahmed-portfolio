"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { phases } from "@/data";

import ShimmerButton from "./ui/shimmer-button";

/* eslint-disable @typescript-eslint/no-explicit-any */

const Approach = () => {
  return (
    <section id="approach" className="w-full py-20">
      <h1 className="heading">
        My
        <span className="text-purple">Approach</span>
      </h1>
      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        {phases.map(
          ({
            title,
            description,
            order,
            containerClassName,
            animationSpeed,
            colors,
            dotSize,
          }) => {
            return (
              <Card
                key={order}
                title={title}
                description={description}
                icon={<PhaseIcon order={order} />}
              >
                <CanvasRevealEffect
                  animationSpeed={animationSpeed}
                  containerClassName={containerClassName}
                  colors={colors}
                  dotSize={dotSize}
                />
              </Card>
            );
          }
        )}
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute -left-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-black opacity-30 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex min-w-40 translate-x-[-50%] translate-y-[-50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
        <p
          className="relative z-10 mt-4 text-center text-sm opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const PhaseIcon = ({ order }: { order: number }) => {
  return (
    <ShimmerButton>
      <span className="relative z-20 text-purple">Phase {order}</span>
    </ShimmerButton>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
