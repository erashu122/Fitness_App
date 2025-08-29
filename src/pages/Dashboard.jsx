
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  // ---- Dummy analytics data (frontend-only for now) ----
  const weeklyCalories = [
    { day: "Mon", kcal: 320 },
    { day: "Tue", kcal: 480 },
    { day: "Wed", kcal: 410 },
    { day: "Thu", kcal: 520 },
    { day: "Fri", kcal: 390 },
    { day: "Sat", kcal: 610 },
    { day: "Sun", kcal: 450 },
  ];

  const weeklyMinutes = [
    { day: "Mon", min: 30 },
    { day: "Tue", min: 45 },
    { day: "Wed", min: 40 },
    { day: "Thu", min: 55 },
    { day: "Fri", min: 25 },
    { day: "Sat", min: 60 },
    { day: "Sun", min: 35 },
  ];

  const macros = [
    { name: "Protein", value: 120 },
    { name: "Carbs", value: 220 },
    { name: "Fats", value: 70 },
  ];
  const macroColors = ["#4f46e5", "#f59e0b", "#10b981"]; // indigo / amber / green

  const recentWorkouts = [
    { date: "2025-08-25", name: "Upper Body Strength", minutes: 45, kcal: 380 },
    { date: "2025-08-26", name: "HIIT Cardio", minutes: 30, kcal: 420 },
    { date: "2025-08-27", name: "Yoga Flex", minutes: 25, kcal: 150 },
    { date: "2025-08-28", name: "Leg Day", minutes: 40, kcal: 360 },
  ];

  const goals = [
    { title: "Weekly Workouts", current: 5, target: 6, color: "bg-indigo-600" },
    { title: "Weekly Minutes", current: 265, target: 300, color: "bg-emerald-600" },
    { title: "Calories Burned", current: 3180, target: 3500, color: "bg-amber-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-indigo-700 text-white flex flex-col p-4 transition-all duration-300`}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between mb-6">
          {isOpen && <h2 className="text-xl font-bold">🏋️ FitAI</h2>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded px-2 py-1 bg-indigo-500 hover:bg-indigo-400"
            title="Toggle sidebar"
          >
            {isOpen ? "⬅️" : "➡️"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 text-sm">
          <Link to="/dashboard" className="hover:bg-indigo-600 px-3 py-2 rounded-lg flex items-center">
            📊 {isOpen && <span className="ml-2">Dashboard</span>}
          </Link>
          <Link to="/workouts" className="hover:bg-indigo-600 px-3 py-2 rounded-lg flex items-center">
            🏃 {isOpen && <span className="ml-2">Workouts</span>}
          </Link>
          <Link to="/nutrition" className="hover:bg-indigo-600 px-3 py-2 rounded-lg flex items-center">
            🥗 {isOpen && <span className="ml-2">Nutrition</span>}
          </Link>
          <Link to="/settings" className="hover:bg-indigo-600 px-3 py-2 rounded-lg flex items-center">
            ⚙️ {isOpen && <span className="ml-2">Settings</span>}
          </Link>
        </nav>

        {/* Help / Logout */}
        <div className="mt-auto pt-4 text-xs opacity-80">
          <button className="w-full text-left hover:opacity-100">❓ Help</button>
          <button className="w-full text-left hover:opacity-100 mt-2">🚪 Logout</button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-indigo-700">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, User 👋</p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search workouts…"
              className="hidden md:block border rounded-lg px-3 py-2"
            />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">
          {/* KPI Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Today’s Calories</p>
              <p className="text-3xl font-bold text-indigo-600">610 kcal</p>
              <p className="text-xs text-green-600 mt-1">+12% vs yesterday</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Active Minutes</p>
              <p className="text-3xl font-bold text-emerald-600">60 min</p>
              <p className="text-xs text-emerald-600 mt-1">Goal: 45 min ✅</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Workouts this Week</p>
              <p className="text-3xl font-bold text-pink-600">5</p>
              <p className="text-xs text-gray-500 mt-1">Target: 6</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="text-xs text-gray-500">Weight Progress</p>
              <p className="text-3xl font-bold text-amber-600">-0.6 kg</p>
              <p className="text-xs text-amber-600 mt-1">Past 7 days</p>
            </div>
          </section>

          {/* Charts Row */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Line Chart */}
            <div className="bg-white rounded-xl shadow p-4 lg:col-span-2">
              <h3 className="font-semibold text-gray-800 mb-2">Weekly Calories Burned</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyCalories}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="kcal" stroke="#4f46e5" strokeWidth={3} dot />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Macros (g)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={macros}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={4}
                    >
                      {macros.map((_, i) => (
                        <Cell key={i} fill={macroColors[i % macroColors.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Bar Chart + Goals */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-4 lg:col-span-2">
              <h3 className="font-semibold text-gray-800 mb-2">Active Minutes (Weekly)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyMinutes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="min" fill="#10b981" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Goals Progress</h3>
              <div className="space-y-4">
                {goals.map((g, i) => {
                  const pct = Math.min(100, Math.round((g.current / g.target) * 100));
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{g.title}</span>
                        <span className="text-gray-600">{g.current}/{g.target}</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full ${g.color}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Recent Workouts */}
          <section className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Recent Workouts</h3>
              <button className="text-indigo-600 text-sm hover:underline">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Workout</th>
                    <th className="py-2 pr-4">Minutes</th>
                    <th className="py-2 pr-4">Calories</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWorkouts.map((w, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2 pr-4">{w.date}</td>
                      <td className="py-2 pr-4">{w.name}</td>
                      <td className="py-2 pr-4">{w.minutes} min</td>
                      <td className="py-2 pr-4">{w.kcal} kcal</td>
                      <td className="py-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}