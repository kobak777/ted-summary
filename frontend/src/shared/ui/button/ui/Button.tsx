import type { ButtonProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";

export const Button = (props: ButtonProps) => {
  const { getCN } = useCN("button");
  const { label, children, onClick, href, type = "button", className } = props;
  const content = label || children;

  if (type === "link" && href) {
    return (
      <a className={getCN("", { link: true })} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getCN("", {}, className ? [className] : [])}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
