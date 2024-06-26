import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import Root from "../layout/Root";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import ShowLandDetails from "../layout/ShowLandDetails/ShowLandDetails";
import Error from "../layout/Error/Error";
import UpdateProfile from "../layout/UpdateProfile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../layout/Profile/Profile";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <ShowLandDetails></ShowLandDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("./data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routers;
