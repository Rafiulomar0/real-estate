import { useLoaderData } from "react-router-dom";

const ShowLandDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Land Details</h1>
      <p>Land details will be shown here</p>
    </div>
  );
};

export default ShowLandDetails;
