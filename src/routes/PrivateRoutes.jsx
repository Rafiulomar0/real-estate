import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoutes.proptypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
