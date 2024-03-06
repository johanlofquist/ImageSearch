import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { PageTitle } from "../components/PageTitle";

export const Layout = () => {
  return (
    <div className="h-full bg-gradient-to-b from-violet-500 to-slate-200 font-sans text-2xl">
      <header className="h-[20dvh]">
          <PageTitle />
      </header>

      <main className="h-[70dvh]">
        <Outlet />
      </main>
      <footer className="h-[10dvh]">
        <Footer />
      </footer>
    </div>
  );
};
