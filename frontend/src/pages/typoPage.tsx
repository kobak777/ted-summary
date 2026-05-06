import { PageContainer } from "@/shared/ui/pageContainer/ui/PageContainer";
import { Section } from "@/shared/ui/section/ui/Section";
import { useCN } from "@/shared/lib/useCN/useCN";

export const TypoPage = () => {
  const { getCN } = useCN("typoPage");

  return (
    <PageContainer>
     
      <Section title="h1 — Заголовок первого уровня">
        <h1 className={getCN("h1Demo")}>Заголовок H1</h1>
      </Section>

     
      <Section title="h2 — Заголовок второго уровня">
        <h2>Заголовок H2</h2>
      </Section>

    
      <Section title="h3 — Заголовок третьего уровня">
        <h3>Заголовок H3</h3>
      </Section>

     
      <Section title="p — Параграф текста">
        <p>
          Это пример обычного параграфа текста. Он используется для основного
          контента и описаний.
        </p>
      </Section>

  
      <Section title="a — Ссылка">
        <a href="#">Пример ссылки</a>
      </Section>
 
      <Section title="ul / ol — Списки">
        <ul>
          <li>Первый элемент списка</li>
          <li>Второй элемент списка</li>
          <li>Третий элемент списка</li>
        </ul>
      </Section>
 
      <Section title="Комбинированный пример">
        <h2>Заголовок внутри блока</h2>
        <p>
          Здесь идёт текст, который описывает контент внутри секции.
        </p>
        <a href="#">Читать подробнее</a>
      </Section>
    </PageContainer>
  );
};