import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
// import { ROUTES } from "../../utils/constants";
import BlogForm from "../../components/BlogForm";
import DashboardLayout from "../../components/DashboardLayout";
import { ROUTES } from "../utils/constants";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await api.post("/blog/createBlog", formData);
      toast.success("Blog created successfully!");
      navigate(ROUTES.BLOGS.LIST);
    } catch (error) {
      throw new Error(
        error.response?.data?.responseMessage || "Failed to create blog"
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Blog
        </h1>
        <BlogForm onSubmit={handleSubmit} />
      </div>
    </DashboardLayout>
  );
};

export default CreateBlog;
