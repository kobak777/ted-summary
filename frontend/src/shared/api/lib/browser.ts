import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import {isDev} from "@/shared/api/lib/env.ts";


export const worker = setupWorker(...handlers);

export async function startMSW() {
  if (isDev) {
    try {
      await worker.start({
        onUnhandledRequest: 'bypass',
        serviceWorker: {
          url: '/mockServiceWorker.js',
        },
      });
      console.log('MSW started successfully');
    } catch (error) {
      console.error('Failed to start MSW:', error);
    }
  }
}
