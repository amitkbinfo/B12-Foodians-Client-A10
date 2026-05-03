import React, { useContext } from "react";
import MyLink from "./MyLink";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { ClockLoader } from "react-spinners";
import { toast, Zoom } from "react-toastify";
import logo from "../assets/logo.png";
import { FaGear, FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast(`সাইন-আউট সফল হয়েছে!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      });
  };

  const navLinks = (
    <>
      <MyLink to={"/"}>Home</MyLink>
      <MyLink to={"/all-reviews"}>All Reviews</MyLink>
      <MyLink to={"/add-review"}>Add Review</MyLink>
      <MyLink to={"/my-reviews"}>My Reviews</MyLink>
    </>
  );
  return (
    <div className="shadow-sm bg-[#d1ffe3]">
      <div className="navbar w-11/12 mx-auto px-0">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 gap-3 w-32 p-3 shadow z-5"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img className="h-8" src={logo} alt="" />
            <div>
              <span className="text-[#FB4231]">F</span>
              <span className="text-[#dfce15]">o</span>
              <span className="text-[#5FC209]">o</span>
              <span className="text-[#14a6ce]">d</span>
              <span className="text-[#FC42B4]">i</span>
              <span className="text-[#dfce15]">a</span>
              <span className="text-[#5FC209]">n</span>
              <span className="text-[#14a6ce]">s</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">{navLinks}</div>
        {/* Login/Logout */}
        {loading ? (
          <div className="navbar-end gap-2">
            <ClockLoader size={36} />
            <div className="skeleton btn bg-[#F8F8F8] btn-ghost w-16 h-8 shrink-0"></div>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            {/* {user?.photoURL && (
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt=""
                title={user?.displayName}
              />
            )} */}

            {user ? (
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 border-2 border-gray-300 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      referrerPolicy="no-referrer"
                      //   src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      src=""
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <div className=" pb-3 border-b border-b-gray-200">
                    {/* <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li> */}
                    <li className="text-sm font-bold">{user?.displayName}</li>
                    <li className="text-xs">{user?.email}</li>
                  </div>

                  <li className="mt-3">
                    <Link to={"/add-review"}>Add Review</Link>
                  </li>

                  <li>
                    <Link to={"/my-reviews"}>My Reviews</Link>
                  </li>

                  <input
                  //    onChange={(e)=> handleTheme(e.target.checked)}
                  //    type="checkbox"
                  //    defaultChecked={localStorage.getItem('theme') === "dark"}
                  //    className="toggle"
                  />
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-xs btn-neutral"
                    >
                      <IoLogOut />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm btn-neutral border-none shadow-none hover:btn-success hover:shadow-none hover:text-black"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
