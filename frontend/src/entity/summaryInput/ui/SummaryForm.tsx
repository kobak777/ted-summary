import { useState } from "react";
import type { SummaryFormProps } from "../config";
import { useCN } from "@/shared/lib/useCN/useCN";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import * as yup from "yup";
import "../styles.pcss";

const urlSchema = yup.string()
  .required("Введите ссылку на TED видео")
  .url("Введите корректный URL")
  .matches(/ted\.com/, "Ссылка должна быть с ted.com");

export const SummaryForm = (props: SummaryFormProps) => {
  const { getCN } = useCN("summaryForm");
  const { url, onUrlChange, onSubmit, isLoading } = props;
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await urlSchema.validate(url);
      onSubmit();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  return (
    <form className={getCN()} onSubmit={handleSubmit}>
      <div className={getCN("field")}>
        <Input
          className={getCN("input", {}, ["input"])}
          value={url}
          onChange={onUrlChange}
          placeholder="Insert TED link"
        />
        {error && <div className={getCN("error")}>{error}</div>}
      </div>
      <Button type="submit" className={getCN("btn", {}, ["button"])}>
        {isLoading ? "Generating..." : "Generate"}
      </Button>
    </form>
  );
};
