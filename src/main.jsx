import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routes";
import AuthProviders from "./providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={routers} />
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
