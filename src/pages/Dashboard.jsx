// src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your fitness dashboard! 🚀 Here you’ll track workouts, progress, and AI recommendations.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="p-4 border rounded-lg shadow">🔥 Today’s Workout Plan</div>
        <div className="p-4 border rounded-lg shadow">📈 Progress Chart</div>
        <div className="p-4 border rounded-lg shadow">🤖 AI Recommendations</div>
      </div>
    </div>
  );
}
