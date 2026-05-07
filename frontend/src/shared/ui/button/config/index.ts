import type { ReactNode } from "react";

export type ButtonProps = {
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "link" | "submit";
  className?: string;
};
