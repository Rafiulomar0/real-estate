import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto mt-12 space-y-5">
      <h2 className="text-center text-4xl">Profile</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={user.photoURL} alt="Album" className="w-48" />
        </figure>
        <div className="card-body">
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Account Created: {user.metadata.creationTime}</p>
          <p>Account Created: {user.metadata.lastSignInTime}</p>
          <p
            className={`${
              user.emailVerified ? "text-green-500" : "text-red-500"
            }`}
          >
            Email {user.emailVerified ? "Verified" : "Unverified"}
          </p>
          <div className="card-actions justify-end">
            <Link to="/updateProfile" className="btn btn-primary">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
