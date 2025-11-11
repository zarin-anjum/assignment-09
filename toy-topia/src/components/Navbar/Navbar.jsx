import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-[#A5F3FC] text-[#1E3A8A] shadow-sm px-8 md:px-12 lg:px-20 py-4 lg:py-5">
      <div className="navbar-start flex items-center gap-1">
        <img
          src="/assets/logo.png"
          alt="TOY-TOPIA logo"
          className="w-5 md:w-8 lg:w-14 h-5 md:h-8 lg:h-14"
        />
        <a className="font-bold text-sm md:text-[16px] lg:text-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">TOY_TOPIA</a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-5 font-medium text-sm md:text-[16px] lg:text-lg">
          <li>
            <a className="hover:text-purple-600 hover:underline" onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a className="hover:text-purple-600 hover:underline" onClick={() => navigate("/AllToys")}>All toys</a>
          </li>
          <li>
            <a className="hover:text-purple-600 hover:underline" onClick={() => navigate("/Blog")}>Blog</a>
          </li>
        </ul>
      </div>

      
      <div className="navbar-end flex items-center gap-4">
        <a
          href="https://github.com/zarin-anjum"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]  hover:from-[#9F62F2] hover:to-[#632EE3] font-semibold text-white text-sm md:text-[16px] lg:text-lg rounded-sm"
        >
          Contribute
        </a>

        <div className="dropdown dropdown-end md:hidden">
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
              <a>Home</a>
            </li>
            <li>
              <a>All Toys</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a
                href="https://github.com/zarin-anjum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white text-sm md:text-[16px] lg:text-lg rounded-sm"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar