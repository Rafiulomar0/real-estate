import { Link } from "react-router-dom";
import { FaUser, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { useState } from "react";

const Register = () => {
  const [openEye, setOpenEye] = useState(false);
  const handleOpenEye = () => {
    setOpenEye(!openEye);
  };

  const handleSbmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const email = form.get("email");
    const photoURL = form.get("photo");
    const password = form.get("password");
    console.log(username, email, photoURL, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-4xl">Register Now</h2>
        <div className="shadow-2xl bg-base-100 rounded-2xl">
          <form className="p-5 w-64 md:w-96 space-y-5" onSubmit={handleSbmit}>
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
                  Already have an Account? Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
