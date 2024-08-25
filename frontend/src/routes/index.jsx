import Home from "@/pages/Home";
import Login from "@/containers/Login";
import SignUp from "@/containers/SignUp"
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import ServiceChatBox from "@/components/ServiceChatBox";

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
  {
    path: "/services",
    element: <Services />,
    layout: MainLayout,
  },
  {
    path: "/service/:serviceId",
    element: <ServiceDetail />,
    layout: MainLayout,
  },
  {
    path: "/service/chat/:serviceId",
    element: <ServiceChatBox />,
    layout: MainLayout,
  },
];

export default routes;
