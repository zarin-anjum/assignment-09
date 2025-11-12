import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="/assets/slider1.jpg"
          className="w-full h-[400px] lg:h-[500px] object-cover object-center"
          alt="Toy 1"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/assets/slider2.jpg"
          className="w-full h-[400px] lg:h-[500px] object-cover object-center"
          alt="Toy 2"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/assets/slider3.jpg"
          className="w-full h-[400px] lg:h-[500px] object-cover object-center"
          alt="Toy 3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/assets/slider4.jpg"
          className="w-full h-[400px] lg:h-[500px] object-cover object-center"
          alt="Toy 3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="/assets/slider5.jpg"
          className="w-full h-[400px] lg:h-[500px] object-cover object-center"
          alt="Toy 3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src="/assets/slider6.jpg"
          className="w-full h-[400px] lg:h-[500px] object-cover object-center"
          alt="Toy 3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
