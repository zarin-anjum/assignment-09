import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      navigate(from, { replace: true }); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#E0F7FA]">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Not registered yet?{" "}
          <Link to="/registration" className="text-purple-600 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
