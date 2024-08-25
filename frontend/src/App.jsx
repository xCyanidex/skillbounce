
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@/routes/index";
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


function MainApp() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-dvh">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.layout>{route.element}</route.layout>}
            />
          ))}
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
