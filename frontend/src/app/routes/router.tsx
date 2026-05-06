import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/homePage";
import { PolicyPage } from "@/pages/policyPage";
import { ErrorPage } from "@/pages/errorPage";
import { IndexPage } from "@/pages/index";
import { TypoPage } from "@/pages/typoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,  
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/policy",
    element: <PolicyPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/typo",
    element: <TypoPage />,
  },
  
]);