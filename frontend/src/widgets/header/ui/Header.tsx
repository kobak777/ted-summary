import { useTranslation } from "react-i18next";
import { useCN } from "@/shared/lib/useCN/useCN";
import { PageContainer } from "@/shared/ui/pageContainer";
import { LanguageSwitcher } from "@/features/languageSwitcher";
import "../styles.pcss";

export const Header = () => {
  const { t } = useTranslation();
  const { getCN } = useCN("header");

  return (
    <header className={getCN()}>
      <PageContainer>
        <div className={getCN("left")}>
          <a href="/" className={getCN("logo")}>
            {t("header.logo")}
          </a>
        </div>

        <div className={getCN("right")}>
          <LanguageSwitcher />
        </div>
      </PageContainer>
    </header>
  );
};
