import React from "react";

import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};
const ShimmerButton = ({
  children,
  className,
  onClick,
}: ShimmerButtonProps) => {
  return (
    // Button code
    <button
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ShimmerButton;
