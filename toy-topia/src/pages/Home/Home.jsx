import PopularToys from "../../components/PopularToys/PopularToys";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div
      className="bg-[#E0F7FA]"
    >
      <Slider></Slider>
      <PopularToys></PopularToys>
    </div>
  );
};

export default Home;
