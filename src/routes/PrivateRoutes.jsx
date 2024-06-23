import { useContext } from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> 20ff82cb89c17155ed3b28262a24091958f66b27
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

<<<<<<< HEAD
=======
PrivateRoutes.proptypes = {
  children: PropTypes.node.isRequired,
};

>>>>>>> 20ff82cb89c17155ed3b28262a24091958f66b27
export default PrivateRoutes;
