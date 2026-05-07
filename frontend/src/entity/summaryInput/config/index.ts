export type SummaryFormProps = {
  url: string;
  onUrlChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
};
