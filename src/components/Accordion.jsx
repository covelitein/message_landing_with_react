import React from 'react'
import { useState,useRef } from "react"
import { FaChevronDown } from "react-icons/fa"

const Accordion = ({question,children}) => {
    const [isOpen, setOpen] = useState(false)
    const el = useRef()

    const handleClick = () => {
      if (!isOpen) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
  return (
    <li className='list-none'>
      <div
        className="flex justify-between py-3 border-[0.1px] border-blue-700 px-3 items-center  hover:bg-blue-600 focus:bg-slate-200 duration-300 transition-all cursor-pointer rounded-md my-1 text-blue-700 hover:text-white"
        onClick={handleClick}
      >
        <h2 className="font-[Barlow]  text-xl max-sd:text-[0.9rem]">
          {question}
        </h2>
        <FaChevronDown
          className={`text-lg font-light max-sd:text-[0.8rem] cursor-pointer duration-400 transition-all ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <ul>
        <li
          ref={el}
          className={`duration-400 transition-all overflow-y-hidden text-[0.9rem] px-5 text-justify shadow-inner font-[Barlow] list-none`}
          style={
            isOpen
              ? { maxHeight: el.current.scrollHeight }
              : { maxHeight: "0px" }
          }
        >
          <div className="font-[Noto] py-5 text-black text-sm">{children}</div>
        </li>
      </ul>
    </li>
  );
}

export default Accordion
