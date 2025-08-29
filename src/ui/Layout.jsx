import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}