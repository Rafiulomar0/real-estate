import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import passValidate from "../../utilities/PasswordValidator";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [openEye, setOpenEye] = useState(false);
  const notify = (statusCode) => {
    const errorMessage = [
      "Successfully registered",
      "Password must contain at least 1 uppercase letter",
      "Password must contain at least 1 lower letter",
      "Password must contain at least 6 characters",
    ];
    toast(errorMessage[statusCode]);
  };

  const handleOpenEye = () => {
    setOpenEye(!openEye);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const displayName = form.get("username");
    const email = form.get("email");
    const photoURL = form.get("photo");
    const password = form.get("password");

    const passworstatus = passValidate(password);
    if (passworstatus !== 0) {
      notify(passworstatus);
      e.target.reset();
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          updateUserProfile({ displayName, photoURL })
            .then(() => {
              notify(passworstatus);
              setTimeout(() => {
                navigate("/");
              }, 3000);
            })
            .catch((error) => notify(error));
        })
        .catch((error) => {
          notify(error);
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-4xl">Register Now</h2>
        <div className="shadow-2xl bg-base-100 rounded-2xl">
          <form className="p-5 w-64 md:w-96 space-y-5" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input
                  type="text"
                  name="username"
                  className="grow"
                  placeholder="Username"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <MdEmail />
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
                <FaLink />
                <input
                  type="text"
                  name="photo"
                  className="grow"
                  placeholder="Photo url"
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
                  to="/login"
                  className="label-text-alt link link-hover text-blue-400"
                >
                  Already have an account? Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
