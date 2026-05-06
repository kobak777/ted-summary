import type { PageContainerProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";

export const PageContainer = ({ children }: PageContainerProps) => {
  const { getCN } = useCN("pageContainer");

  return <div className={getCN()}>{children}</div>;
};