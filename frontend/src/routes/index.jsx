import Home from "@/pages/Home";
import Login from "@/containers/Login";
import SignUp from "@/containers/SignUp"
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

const routes = [
  {
    path: "/",
    element: <Home />,
    layout: MainLayout,
  },
  {
    path: "/login",
    element: <Login />,
    layout: AuthLayout,
  },
  {
    path: "/signup",
    element: <SignUp />,
    layout: AuthLayout,
  },
];

export default routes;
