import { Link } from "react-router-dom";
import { FaUser, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeCloseFill } from "react-icons/ri";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col">
        <h2 className="text-4xl">Register Now</h2>
        <div className="shadow-2xl bg-base-100 rounded-2xl">
          <form className="p-5 md:w-96 space-y-5">
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input type="text" className="grow" placeholder="Username" />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <MdEmail />
                <input type="email" className="grow" placeholder="Email" />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <FaLink />
                <input type="text" className="grow" placeholder="Photo url" />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <RiLockPasswordFill />
                <input type="text" className="grow" placeholder="Password" />
                <button className="kbd kbd-sm">
                  <RiEyeCloseFill />
                </button>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
