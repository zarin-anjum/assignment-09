import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase.config";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!", {
        style: {
          borderRadius: "10px",
          background: "#DCFCE7",
          color: "#166534",
        },
      });

      window.location.href = "https://mail.google.com";
    } catch (error) {
      toast.error("Failed to send reset email.", {
        style: {
          borderRadius: "10px",
          background: "#FEE2E2",
          color: "#B91C1C",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#E0F7FA]">
      <Helmet>
        <title>ToyTopia – Forget Password</title> 
      </Helmet>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              className="w-full border px-3 py-2 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Go back to{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-600 underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
