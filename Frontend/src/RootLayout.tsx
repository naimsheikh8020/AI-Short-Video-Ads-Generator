import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function RootLayout() {
  const isHome = useLocation().pathname === "/";

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen flex flex-col max-w-6xl mx-auto ${
          isHome ? "" : "pt-28"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}