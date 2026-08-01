import { Loader2Icon } from "lucide-react";
import React from "react";

interface LoaderProps {
  size?: number;
  className?: string;
  containerClassName?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = 80,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={`flex min-h-screen items-center justify-center mt-[-100px] md:mt-[-150px] xl:mt-[-200px] ${containerClassName}`}
    >
      <Loader2Icon
        size={size}
        className={`animate-spin text-indigo-400 ${className}`}
      />
    </div>
  );
};

export default Loader;