import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  label?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;
