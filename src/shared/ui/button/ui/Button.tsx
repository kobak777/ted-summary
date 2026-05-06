import type { ButtonProps } from "../config";

export const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};