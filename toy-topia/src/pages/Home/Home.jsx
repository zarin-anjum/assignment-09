import AboutUs from "../../components/AboutUs/AboutUs";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import PopularToys from "../../components/PopularToys/PopularToys";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div
      className="bg-[#E0F7FA]"
    >
      <Slider></Slider>
      <PopularToys></PopularToys>
      <ChooseUs></ChooseUs>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
