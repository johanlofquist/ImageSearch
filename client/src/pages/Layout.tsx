import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { PageTitle } from "../components/PageTitle";

export const Layout = () => {
  return (
    <div className="h-full bg-gradient-to-b from-violet-700 to-violet-500 font-sans text-2xl">
      <header className="h-[30dvh]">
        <PageTitle />
      </header>

      <main className="h-[60dvh]">
        <Outlet />
      </main>
      <footer className="h-[10dvh]">
        <Footer />
      </footer>
    </div>
  );
};
