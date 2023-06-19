import { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";
import useThrottleCallBack from "../assets/customHooks/useThrottleCallBack";
import useDebounce from "../assets/customHooks/useDebounce";

const Header = () => {
  const [isDue, setDue] = useState(false);

  const updateColor = useDebounce(() => {
    window.addEventListener("scroll", function () {
      if(document.documentElement.scrollTop > 300){
        setDue(true)
      }else{
        setDue(false)
      }
    })
  },100)
  const updateColorOnLoad = useDebounce(()=> {
     window.addEventListener("load", function () {
       if (document.documentElement.scrollTop > 300) {
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
      <div className={`max-w-5xl mx-auto flex items-center justify-between `}>
        <RiMessage2Fill className="text-5xl text-blue-600" />
        <ul className={`flex items-center font-light max-sm:hidden ${isDue?'text-black':'text-white'}`}>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/">About</Link>
          </li>
          <li className="mx-4">
            <Link
              className="border-2 text-white border-[#0047ab] px-3 py-1 rounded-md bg-[#0047ab] hover:text-blue-500 hover:border-blue-500 hover:bg-transparent transition-all duration-500"
              to="/profilecard"
            >
              View Profile Ui
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
