import { useTranslation } from "react-i18next";
import { PageContainer } from "@/shared/ui/pageContainer/ui/PageContainer";
import { Section } from "@/shared/ui/section/ui/Section";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Button } from "@/shared/ui/button";

export const ErrorPage = () => {
  const { t } = useTranslation();
  const { getCN } = useCN("errorPage");

  return (
    <PageContainer>
      <Section title={t("errorPage.title")}>
        <div className={getCN("content")}>
          <p className={getCN("text")}>
            {t("errorPage.text")}
          </p>

          <Button type="link" href="/" label={t("errorPage.button")} />
        </div>
      </Section>
    </PageContainer>
  );
};
