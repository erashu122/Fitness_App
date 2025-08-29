import { useState } from "react";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([
    { date: "2025-08-25", name: "Upper Body Strength", minutes: 45, kcal: 380 },
    { date: "2025-08-26", name: "HIIT Cardio", minutes: 30, kcal: 420 },
    { date: "2025-08-27", name: "Yoga Flex", minutes: 25, kcal: 150 },
    { date: "2025-08-28", name: "Leg Day", minutes: 40, kcal: 360 },
  ]);

  const [newWorkout, setNewWorkout] = useState({
    date: "",
    name: "",
    minutes: "",
    kcal: "",
  });

  const handleAddWorkout = (e) => {
    e.preventDefault();
    if (!newWorkout.date || !newWorkout.name) return;

    setWorkouts([...workouts, newWorkout]);
    setNewWorkout({ date: "", name: "", minutes: "", kcal: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
      <h1 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
        🏃 Workouts
      </h1>

      {/* Add Workout Form */}
      <form
        onSubmit={handleAddWorkout}
        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <input
          type="date"
          value={newWorkout.date}
          onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
          className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
          required
        />
        <input
          type="text"
          placeholder="Workout Name"
          value={newWorkout.name}
          onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
          className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
          required
        />
        <input
          type="number"
          placeholder="Minutes"
          value={newWorkout.minutes}
          onChange={(e) => setNewWorkout({ ...newWorkout, minutes: e.target.value })}
          className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
        />
        <input
          type="number"
          placeholder="Calories"
          value={newWorkout.kcal}
          onChange={(e) => setNewWorkout({ ...newWorkout, kcal: e.target.value })}
          className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          type="submit"
          className="col-span-full sm:col-span-2 lg:col-span-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ➕ Add Workout
        </button>
      </form>

      {/* Workouts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-400 border-b">
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Workout</th>
              <th className="py-2 px-4">Minutes</th>
              <th className="py-2 px-4">Calories</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((w, i) => (
              <tr
                key={i}
                className="border-b last:border-0 border-gray-200 dark:border-gray-700"
              >
                <td className="py-2 px-4">{w.date}</td>
                <td className="py-2 px-4">{w.name}</td>
                <td className="py-2 px-4">{w.minutes} min</td>
                <td className="py-2 px-4">{w.kcal} kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}