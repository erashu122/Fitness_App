import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-neutral-800 px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-400">
        Fitness App 🏋️
      </Link>

      {/* Menu */}
      <div className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md ${
              isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md ${
              isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
            }`
          }
        >
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}
