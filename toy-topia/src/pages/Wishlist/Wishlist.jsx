import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("toyUser"));

    if (!currentUser || !currentUser.email) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    const wishlistKey = `wishlist_${currentUser.email}`;
    const savedItems = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    setWishlist(savedItems);
    setLoading(false);
  }, []);

  const removeFromWishlist = (toyId) => {
    const currentUser = JSON.parse(localStorage.getItem("toyUser"));

    if (!currentUser) return;

    const wishlistKey = `wishlist_${currentUser.email}`;
    const updatedList = wishlist.filter((t) => t.toyId !== toyId);

    setWishlist(updatedList);
    localStorage.setItem(wishlistKey, JSON.stringify(updatedList));

    toast.success("Toy removed from wishlist!", {
      duration: 2500,
      position: "top-center",
      style: {
        background: "linear-gradient(to right, #FF6B6B, #F56565)",
        color: "#fff",
        fontWeight: "600",
        borderRadius: "12px",
        boxShadow: "0 4px 14px rgba(245, 101, 101, 0.3)",
        padding: "12px 20px",
        textAlign: "center",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#FF6B6B",
      },
    });
  };

  return (
    <div className="bg-[#E0F7FA]">
      <Helmet>
        <title>ToyTopia – Wishlist</title>
      </Helmet>

      {loading && (
        <p className="text-center text-gray-500 mt-20">Loading wishlist...</p>
      )}

      {!loading && wishlist.length === 0 && (
        <p className="text-center text-2xl text-gray-600 p-20">
          Your wishlist is empty.
        </p>
      )}

      {!loading && wishlist.length > 0 && (
        <div className="px-6 md:px-12 lg:px-16 py-10">
          <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
            My Wishlist
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((toy) => (
              <div
                key={toy.toyId}
                className="bg-white border border-[#1E3A8A]/20 shadow-md rounded-xl p-6"
              >
                <img
                  src={toy.pictureURL || "/assets/placeholder.png"}
                  alt={toy.toyName}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow"
                />

                <h2 className="text-xl font-bold text-[#1E3A8A]">
                  {toy.toyName}
                </h2>

                <p className="text-gray-600 mt-1">
                  Price:{" "}
                  <span className="font-semibold text-[#006064]">
                    ${toy.price}
                  </span>
                </p>

                <button
                  onClick={() => removeFromWishlist(toy.toyId)}
                  className="mt-4 w-full py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
