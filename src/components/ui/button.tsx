import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/lib/button-styles";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedButtonProps;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, size, className })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & SharedButtonProps;

export function AnchorButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AnchorButtonProps) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}
