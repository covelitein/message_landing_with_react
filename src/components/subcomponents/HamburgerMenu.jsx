import React from 'react'
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ className }) => {
  return (
    <div className={`absolute ${className} bg-white`}>
      <ul
        className={`flex flex-col font-light space-y-4 text-[0.9rem] rounded-md mt-5`}
      >
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/">About</Link>
        </li>
        <li className="">
          <Link className="" to="/profilecard">
            Services
          </Link>
        </li>
        <li className="">
          <Link className="" to="/scroll">
            Faq
          </Link>
        </li>
        <li className="">
          <Link className="" to="/scroll">
            Testimonial
          </Link>
        </li>
      </ul>
      <div className="flex flex-col space-y-4 text-[0.9rem] sm:hidden mt-3">
        <Link
          to={"/login"}
          className="bg-blue-700 border-[0.1px] border-blue-700 text-white px-3 py-1 rounded-sm"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="bg-blue-700 border-[0.1px] border-blue-700 text-white px-3 py-1 rounded-sm"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu
