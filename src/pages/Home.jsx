import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              AI Powered <span className="text-yellow-300">Fitness App</span>
            </h1>
            <p className="text-lg mb-6">
              Your personal AI coach 🏋️ — Get real-time workout & diet plans
              powered by Artificial Intelligence.
            </p>
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition">
              Get Started 🚀
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://img.freepik.com/free-vector/fitness-tracking-app-concept_23-2148534999.jpg"
              alt="Fitness App"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our App? 💪
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Track Progress 📊</h3>
              <p>
                Monitor your daily workouts, calories, and fitness journey in real-time.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">AI Coach 🤖</h3>
              <p>
                Personalized workout & diet recommendations using Artificial Intelligence.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Meal Plans 🥗</h3>
              <p>
                Get healthy diet suggestions tailored to your fitness goals.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2025 AI Fitness App. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Terms</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}