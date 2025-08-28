// src/ui/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar"; // ✅ sahi path
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet /> {/* ✅ Yahi pe Home, Dashboard, etc render honge */}
      </main>
    </div>
  );
}
