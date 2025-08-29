import { useState } from "react";

export default function Nutrition() {
  const [meals, setMeals] = useState([
    {
      id: 1,
      name: "Breakfast",
      items: ["Oats", "Banana", "Almonds"],
      kcal: 350,
    },
    {
      id: 2,
      name: "Lunch",
      items: ["Grilled Chicken", "Rice", "Salad"],
      kcal: 650,
    },
    {
      id: 3,
      name: "Dinner",
      items: ["Paneer", "Roti", "Mixed Veggies"],
      kcal: 500,
    },
  ]);

  const totalCalories = meals.reduce((acc, m) => acc + m.kcal, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🥗 Nutrition</h1>

      {/* Total Calories */}
      <div className="bg-white shadow rounded-xl p-4 text-center">
        <h2 className="text-lg font-semibold">Total Calories Today</h2>
        <p className="text-2xl font-bold text-green-600">{totalCalories} kcal</p>
      </div>

      {/* Meals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <h3 className="font-semibold text-gray-800">{meal.name}</h3>
            <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
              {meal.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm font-medium">🔥 {meal.kcal} kcal</p>
          </div>
        ))}
      </div>

      {/* Add Meal Button */}
      <button
        onClick={() =>
          setMeals([
            ...meals,
            { id: Date.now(), name: "Snack", items: ["Apple"], kcal: 100 },
          ])
        }
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
      >
        ➕ Add Snack
      </button>
    </div>
  );
}