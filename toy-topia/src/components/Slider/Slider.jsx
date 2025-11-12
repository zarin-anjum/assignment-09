import React from "react";
import { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full overflow-hidden">
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          id={`slide${num}`}
          className={`carousel-item relative w-full ${
            currentSlide === num ? "block" : "hidden"
          }`}
        >
          <img
            src={`/assets/slider${num}.jpg`}
            className="w-full h-[400px] lg:h-[500px] object-cover object-center"
            alt={`Toy ${num}`}
          />
          <div className="absolute inset-0 bg-opacity-60"></div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
