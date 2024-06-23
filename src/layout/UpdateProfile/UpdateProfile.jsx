import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const tostfy = (message) => toast(message);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const photoURL = form.get("photoURL");

    // update profile
    updateUserProfile({
      displayName,
      photoURL,
    })
      .then(() => {
        e.target.reset();
        tostfy("Profile updated successfully, refresh the page");
      })
      .catch(() => tostfy("Cant update profile, something went wrong"));
  };

  return (
    <div className="mt-5 p-2 flex justify-center items-center w-auto">
      <Helmet>
        <title>Update profile</title>
      </Helmet>
      <div className="card card-compact w-80 flex flex-col">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img
              src={user.photoURL}
              alt="Shoes"
              className="w-auto rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <p className="truncate">{user.photoURL}</p>
          </div>
        </div>
        <form className="space-y-3 mt-12 w-92" onSubmit={handleUpdate}>
          <h3>Update Info</h3>
          <label className="input input-bordered flex items-center gap-2 w-auto">
            Name
            <input
              type="text"
              className="grow"
              placeholder="User name"
              name="name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-auto">
            PhotoURL
            <input
              type="text"
              className="grow"
              placeholder="PhotoURL"
              name="photoURL"
              required
            />
          </label>
          <input
            type="submit"
            value="Update"
            className="btn bg-green-400 w-auto"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
