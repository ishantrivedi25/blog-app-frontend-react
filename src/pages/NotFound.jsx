import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-indigo-400">
        404 - Page Not Found
      </h1>
      <p className="text-gray-700 dark:text-gray-200  mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-indigo-400 text-white rounded-lg hover:bg-indigo-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
