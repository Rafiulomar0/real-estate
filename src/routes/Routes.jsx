import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import Root from "../layout/Root";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import ShowLandDetails from "../layout/ShowLandDetails/ShowLandDetails";
import Error from "../layout/Error/Error";

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
        element: <div>Update Profile</div>,
      },
      {
        path: "/details/:id",
        element: <ShowLandDetails></ShowLandDetails>,
        loader: ({ params }) =>
          fetch("data.json")
            .then((res) => res.json())
            .then((data) =>
              data.find((item) => item.id === parseInt(params.id))
            ),
      },
    ],
  },
]);

export default routers;
