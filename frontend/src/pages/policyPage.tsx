import { useTranslation } from "react-i18next";
import { PageContainer } from "@/shared/ui/pageContainer";
import { Section } from "@/shared/ui/section";
import { Button } from "@/shared/ui/button";

export const PolicyPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Section title={t("policy.title")}>
        <p>
          <strong>{t("policy.section1.title")}</strong><br />
          {t("policy.section1.text")}
        </p>

        <p>
          <strong>{t("policy.section2.title")}</strong><br />
          {t("policy.section2.text")}
        </p>

        <p>
          <strong>{t("policy.section3.title")}</strong><br />
          {t("policy.section3.text")}
        </p>

        <Button type="link" href="/" label={t("policy.backButton")} />
      </Section>
    </PageContainer>
  );
};
