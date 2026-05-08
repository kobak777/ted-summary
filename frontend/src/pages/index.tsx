import { useTranslation } from "react-i18next";
import { PageContainer } from "@/shared/ui/pageContainer/ui/PageContainer";
import { Section } from "@/shared/ui/section/ui/Section";
import { useCN } from "@/shared/lib/useCN/useCN";

const links = [
  { href: "/home", labelKey: "indexPage.links.home" },
  { href: "/policy", labelKey: "indexPage.links.policy" },
  { href: "/typo", labelKey: "indexPage.links.typo" },
  { href: "/error", labelKey: "indexPage.links.error" }
];

export const IndexPage = () => {
  const { t } = useTranslation();
  const { getCN } = useCN("indexPage");

  return (
    <PageContainer>
      <Section title={t("indexPage.title")}>
        <ul className={getCN("list")}>
          {links.map(({ href, labelKey }) => (
            <li key={href} className={getCN("item")}>
              <a className={getCN("link")} href={href}>
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </PageContainer>
  );
};
