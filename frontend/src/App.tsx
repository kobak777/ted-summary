import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/router";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};
