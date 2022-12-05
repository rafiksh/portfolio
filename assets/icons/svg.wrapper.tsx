import React from "react";

interface SvgWrapperProps {
  children: React.SVGProps<SVGPathElement>;
}

const SvgWrapper = ({ children }: SvgWrapperProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-gray-800 dark:text-gray-50"
  >
    <>{children}</>
  </svg>
);

export { SvgWrapper };
