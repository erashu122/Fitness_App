import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "Amit Kumar",
    email: "amit@example.com",
    age: 22,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <h1 className="text-2xl font-bold mb-6">⚙️ Settings</h1>

      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">👤 Profile</h2>
        <div className="grid gap-4 max-w-md">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Theme Toggle */}
      <div>
        <h2 className="text-xl font-semibold mb-3">🌗 Theme</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}