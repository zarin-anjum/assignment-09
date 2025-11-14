import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-100">
        <Helmet>
          <title>ToyTopia – Home</title>
        </Helmet>
        <img src="/assets/App-Error.png" alt="Error" className="w-88 h-88" />
        <h2 className="text-4xl font-bold mb-4 text-gray-800 mt-4">Oops!</h2>
        <p className="text-lg text-gray-600 mb-4">
          {error?.statusText ||
            "The page you are looking for is not available."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg font-semibold hover:bg-[#00b378] transition"
        >
          Go Back!
        </button>
        <p className="text-gray-500 mt-2">
          Redirecting to home in 5 seconds...
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
