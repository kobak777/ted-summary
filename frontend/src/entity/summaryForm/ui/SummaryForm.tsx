import { useTranslation } from "react-i18next";
import type { TSummaryForm } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useSummaryForm } from "../lib/useSummaryForm";

import "../styles.pcss";

export const SummaryForm = (props: TSummaryForm) => {
  const { t } = useTranslation();
  const { getCN } = useCN("summaryForm");
  const { url, onUrlChange, onSubmit, isLoading, error: apiError } = props;
  const { validationError, handleSubmit, clearValidationError } = useSummaryForm(onSubmit);

  const displayError = validationError || apiError;

  const onUrlChangeHandler = (value: string) => {
    clearValidationError();
    onUrlChange(value);
  };

  return (
    <form className={getCN()} onSubmit={(e) => handleSubmit(e, url)}>
      <div className={getCN("field")}>
        <Input
          className={getCN("input", {}, ["input"])}
          value={url}
          onChange={onUrlChangeHandler}
          placeholder={t("summary.form.placeholder")}
          isWithClearBtn={true}
        />
        {displayError && (
          <div className={getCN("error")} style={{ color: 'red', marginTop: '8px', fontSize: '14px' }}>
            {displayError}
          </div>
        )}
      </div>
      <Button type="submit" className={getCN("btn", {}, ["button"])}>
        {isLoading ? t("summary.form.buttonLoading") : t("summary.form.button")}
      </Button>
    </form>
  );
};
