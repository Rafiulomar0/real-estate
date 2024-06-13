import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-12">
      <h2 className="text-6xl text-lime-900 font-bold">404 Not Found</h2>
      <Link to="/" className="btn btn-success text-md text-white">
        Go to Home page
      </Link>
    </div>
  );
};

export default Error;
