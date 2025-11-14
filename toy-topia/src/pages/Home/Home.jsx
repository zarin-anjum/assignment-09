import AboutUs from "../../components/AboutUs/AboutUs";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import PopularToys from "../../components/PopularToys/PopularToys";
import Slider from "../../components/Slider/Slider"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <div
      className="bg-[#E0F7FA]"
    >
      <Helmet>
        <title>ToyTopia – Home</title> 
      </Helmet>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <ChooseUs></ChooseUs>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
