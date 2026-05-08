import { useTranslation } from "react-i18next";
import type { SummaryDisplayProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Section } from "@/shared/ui/section";
import { Button } from "@/shared/ui/button";
import { useCopy  } from "../lib/useCopy";
import { useDownload } from "../lib/useDownload";
import "../styles.pcss";

export const SummaryDisplay = (props: SummaryDisplayProps) => {
  const { t } = useTranslation();
  const { getCN } = useCN("summaryDisplay");
  const { summary, title, onCopy } = props;
  const { copied, handleCopy } = useCopy(summary, onCopy);
  const { downloadAsDocx } = useDownload();

  const displayTitle = title || t("summary.display.title");

  const handleDownload = async () => {
    try {
      await downloadAsDocx(summary, displayTitle);
    } catch (error) {
      console.error("Failed to download DOCX:", error);
    }
  };

  return (
    <Section title={displayTitle}>
      <div className={getCN("container")}>
        <div className={getCN("content")}>
          {summary.split("\n").map((paragraph, index) =>
              paragraph.trim() && (
                <p key={index}>
                  {paragraph}
                </p>
              )
          )}
        </div>

        <div className={getCN("actions")}>
          <Button
            className={getCN("copyButton", { copied })}
            onClick={handleCopy}
            type="button"
          >
            {copied ? t("summary.display.copied") : t("summary.display.copy")}
          </Button>
          <Button
            className={getCN("downloadButton")}
            onClick={handleDownload}
            type="button"
          >
            {t("summary.display.download")}
          </Button>
        </div>
      </div>
    </Section>
  );
};
