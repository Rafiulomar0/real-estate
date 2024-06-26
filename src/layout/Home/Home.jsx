import { Helmet } from "react-helmet-async";
import Lands from "../Lands/Lands";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="divider text-4xl my-12">Land Property</div>
      <Lands></Lands>
    </div>
  );
};

export default Home;
