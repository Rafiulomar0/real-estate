import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ShowLandDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <h1>Land Details</h1>
      <p>Land details will be shown here</p>
    </div>
  );
};

export default ShowLandDetails;
