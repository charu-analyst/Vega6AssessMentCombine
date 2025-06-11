import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import api from "../../services/api";
// import { ROUTES } from "../../utils/constants";
import DashboardLayout from "../../components/DashboardLayout";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../utils/constants";
import api from "../services/api";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blog/getBlogById?blogId=${id}`);
        setBlog(response.data.result);
      } catch (error) {
        toast.error("Failed to fetch blog details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await api.put(`/blog/deleteBlog?blogId=${id}`);
        toast.success("Blog deleted successfully");
        navigate(ROUTES.BLOGS.LIST);
      } catch (error) {
        toast.error("Failed to delete blog");
      }
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!blog) {
    return (
      <DashboardLayout>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <Link
            to={ROUTES.BLOGS.LIST}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Back to Blogs
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{blog.title}</h1>
            <p className="text-gray-500 text-sm mt-1">
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
          {user?._id === blog.userId?._id && (
            <div className="flex space-x-2">
              <Link
                to={`${ROUTES.BLOGS.LIST}/edit/${blog._id}`}
                className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {blog.blogImage && (
          <img
            src={blog.blogImage}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
        )}

        <div className="prose max-w-none">
          <p className="whitespace-pre-line">{blog.description}</p>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <Link
            to={ROUTES.BLOGS.LIST}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BlogDetails;
