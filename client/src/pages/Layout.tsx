import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { PageTitle } from "../components/PageTitle";

export const Layout = () => {
  return (
    <>
      <header>
        <PageTitle />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
