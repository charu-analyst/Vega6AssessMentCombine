import { Link } from "react-router-dom";
import { ROUTES } from "./utils/constants";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Vega Blog Platform
      </h1>
      <div className="flex space-x-4">
        <Link
          to={ROUTES.LOGIN}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
        >
          Login
        </Link>
        <Link
          to={ROUTES.SIGNUP}
          className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md border border-indigo-600 hover:bg-indigo-50"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
