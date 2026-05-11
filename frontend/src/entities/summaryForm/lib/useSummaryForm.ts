import { useState } from "react";
import * as yup from "yup";
import i18n from "i18next";

const getUrlSchema = () => yup.string()
  .required(i18n.t("summary.validation.urlRequired"))
  .url(i18n.t("summary.validation.invalidUrl"))
  .matches(/ted\.com/, i18n.t("summary.validation.notTED"));

export const useSummaryForm = (onSubmit: () => void) => {
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: React.FormEvent, url: string) => {
    e.preventDefault();
    setValidationError("");

    try {
      const urlSchema = getUrlSchema();
      await urlSchema.validate(url.trim());
      onSubmit();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setValidationError(err.message);
      }
    }
  };

  const clearValidationError = () => {
    setValidationError("");
  };

  return {
    validationError,
    handleSubmit,
    clearValidationError,
  };
};
