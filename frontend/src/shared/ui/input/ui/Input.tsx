import type { InputProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  const { getCN } = useCN("input");

  return (
    <input
      className={getCN()}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
