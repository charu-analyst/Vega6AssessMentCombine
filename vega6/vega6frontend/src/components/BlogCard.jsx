import { Link } from "react-router-dom";
import { ROUTES } from "../pages/utils/constants";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {blog.blogImage && (
        <img
          className="w-full h-48 object-cover"
          src={blog.blogImage}
          alt={blog.title}
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`${ROUTES.BLOGS.DETAILS.replace(":id", blog._id)}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Read More
          </Link>
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
