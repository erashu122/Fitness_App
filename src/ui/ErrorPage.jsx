export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50">
      <h1 className="text-6xl font-extrabold text-red-600 animate-bounce">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-500">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}