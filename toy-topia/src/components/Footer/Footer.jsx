import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#1E3A8A] text-[#FDF6E3] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo.png"
              alt="HERO.IO logo"
              className="w-5 md:w-8 lg:w-10 h-5 md:h-8 lg:h-10 mb-2"
            />
            <h2 className="font-bold text-lg text-white mb-2">ToyTopia</h2>
          </div>
          <p className="font-normal text-[16px] leading-relaxed">
            ToyTopia brings joy and imagination to every child. We connect
            families with local toy makers, offering safe, fun, and educational
            toys that inspire creativity and play.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-xl text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-[16px]">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/AllToys" className="hover:text-white">
                All Toys
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-xl text-white mb-2">Categories</h3>
          <ul className="space-y-2 text-[16px]">
            <li>
              <a href="#" className="hover:text-white">
                Building Blocks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Dolls
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vehicles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Educational Toys
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-xl text-white mb-2">
            Connect With Us
          </h3>
          <ul className="flex items-center gap-4 text-3xl">
            <li>
              <a className="hover:text-[#1877F2]">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C13584]">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1DA1F2]">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF6F61]">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray-100 mt-6"></div>

      <div className="w-full flex justify-center mt-4 lg:mt-0">
        <p className="text-white font-normal text-sm lg:text-[16px]">
          © 2025 ToyTopia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
