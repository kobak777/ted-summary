import { useTranslation } from "react-i18next";
import { useCN } from "@/shared/lib/useCN/useCN";
import { PageContainer } from "@/shared/ui/pageContainer";
import "../styles.pcss";

export const Footer = () => {
  const { t } = useTranslation();
  const { getCN } = useCN("footer");

  return (
    <footer className={getCN()}>
      <PageContainer>
        <div className={getCN("left")}>
          <a href="/" className={getCN("logo")}>
            {t("footer.logo")}
          </a>
        </div>

        <div className={getCN("right")}>
          <a href="/policy" className={getCN("policy")}>
            {t("footer.policy")}
          </a>
        </div>
      </PageContainer>
    </footer>
  );
};
