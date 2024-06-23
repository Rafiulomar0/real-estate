import { useEffect, useState } from "react";
import LandItem from "./LandItem/LandItem";

const Lands = () => {
  const [landData, setLandData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLandData(data));
  }, []);
  return (
    <div className="container mx-auto mb-5">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {landData.map((item) => (
            <LandItem key={item.id} land={item}></LandItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lands;
