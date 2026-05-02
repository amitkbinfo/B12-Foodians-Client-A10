import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import {
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-neutral text-neutral-content p-10 md:p-20">
      <footer className="footer sm:footer-horizontal md:footer-vertical flex flex-col md:flex-row justify-around items-center md:items-start">
        {/* Brand */}
        <div className="flex-1 text-center md:text-start flex flex-col items-center md:items-start">
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
          <p className=" text-gray-300">
            Discover what your neighborhood is craving. <br /> Explore local
            flavors like never before.
          </p>
        </div>
        {/* Terms */}
        <div className="flex-1 flex justify-between gap-20 md:justify-around">
          <nav className="flex flex-col gap-3">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav className="flex flex-col gap-3">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        {/* Social */}
        <nav className="flex-1">
          <div>
            <div>
              <h6 className="footer-title">Subscribe Our Newsletter</h6>
              <fieldset className="w-80">
                <div className="join">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered join-item placeholder:text-gray-400 text-black"
                  />
                  <button className="btn btn-neutral border-green-700 text-green-700 join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center w-full  mt-2">
            <h6 className="footer-title">Social</h6>
            <div className="flex gap-5 text-2xl">
              <a className="cursor-pointer">
                <FaFacebook />
              </a>
              <a className="cursor-pointer">
                <FaXTwitter />
              </a>
              <a className="cursor-pointer">
                <BsLinkedin />
              </a>
              <a className="cursor-pointer">
                <FaYoutube />
              </a>
              <a className="cursor-pointer">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <hr className="w-full text-gray-500 my-10" />
      <small className="flex justify-center w-full text-xs md:text-sm">
        <Link to="/" className="text-xm text-center">
          <span className="text-[#FB4231]">F</span>
          <span className="text-[#dfce15]">o</span>
          <span className="text-[#5FC209]">o</span>
          <span className="text-[#14a6ce]">d</span>
          <span className="text-[#FC42B4]">i</span>
          <span className="text-[#dfce15]">a</span>
          <span className="text-[#5FC209]">n</span>
          <span className="text-[#14a6ce]">s</span>
          <span className="text-gray-400">
            {" "}
            - 2026 &copy; All Rights Reserved.
          </span>
        </Link>
      </small>
    </div>
  );
};

export default Footer;
