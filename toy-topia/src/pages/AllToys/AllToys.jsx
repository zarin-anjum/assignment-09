import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllToys = () => {
  const navigate = useNavigate();
  const [toysData, setToysData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToysData(data))
      .catch((err) => console.error("Error loading toys.json:", err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredToys = toysData.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-center p-10 md:p-14 lg:p-20 bg-[#E0F7FA]">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-[#1E3A8A] mb-4">
        Our All Products
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-[#627382] mb-8">
        Browse all toys available at ToyTopia and find the perfect one for your child!
      </p>
      <div className="flex items-center justify-between mb-6">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl text-gray-700">
          {filteredToys.length} Toys Found
        </p>
        <input
          type="text"
          placeholder="Search Toys"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-sm px-2 py-1 w-1/3 md:w-1/2 lg:w-[400px] focus:outline-none focus:ring-2 focus:ring-[#627382]"
        />
      </div>

      {filteredToys.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredToys.map((toy) => (
            <div
              key={toy.toyId}
              className="rounded-lg shadow hover:shadow-xl p-4 bg-white flex flex-col justify-between h-full border-[#00B48D] border-2"
              onClick={() => navigate(`/toy/${toy.toyId}`)}
            >
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="mx-auto mb-4 border-2  border-[#00B48D] rounded-md"
              />
              <h2 className="font-medium text-xl mb-4">{toy.toyName}</h2>
              <p className="text-gray-700 mb-1">Price: ${toy.price}</p>
              <p className="text-gray-700 mb-1">Rating: {toy.rating}</p>
              <p className="text-gray-700 mb-1">Available: {toy.availableQuantity}</p>
              <button
                className="btn bg-linear-to-r from-[#00D390] to-[#00B48D] text-white mt-3 w-full rounded-xl hover:bg-[#00C48D] transition-colors duration-300"
                onClick={() => navigate(`/toy/${toy.toyId}`)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-gray-700 text-lg mt-10">
          No Toys Found
        </p>
      )}
    </div>
  );
};

export default AllToys;
