import { useState } from "react";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { PageContainer } from "@/shared/ui/pageContainer";
import { Section } from "@/shared/ui/section";

export const HomePage = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState<string | null>(null);

  const handleSubmit = () => {
    setSummary("Test summary for TED video");
  };

  return (
    <PageContainer>
      <Section title="TED Summary Tool">
        <Input
          value={url}
          onChange={setUrl}
          placeholder="Insert TED link"
        />

        <Button onClick={handleSubmit}>
          Generate
        </Button>
      </Section>

      {summary && (
        <Section title="Summary">
          <p>{summary}</p>
        </Section>
      )}
    </PageContainer>
  );
};