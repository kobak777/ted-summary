export type TSummaryForm = {
  url: string;
  onUrlChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  error?: string | null;
};
