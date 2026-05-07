import { useState } from "react";
import { PageContainer } from "@/shared/ui/pageContainer";
import { Section } from "@/shared/ui/section";
import { SummaryForm } from "@/entity/summaryInput";

export const HomePage = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    setSummary("Test summary for TED video");
    setIsLoading(false);
  };

  return (
    <PageContainer>
      <Section title="TED Summary Tool">
        <SummaryForm
          url={url}
          onUrlChange={setUrl}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </Section>

      {summary && (
        <Section title="Summary">
          <p>{summary}</p>
        </Section>
      )}
    </PageContainer>
  );
};
