import {PageContainer} from "@/shared/ui/pageContainer";
import {Section} from "@/shared/ui/section";
import {Button} from "@/shared/ui/button";

export const PolicyPage = () => {
  return (
    <PageContainer>
      <Section title="Политика конфиденциальности" >

        <p><strong>1. Какие данные собираются</strong><br />
          Только URL видеолекции TED, который вы вводите для суммаризации. Сервис не требует регистрации и не запрашивает личные данные.</p>

        <p><strong>2. Как используются данные</strong><br />
          URL используется для получения расшифровки видео и генерации суммаризации. Данные не сохраняются после обработки.</p>

        <p><strong>3. Передача данных</strong><br />
          Данные не передаются третьим лицам. Расшифровка получается напрямую с официального сайта TED.com.</p>
        <Button type="link" href="/" label="Вернуться на главную" />
      </Section>
    </PageContainer>
  );
};
