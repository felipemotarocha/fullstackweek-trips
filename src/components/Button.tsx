import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "outlined" | "danger";
}

function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primaryDarker",
    outlined: "bg-transparent border-2 border-primary text-primary",
    danger: "text-red-500 border-red-500 border hover:bg-red-600 bg-transparent hover:text-white",
  };

  const _className = twMerge(variantClasses[variant], "appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all", className);

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
