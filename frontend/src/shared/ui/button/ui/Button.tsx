import type { ButtonProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";

export const Button = (props: ButtonProps) => {
  const { getCN } = useCN("button");

  const { label, children, variant, ...rest } = props;
  const content = label || children;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = rest as any;

    return (
      <a className={getCN()} href={props.href} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { onClick, type = "button", ...buttonProps } = rest as any;

  return (
    <button
      className={getCN()}
      onClick={onClick}
      type={type}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
