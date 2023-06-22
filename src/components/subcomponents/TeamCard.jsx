import { useState } from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";


const TeamCard = ({ img, name, role }) => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const hide = () => {
    setShow(false);
  };

  return (
    <div className="w-full relative rounded-md">
      <div
        className="w-11/12 mx-auto relative"
        onMouseOver={handleShow}
        onMouseLeave={hide}
      >
        <div
          className={`absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)] transition-all duration-400 ${
            show ? "visible opacity-100" : "invisible opacity-0"
          } flex justify-center items-center text-white text-3xl space-x-3 rounded-md`}
        >
          <FaLinkedin className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
        <img src={img} alt="" className="w-full rounded-md" />
      </div>
      <div className="w-11/12 mx-auto my-2 px-1">
        <h3 className="text-gray-600 capitalize">{name}</h3>
        <h2 className="text-blue-600">{role}</h2>
      </div>
    </div>
  );
}

export default TeamCard
