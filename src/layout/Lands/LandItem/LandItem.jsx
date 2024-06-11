import PropTypes from "prop-types";
const LandItem = ({ land }) => {
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
  } = land;

  return (
    <div className="card card-compact w-auto m-2 sm:w-96 md:w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={estate_title} className="h-[300px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <div className="flex items-center gap-3">
          <h3 className="bg-orange-100 w-24 rounded-lg text-center text-lime-700 font-bold">
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
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Property</button>
        </div>
      </div>
    </div>
  );
};

LandItem.propTypes = {
  land: PropTypes.object,
};

export default LandItem;
