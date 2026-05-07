import { PageContainer } from "@/shared/ui/pageContainer/ui/PageContainer";
import { Section } from "@/shared/ui/section/ui/Section";
import { useCN } from "@/shared/lib/useCN/useCN";
import {Button} from "@/shared/ui/button";

export const ErrorPage = () => {
  const { getCN } = useCN("errorPage");

  return (
    <PageContainer>
      <Section title="404 — Страница не найдена">
        <div className={getCN("content")}>
          <p className={getCN("text")}>
            Запрашиваемая страница не существует или была перемещена.
          </p>

          <Button type="link" href="/" label="Вернуться на главную" />
        </div>
      </Section>
    </PageContainer>
  );
};
