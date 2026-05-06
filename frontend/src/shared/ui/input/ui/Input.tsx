import type { InputProps } from "../config";

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};