import { useCN } from "@/shared/lib/useCN/useCN";
import { PageContainer } from "@/shared/ui/pageContainer";
import "../styles.pcss";

export const Footer = () => {
  const { getCN } = useCN("footer");

  return (
    <footer className={getCN()}>
      <PageContainer>
        <div className={getCN("left")}>
          <a href="/" className={getCN("logo")}>
            TED Summary
          </a>
        </div>

        <div className={getCN("right")}>
          <a href="/policy" className={getCN("policy")}>
            Политика конфиденциальности
          </a>
        </div>
      </PageContainer>
    </footer>
  );
};
