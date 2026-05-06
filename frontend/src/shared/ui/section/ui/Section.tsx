import type { SectionProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";

export const Section = ({ title, children }: SectionProps) => {
  const { getCN } = useCN("section");

  return (
    <section className={getCN()}>
      {title && (
        <div className={getCN("header")}>
          <h2>{title}</h2>
        </div>
      )}

      <div className={getCN("body")}>
        {children}
      </div>
    </section>
  );
};
