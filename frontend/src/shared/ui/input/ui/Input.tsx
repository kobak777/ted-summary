import type { InputProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Button } from "@/shared/ui/button";
import "../styles.pcss";

export const Input = ({ value, onChange, placeholder, isWithClearBtn }: InputProps) => {
  const { getCN } = useCN("input");

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={getCN("wrapper")}>
      <input
        className={getCN()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {isWithClearBtn && value && (
        <Button
          className={getCN("clearBtn")}
          onClick={handleClear}
          type="button"
        >
          ✕
        </Button>
      )}
    </div>
  );
};
