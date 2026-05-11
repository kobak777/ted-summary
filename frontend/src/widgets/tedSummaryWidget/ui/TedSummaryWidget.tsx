import { useTranslation } from "react-i18next";
import { Section } from "@/shared/ui/section";
import { SummaryForm } from "@/entities/summaryForm";
import { SummaryDisplay } from "@/features/summaryDisplay";
import { useCN } from "@/shared/lib/useCN/useCN";
import "../styles.pcss";
import { useTEDSummary } from "../lib/useTEDSummary";
import { Loader } from "@/shared/ui/loader";

export const TEDSummaryWidget = () => {
  const { t } = useTranslation();
  const { getCN } = useCN("tedSummaryWidget");
  const { url, setUrl, summary, isLoading, apiError, handleSubmit } = useTEDSummary();

  return (
    <>
      <Section title={t("summary.toolTitle")}>
        <SummaryForm
          url={url}
          onUrlChange={setUrl}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={apiError}
        />
      </Section>

      {isLoading && (
        <div className={getCN("loaderWrapper")}>
          <Loader text={t("summary.loader.text")} />
        </div>
      )}

      {summary && !isLoading && (
        <SummaryDisplay
          summary={summary}
          title={t("summary.display.title")}
          onCopy={() => console.log("Summary copied!")}
        />
      )}
    </>
  );
};
