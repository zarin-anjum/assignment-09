import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navbar bg-[#A5F3FC] text-[#1E3A8A] shadow-sm px-8 md:px-12 lg:px-20 py-4 lg:py-5">
      <div className="navbar-start flex items-center gap-1">
        <img
          src="/assets/logo.png"
          alt="TOY-TOPIA logo"
          className="w-5 md:w-8 lg:w-16 h-5 md:h-8 lg:h-16"
        />
        <a className="font-bold text-sm md:text-[16px] lg:text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          TOY-TOPIA
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-5 font-medium text-sm md:text-[16px] lg:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-bold"
                  : "hover:text-purple-600 hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AllToys"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-bold"
                  : "hover:text-purple-600 hover:underline"
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyToys"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-bold"
                  : "hover:text-purple-600 hover:underline"
              }
            >
              My Collection
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden md:flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-2">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                src={user.photoURL || "/assets/default-user.png"}
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </div>
            <button
              className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:bg-purple-700 rounded-3xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:bg-purple-700 rounded-3xl"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow font-normal text-sm md:text-[16px] lg:text-lg"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AllToys"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-bold" : ""
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MyToys"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-bold" : ""
                }
              >
                My Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-bold" : ""
                }
              >
                About
              </NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "text-purple-600 font-bold" : ""
                    }
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-purple-600 font-bold" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
