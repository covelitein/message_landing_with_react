import { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";
import useDebounce from "../assets/customHooks/useDebounce";

const Header = () => {
  const [isDue, setDue] = useState(false);

  const updateColor = useDebounce(() => {
    window.addEventListener("scroll", function () {
      if(document.documentElement.scrollTop > 100){
        setDue(true)
      }else{
        setDue(false)
      }
    })
  },100)
  const updateColorOnLoad = useDebounce(()=> {
     window.addEventListener("load", function () {
       if (document.documentElement.scrollTop > 100) {
         setDue(true);
       } else {
         setDue(false);
       }
     });
  },100)

  useEffect(()=>{
    updateColor();
    updateColorOnLoad();

    return () => {
      null;
    };
    
  },[])
    
 


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
        <div className="flex items-center space-x-2 text-[0.9rem] max-sm:hidden"> 
          <Link to={'/login'} className="bg-blue-700 border-[0.1px] border-blue-700 text-white px-3 py-1 rounded-sm">
            Login
          </Link>
          <Link to={'/register'} className="bg-blue-700 border-[0.1px] border-blue-700 text-white px-3 py-1 rounded-sm">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
