import React from 'react'
import {useRef,useEffect,useState} from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'
import useDebounce from '../assets/customHooks/useDebounce'

const PageScrollProgressBar = () => {
    const element = useRef()
    const [ ready,setReady ] = useState(false)

    const progressBar = ()=>{
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.offsetHeight - window.innerHeight;
      const percentage = (scrollPosition / documentHeight) * 100;

      element.current.style.strokeDasharray = `${percentage}, 100`;

    }
    

    const check = useDebounce(()=> {
      if(window.scrollY > 500) {
          setReady(true)
      }else{
        setReady(false)
      }
    },300)

    const scrollToTop = useDebounce(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },500)

    useEffect(()=>{
        window.addEventListener("scroll", progressBar);
        window.addEventListener("load", progressBar);
        window.addEventListener("scroll", check);
        window.addEventListener("load", check);

        return ()=> {
          window.removeEventListener("scroll", progressBar);
          window.removeEventListener("load", progressBar);
          window.removeEventListener("scroll", check);
          window.removeEventListener("load", check);
        }
    },[])

  return (
    <div className="scroll-progress-bar">
      <svg viewBox="0 0 36 36">
        <path
          className="scroll-progress-track"
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="scroll-progress-value"
          ref={element}
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <FaAngleDoubleUp 
      className={`absolute top-[1.1rem] left-[1.1rem] text-2xl text-[#047aed] ${ready?'animate':''}
       cursor-pointer`}
      onClick={scrollToTop}
       />
    </div>
  );
}

export default PageScrollProgressBar
