export interface SummaryResponse {
  summary: string;
  title?: string;
  status: 'success' | 'error';
  message?: string;
}
