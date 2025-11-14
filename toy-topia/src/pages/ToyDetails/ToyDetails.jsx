import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";

const ToyDetails = () => {
  const { toyId } = useParams();
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find(
          (item) => String(item.toyId) === String(toyId)
        );

        console.log("Fetched toys:", data);
        console.log("Looking for toyId:", toyId);
        console.log("Found toy:", foundToy);

        setToy(foundToy || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading toy data...", err);
        setToy(null);
        setLoading(false);
      });
  }, [toyId]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-20">Loading toy details...</p>
    );
  }

  if (!toy)
    return <p className="text-center text-gray-500 mt-20">Toy Not Found</p>;

  const formatPrice = (p) =>
    typeof p === "number" ? `$${p.toFixed(2)}` : p ?? "";

  const handleTryNowSubmit = (e) => {
    e.preventDefault();

    if (!nameInput.trim() || !emailInput.trim()) {
      toast.error("⚠️ Please enter both name and email.", {
        duration: 2500,
        position: "top-center",
        style: {
          background: "#fff",
          color: "#1E3A8A",
          fontWeight: "500",
          border: "2px solid #EF4444",
          borderRadius: "12px",
          boxShadow: "0 4px 14px rgba(239, 68, 68, 0.2)",
        },
        iconTheme: {
          primary: "#EF4444",
          secondary: "#fff",
        },
      });
      return;
    }

    toast.success("🎉 Request submitted successfully!", {
      duration: 2500,
      position: "top-center",
      style: {
        background: "linear-gradient(to right, #00B48D, #1E3A8A)",
        color: "#fff",
        fontWeight: "600",
        borderRadius: "12px",
        boxShadow: "0 4px 14px rgba(0, 180, 141, 0.3)",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#00B48D",
      },
    });

    setNameInput("");
    setEmailInput("");
  };

  const addToWishlist = () => {
    if (!user || !user.email) {
      toast.error("You must be logged in to save to wishlist!");
      return;
    }

    const userEmail = user.email;
    const wishlistKey = `wishlist_${userEmail}`;

    const existingWishlist =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];

    if (!existingWishlist.some((item) => item.toyId === toy.toyId)) {
      existingWishlist.push(toy);
      localStorage.setItem(wishlistKey, JSON.stringify(existingWishlist));

      toast.success("Toy saved to your Wishlist!", {
        duration: 2500, 
        position: "top-center",
        style: {
          background: "linear-gradient(to right, #00B48D, #1E3A8A)", 
          color: "#fff",
          fontWeight: "600",
          borderRadius: "12px",
          boxShadow: "0 4px 14px rgba(0, 180, 141, 0.3)", 
          padding: "12px 20px",
          textAlign: "center",
        },
        iconTheme: {
          primary: "#fff", 
          secondary: "#00B48D", 
        },
      });
    } else {
      toast.error("Toy already saved!", {
        duration: 2500,
        position: "top-center",
        style: {
          background: "#FFE3E3",
          color: "#B91C1C",
          fontWeight: "600",
          border: "2px solid #F87171",
          boxShadow: "0 4px 12px rgba(184, 28, 28, 0.3)",
        },
        iconTheme: {
          primary: "#B91C1C",
          secondary: "#FFF",
        },
      });
    }
  };

  return (
    <div className="px-6 md:px-12 lg:px-16 py-10 lg:py-16 bg-[#E0F7FA]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 lg:gap-12 mb-10 bg-white border border-[#1E3A8A]/20 shadow-lg hover:shadow-xl rounded-2xl p-8">
        <img
          src={toy.pictureURL || "/assets/placeholder.png"}
          alt={toy.toyName}
          className="w-full md:w-72 lg:w-[325px] h-64 md:h-72 lg:h-[325px] object-cover border-4 border-[#1E3A8A]/40 rounded shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-2">
            {toy.toyName}
          </h1>

          <p className="text-gray-800 text-base lg:text-lg mb-2">
            Sold by{" "}
            <span className="font-semibold text-[#006064]">
              {toy.sellerName}
            </span>
          </p>

          <p className="text-gray-800 text-lg mb-3">
            Email:{" "}
            <span className="font-medium text-[#006064]">
              {toy.sellerEmail}
            </span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#E0F2F1] rounded-lg p-3 text-center shadow-sm">
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-lg font-bold text-[#1E3A8A]">
                {formatPrice(toy.price)}
              </p>
            </div>

            <div className="bg-[#E0F2F1] rounded-lg p-3 text-center shadow-sm">
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-lg font-bold text-[#1E3A8A]">
                {toy.rating ?? "N/A"}
              </p>
            </div>

            <div className="bg-[#E0F2F1] rounded-lg p-3 text-center shadow-sm">
              <p className="text-sm text-gray-600">Available</p>
              <p className="text-lg font-bold text-[#1E3A8A]">
                {toy.availableQuantity ?? "—"}
              </p>
            </div>

            <div className="bg-[#E0F2F1] rounded-lg p-3 text-center shadow-sm col-span-2 sm:col-span-3">
              <p className="text-sm text-gray-600">Sub-category</p>
              <p className="text-lg font-bold text-[#1E3A8A]">
                {toy.subCategory}
              </p>
            </div>
          </div>

          <button
            onClick={addToWishlist}
            className="mt-6 py-2 px-6 bg-[#1E3A8A] text-white rounded-lg shadow hover:bg-[#142a63] transition w-full sm:w-auto"
          >
            <i class="fa-regular fa-bookmark"></i> Save to Wishlist
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-300 mb-8" />

      {/* Description */}
      <div className="bg-white border border-[#1E3A8A]/20 shadow-lg rounded-2xl p-8 mt-10 hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl text-[#1E3A8A] font-bold mb-4 flex items-center gap-2">
          <span className="h-1 w-6 bg-linear-to-r from-[#00B48D] to-[#1E3A8A] rounded-full"></span>
          Description
        </h2>

        {toy.description ? (
          <p className="text-gray-800 leading-relaxed text-lg">
            {toy.description}
          </p>
        ) : (
          <p className="text-gray-600 italic">No description available.</p>
        )}
      </div>

      {/* Try Now Form */}
      <div className="bg-white border border-[#1E3A8A]/20 shadow-lg rounded-2xl p-8 mt-10 max-w-2xl hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl text-[#1E3A8A] font-bold mb-4 flex items-center gap-2">
          <span className="h-1 w-6 bg-linear-to-r from-[#00B48D] to-[#1E3A8A] rounded-full"></span>
          Try Now
        </h3>

        <form onSubmit={handleTryNowSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600 font-medium mb-1">Name</span>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="px-4 py-2 border border-[#00B48D]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B48D]/60 transition"
              placeholder="Your name"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 font-medium mb-1">
              Email
            </span>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="px-4 py-2 border border-[#00B48D]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B48D]/60 transition"
              placeholder="you@example.com"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-4 py-2 bg-linear-to-r from-[#00B48D] to-[#1E3A8A] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToyDetails;
