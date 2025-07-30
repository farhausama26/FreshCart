import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
