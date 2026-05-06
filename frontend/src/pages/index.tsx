import { PageContainer } from "@/shared/ui/pageContainer/ui/PageContainer";
import { Section } from "@/shared/ui/section/ui/Section";
import { useCN } from "@/shared/lib/useCN/useCN";

const links = [
  { label: "Главная (Summary)", href: "/home" },
  { label: "Политика конфиденциальности", href: "/policy" },
  { label: "Типографика (UI kit)", href: "/typo" },
  { label: "Ошибка 404", href: "/error" }
];

export const IndexPage = () => {
  const { getCN } = useCN("indexPage");

  return (
    <PageContainer>
      <Section title="Навигация по проекту TED Summary">
        <ul className={getCN("list")}>
          {links.map(({ href, label }) => (
            <li key={href} className={getCN("item")}>
              <a className={getCN("link")} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </PageContainer>
  );
};
