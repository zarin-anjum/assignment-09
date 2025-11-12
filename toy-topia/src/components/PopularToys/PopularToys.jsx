import { useNavigate } from "react-router";

const PopularToys = () => {
  const navigate = useNavigate();

  const toysData = [
    {
      toyId: 1,
      toyName: "Lego Classic Bricks",
      sellerName: "Toys R Us Local",
      sellerEmail: "contact@toysruslocal.com",
      price: 49.99,
      rating: 4.7,
      availableQuantity: 75,
      description:
        "A timeless set of colorful Lego bricks that encourages creativity and problem-solving. Kids can build anything they imagine, from houses to vehicles.",
      pictureURL: "/assets/p1.jpeg",
      subCategory: "Building Blocks",
    },
    {
      toyId: 2,
      toyName: "Mega Bloks First Builders",
      sellerName: "Happy Kids Store",
      sellerEmail: "support@happykidsstore.com",
      price: 34.99,
      rating: 4.5,
      availableQuantity: 60,
      description:
        "Large, easy-to-hold blocks perfect for toddlers. Helps develop hand-eye coordination and motor skills.",
      pictureURL: "/assets/p2.jpeg",
      subCategory: "Building Blocks",
    },
    {
      toyId: 3,
      toyName: "Barbie Dreamhouse Doll",
      sellerName: "PlayWorld",
      sellerEmail: "info@playworld.com",
      price: 89.99,
      rating: 4.8,
      availableQuantity: 40,
      description:
        "Barbie Dreamhouse with three floors, multiple rooms, and accessories for endless pretend play fun.",
      pictureURL: "/assets/p3.jpeg",
      subCategory: "Dolls",
    },
    {
      toyId: 4,
      toyName: "Baby Alive Sweet Spoonfuls",
      sellerName: "ToyBarn",
      sellerEmail: "sales@toybarn.com",
      price: 39.99,
      rating: 4.3,
      availableQuantity: 55,
      description:
        "A nurturing baby doll that lets kids feed, change, and care for their baby with included accessories.",
      pictureURL: "/assets/p4.jpeg",
      subCategory: "Dolls",
    },
    {
      toyId: 5,
      toyName: "Hot Wheels Mega Track Set",
      sellerName: "Speedy Toys",
      sellerEmail: "support@speedytoys.com",
      price: 59.99,
      rating: 4.6,
      availableQuantity: 80,
      description:
        "A massive racing track with loops, jumps, and speed boosters for Hot Wheels enthusiasts.",
      pictureURL: "/assets/p5.jpeg",
      subCategory: "Vehicles",
    },
    {
      toyId: 6,
      toyName: "Remote Control Monster Truck",
      sellerName: "RC Planet",
      sellerEmail: "contact@rcplanet.com",
      price: 45.99,
      rating: 4.4,
      availableQuantity: 65,
      description:
        "Durable off-road RC truck with rechargeable battery and all-terrain tires.",
      pictureURL: "/assets/p6.jpeg",
      subCategory: "Vehicles",
    },
  ];
  return (
    <div className="p-10 md:p-16 lg:p-20 text-center">
      <h1 className="font-bold text-xl text-[#1E3A8A] md:text-3xl lg:text-5xl mb-4">
        Popular Toys
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-[#627382] mb-8">
        Handpicked Popular Toys for Endless Fun and Creativity!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toysData.map((toy) => (
          <div
            key={toy.toyId}
            className="rounded-lg shadow hover:shadow-xl p-4 bg-white cursor-pointer"
            onClick={() => navigate(`/toy/${toy.toyId}`)}
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="mx-auto mb-4 border-2 border-[#00B48D] rounded-md h-48 object-cover"
            />
            <h2 className="font-medium text-xl mb-2">{toy.toyName}</h2>
            <p className="text-gray-700 mb-1">Price: ${toy.price}</p>
            <p className="text-gray-700 mb-1">Rating: {toy.rating}</p>
            <p className="text-gray-700 mb-1">
              Available: {toy.availableQuantity}
            </p>
            <button
              className="btn bg-linear-to-r from-[#00D390] to-[#00B48D] text-[#ffffff] mt-3 w-full rounded-xl hover:from-[#00B48D] hover:to-[#00976D] hover:shadow-lg transition-colors duration-300"
              onClick={() => navigate(`/toy/${toy.toyId}`)}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          onClick={() => navigate("/AllToys")}
        >
          Show All Toys
        </button>
      </div>
    </div>
  );
};

export default PopularToys;
