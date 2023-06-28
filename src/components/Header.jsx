import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";
import {
  useDebounce,
  useScrollListener,
  useLoadListener,
} from "../assets/customHooks";
import { HamburgerIcon, HamburgerMenu } from "./subcomponents"

const Header = () => {
  const [isDue, setDue] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleClick = useDebounce(() => {
    setToggled(!toggled);
  },100)
  

  const handleScroll = useCallback(() => {
    window.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 100) {
        setDue(true);
      } else {
        setDue(false);
      }
    });
  }, []);

  const handleLoad = useCallback(() => {
    window.addEventListener("load", function () {
      if (document.documentElement.scrollTop > 100) {
        setDue(true);
      } else {
        setDue(false);
      }
    });
  }, []);

  const updateColor = useDebounce(handleScroll, 100);
  const updateColorOnLoad = handleLoad

  useScrollListener(updateColor);
  useLoadListener(updateColorOnLoad);

  return (
    <nav
      className={`py-1 px-2 fixed top-0 w-full z-[100] ${
        isDue ? "bg-white shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className={`max-w-6xl mx-auto flex items-center justify-between `}>
        <div className="flex items-center">
          <RiMessage2Fill className="text-5xl text-blue-600" />
          <h3 className="font-[bellota] text-xl bg-gradient-to-l from-blue-700 to-blue-400 font-[1000] text-gradient">
            ML
          </h3>
        </div>
        <ul
          className={`flex items-center font-light max-lg:hidden space-x-7 text-[0.9rem] ${
            isDue ? "text-black" : "text-white"
          }`}
        >
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="#about">About</Link>
          </li>
          <li className="">
            <Link to="#services">
              Services
            </Link>
          </li>
          <li className="">
            <Link to="#faq">
              Faq
            </Link>
          </li>
          <li className="">
            <Link to="#testimonial">
              Testimonial
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 text-[0.9rem] max-sm:hidden max-lg:order-3">
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
        <div className="relative lg:hidden max-lg:order-2 sm:ml-[20rem]">
          <HamburgerIcon
            className="menu-icon  relative"
            backgroundColor={`${isDue ? "#444" : "#fff"}`}
            toggle={handleClick}
            toggled={toggled}
          />
          <HamburgerMenu
            className={`top-[3rem] left-[-9rem] duration-300 transition-all p-3 w-[12rem] shadow-1 rounded-md ${
              toggled
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 translate-y-2"
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
