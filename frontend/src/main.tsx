import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./app/styles/index.pcss";
import { startMSW } from "@/shared/api/lib/browser";
import {isDev} from "@/shared/api/lib/env.ts";
import "./i18n";

async function enableMocking() {

  if (isDev) {
    return startMSW();
  }
  return Promise.resolve();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
