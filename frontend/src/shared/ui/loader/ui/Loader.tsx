import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";
import type {LoaderProps} from "../config";

export const Loader = ({  text = "Loading..." }: LoaderProps) => {
  const { getCN } = useCN("loader");

  return (
    <div className={getCN("container")}>
      <div className={getCN("spinner")}></div>
      {text && <p className={getCN("text")}>{text}</p>}
    </div>
  );
};
