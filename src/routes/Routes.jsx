import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home/Home";
import Root from "../layout/Root";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default routers;
