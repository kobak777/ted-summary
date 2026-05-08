import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { SummaryResponse } from "../config";

const getApiEndpoint = (language: string) => {
  if (language === 'en') {
    return '/api/summarize/en';
  }
  return '/api/summarize/ru';
};

export const useTEDSummary = () => {
  const { i18n } = useTranslation();
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setApiError(null);
    setSummary(null);

    try {
      const endpoint = getApiEndpoint(i18n.language);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data: SummaryResponse = await response.json();

      if (!response.ok || data.status === 'error') {
        throw new Error(data.message || 'Ошибка при генерации саммари');
      }

      if (data.status === 'success' && data.summary) {
        setSummary(data.summary);
      } else {
        throw new Error('Не удалось получить саммари');
      }
    } catch (err) {
      console.error('Summary generation error:', err);
      setApiError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    url,
    setUrl,
    summary,
    isLoading,
    apiError,
    handleSubmit,
  };
};
