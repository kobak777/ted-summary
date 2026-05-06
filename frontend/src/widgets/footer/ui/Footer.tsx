import { useCN } from "@/shared/lib/useCN/useCN";
 import "../styles.pcss";

export const Footer = () => {
  const { getCN } = useCN("footer");

  return (
    <footer className={getCN()}>
      <div className={getCN("left")}>
        <a href="/" className={getCN("logo")}>
          TED Summary
        </a>
      </div>

      <div className={getCN("right")}>
         <a
           href="/" className={getCN("policy")}
         >
           Политика конфиденциальности
         </a>
      </div>
    </footer>
  );
};
