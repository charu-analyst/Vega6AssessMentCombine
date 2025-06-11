import DashboardLayout from "../components/DashboardLayout";
import { Link } from "react-router-dom";
import { ROUTES } from "./utils/constants";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-indigo-800 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                to={ROUTES.BLOGS.CREATE}
                className="block w-full px-4 py-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700 transition duration-150"
              >
                Create New Blog
              </Link>
              <Link
                to={ROUTES.BLOGS.LIST}
                className="block w-full px-4 py-2 bg-white text-indigo-600 border border-indigo-600 text-center rounded-md hover:bg-indigo-50 transition duration-150"
              >
                View All Blogs
              </Link>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-600">No recent activity yet.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
