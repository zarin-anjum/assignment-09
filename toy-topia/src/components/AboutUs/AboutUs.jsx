import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center rounded-2xl gap-10 px-6 md:px-12 bg-white">
        {/* Left Side */}
        <div className="flex-1">
          <img
            src="/assets/logo.png"
            alt="About ToyTopia"
            className="w-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            About{" "}
            <span className="bg-linear-to-r from-[#00D390] to-[#00B48D] text-transparent bg-clip-text">
              ToyTopia
            </span>
          </h2>
          <p className="text-[#627382] text-base md:text-lg leading-relaxed mb-6">
            At ToyTopia, we believe in creating joy through play. Our mission is
            to bring together local toy makers and families, making it easy for
            parents to find creative, safe, and educational toys for their
            children. Every toy on our platform is chosen with love and care to
            inspire imagination and learning.We are committed to making every
            playtime a memorable and enriching experience for kids everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
