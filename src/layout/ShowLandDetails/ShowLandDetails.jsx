import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ShowLandDetails = () => {
  const { id } = useParams();
  const landId = parseInt(id);
  const landData = useLoaderData();
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = landData[landId - 1];

  return (
    <div>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto my-12">
        <img src={image} alt={estate_title} />
        <div>
          <div className="card-body">
            <h2 className="card-title text-4xl">{estate_title}</h2>
            <div className="flex items-center gap-3">
              <h3 className="bg-orange-100 w-28  rounded-lg text-center text-lime-700 font-bold">
                {segment_name}
              </h3>
              <h3 className="bg-lime-100 w-24 rounded-lg text-center text-lime-700 font-bold">
                {status}
              </h3>
            </div>
            <p>{description}</p>
            <span className="text-md font-bold">Include: </span>
            <ul className="text-md">
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
            <span className="text-md font-bold">Info: </span>
            <span className="text-md">Area: {area} sq feet</span>
            <span className="text-md">Location: {location} sq feet</span>
            <span className="text-md">Price: {price} USD</span>
            <div className="divider"></div>
            <div>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowLandDetails;
