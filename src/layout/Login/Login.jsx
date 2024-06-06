import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { RiEyeCloseFill, RiEyeFill, RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const tostfy = (message) => toast(message);

const Login = () => {
  const { signIn, user } = useContext(AuthContext);

  const [openEye, setOpenEye] = useState(false);

  const handleOpenEye = () => {
    setOpenEye(!openEye);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // signin
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        {
          user ? tostfy("Already login") : tostfy("Login successful");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-4xl">Login Now</h2>
        <div className="shadow-2xl bg-base-100 rounded-2xl">
          <form className="p-5 w-64 md:w-96 space-y-5" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <MdEmail />
                <span onClick={handleOpenEye} className="sm:hidden">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <RiLockPasswordFill />
                <span onClick={handleOpenEye} className="sm:hidden">
                  {openEye ? <RiEyeFill /> : <RiEyeCloseFill />}
                </span>
                <input
                  type={openEye ? "text" : "password"}
                  className="grow"
                  name="password"
                  placeholder="Password"
                  required
                />
                <span onClick={handleOpenEye} className="hidden sm:flex">
                  {openEye ? <RiEyeFill /> : <RiEyeCloseFill />}
                </span>
              </label>
              <label className="label">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-blue-400"
                >
                  Have no account? Register
                </Link>
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <h3>Login with: </h3>
              <span className="btn btn-gost cursor-pointer">
                <FaGoogle className="text-xl" />
              </span>
              <span className="btn btn-gost cursor-pointer">
                <FaGithub className="text-xl" />
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
