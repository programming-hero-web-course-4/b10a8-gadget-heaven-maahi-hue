import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
const NavBar = () => {
  return (
    <div className="rounded-t-xl bg-[#9538E2]  m-3">
      <div className="navbar  text-white  w-11/12 mx-auto py-3">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#9538E2]"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Statistics</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold ">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-bold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-white p-2 text-black rounded-full mx-2">
            <BsCart3 />
          </a>
          <a className="bg-white p-2 text-black rounded-full ">
            <FiHeart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
