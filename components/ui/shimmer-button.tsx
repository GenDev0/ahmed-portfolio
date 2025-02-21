"use client";

import React from "react";

import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  className?: string;
  style?: {
    background: string;
    backgroundColor: string;
  };
  children?: React.ReactNode;
  onClick?: () => void;
};
const ShimmerButton = ({
  children,
  className,
  style,
  onClick,
}: ShimmerButtonProps) => {
  return (
    // Button code
    <button
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#04071d,45%,#CBACF9,55%,#04071d)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors",
        className
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
export default ShimmerButton;
