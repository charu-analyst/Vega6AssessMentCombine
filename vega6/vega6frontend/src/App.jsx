import { Routes, Route } from "react-router-dom";
// import { ROUTES } from "./utils/constants";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import BlogList from "./pages/blogs/BlogList";
import CreateBlog from "./pages/blogs/CreateBlog";
import BlogDetails from "./pages/blogs/BlogDetails";
import { ROUTES } from "./pages/utils/constants";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.BLOGS.LIST} element={<BlogList />} />
        <Route path={ROUTES.BLOGS.CREATE} element={<CreateBlog />} />
        <Route path={ROUTES.BLOGS.DETAILS} element={<BlogDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
