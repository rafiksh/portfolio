import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.SVGProps<SVGSVGElement>;
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.SVGProps<SVGSVGElement>;
}

const commonButtonClassName =
  "h-10 flex justify-center items-center font-normal rounded-lg p-2  active:text-opacity-80 active:text-opacity-70 dark:hover:text-gray-200 dark:active:text-gray-400";

const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  className,
  icon,
  ...props
}) => (
  <button
    type="button"
    className={classNames(
      commonButtonClassName,
      "text-gray-50 bg-gray-800 hover:bg-gray-600 active:bg-gray-500 dark:hover:bg-gray-700 dark:active:bg-gray-600",
      className
    )}
    {...props}
  >
    <>
      {title}
      {icon}
    </>
  </button>
);

const SecondaryButton: React.FC<ButtonProps> = ({
  title,
  className,
  icon,
  ...props
}) => (
  <button
    type="button"
    className={classNames(
      commonButtonClassName,
      "text-gray-800  hover:bg-gray-200 active:bg-gray-300 dark:text-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-600 border border-gray-800",
      className
    )}
    {...props}
  >
    <>
      {title}
      {icon}
    </>
  </button>
);

const TextButton: React.FC<ButtonProps> = ({
  title,
  className,
  icon,
  ...props
}) => (
  <button
    type="button"
    className={classNames(
      commonButtonClassName,
      "text-gray-800 dark:text-gray-50",
      className
    )}
    {...props}
  >
    <>
      {title}
      {icon}
    </>
  </button>
);

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  ...props
}) => (
  <button
    type="button"
    className={classNames(
      commonButtonClassName,
      "w-10 text-gray-800 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-50  dark:hover:bg-gray-700 dark:active:bg-gray-600",
      className
    )}
    {...props}
  >
    <>{icon}</>
  </button>
);

export { PrimaryButton, SecondaryButton, TextButton, IconButton };
