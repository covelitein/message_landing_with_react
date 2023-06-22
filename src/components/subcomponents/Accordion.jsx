import React from 'react'
import { useState,useRef } from "react"
import { FaChevronDown } from "react-icons/fa"

const Accordion = ({ question, children, ...props }) => {
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
    <li className='list-none  my-5' {...props}>
      <div
        className="flex justify-between p-4 items-center  focus:bg-slate-200 duration-300 transition-all cursor-pointer rounded-md my-1 bg-[#e6e6fa]"
        onClick={handleClick}
      >
        <h2 className="text-base max-sd:text-[0.9rem]">
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
          className={`duration-400 transition-all overflow-y-hidden text-[0.9rem] px-5 text-justify shadow-inner list-none`}
          style={
            isOpen
              ? { maxHeight: el.current.scrollHeight }
              : { maxHeight: "0px" }
          }
        >
          <div className="py-5 text-black text-sm text-gray-600">{children}</div>
        </li>
      </ul>
    </li>
  );
}

export default Accordion
