import React from "react";

const ChooseUs = () => {
  return (
    <div className="pb-16 bg-[#E0F7FA] text-center">
      <h2 className="font-bold text-xl text-[#1E3A8A] md:text-3xl lg:text-5xl mb-4">
        Why Choose ToyTopia?
      </h2>
      <p className="text-sm md:text-lg lg:text-xl text-[#627382] mb-12">
        Fun, safe, and local toys for every kid!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
        
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl mb-4">🧸</div>
          <h3 className="text-xl font-semibold mb-2">Safe & Quality Toys</h3>
          <p className="text-[#627382] text-sm">
            Only top-quality toys that are safe for kids.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold mb-2">Support Local Sellers</h3>
          <p className="text-[#627382] text-sm">
            Help local toy shops grow and thrive.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl mb-4">📚🎨</div>
          <h3 className="text-xl font-semibold mb-2">Educational & Fun</h3>
          <p className="text-[#627382] text-sm">
            Toys that teach while entertaining.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-[#627382] text-sm">
            Quick and reliable delivery to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
