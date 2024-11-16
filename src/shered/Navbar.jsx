import { Link, NavLink } from "react-router-dom";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <NavLink to="/Product">
        <p>Product</p>
      </NavLink>
      <NavLink to="/contactus">
        <p>ContactUs</p>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar backdrop-blur-lg  text-black">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Shop</a>
        </div>
        <div className=" hidden lg:flex navbar-center">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
          <Link to='/login' className="btn rounded-lg ">Login</Link>
          <Link to='/register' className="btn rounded-lg ">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
