import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import Root from "../layout/Root";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateProfile",
        element: <div>Update Profile</div>,
      },
    ],
  },
]);

export default routers;
