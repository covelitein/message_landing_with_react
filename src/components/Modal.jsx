import Google from "../assets/CompressedImages/google.webp"
import Github from "../assets/CompressedImages/github.webp"
import Linkedin from "../assets/CompressedImages/linkedin.webp"
import Whatsapp from "../assets/CompressedImages/whatsapp.webp"
import RoutesImg from "../assets/CompressedImages/routes.webp";
import { FaTimes } from "react-icons/fa"
import {setGlobalState,useGlobalState} from "../store/store.js"

const Modal = () => {
  const [opacity] = useGlobalState("AddToursModalOpacity")
  const [visibility] = useGlobalState("AddToursVisibility")
  const [translate] = useGlobalState("AddTourModalTranslate")


  const closeModal = () => {
    setGlobalState("AddToursModalOpacity", "opacity-0")
    setGlobalState("AddToursVisibility", "invisible")
    setGlobalState("AddTourModalTranslate", "-translate-y-5")
  }

  return visibility == 'visible' ? (
    <div
      className={`fixed transition-all duration-200 h-full w-full top-0 left-0 z-[1000] flex justify-center items-center px-5 ${visibility} ${opacity}`}
    >
      <div
        className="absolute h-full w-full bg-[rgba(0,0,0,0.7)]"
        onClick={closeModal}
      ></div>
      <div
        className={`h-96 bg-[#fff] w-[45rem]  transition-all duration-200 rounded-2xl flex relative ${translate}`}
      >
        <FaTimes
          className="absolute cursor-pointer right-4 top-2 text-3xl text-[rgba(0,0,0,0.8)]"
          onClick={closeModal}
        />
        <img
          src={RoutesImg}
          alt=""
          className="w-1/3 object-cover rounded-l-2xl h-full"
        />
        <form
          action=""
          className="min-h-[15rem] w-2/3 px-10 py-11 flex flex-col justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-xl text-gray-600 font-bold">STAY IN TOUCH</h1>
          <p className="text-sm text-blue-900">Never miss an update!</p>
          <input
            type="text"
            className="w-full my-2 bg-[transparent] p-1 border-b border-1 border-gray-700 focus:outline-none focus:shadow-outline placeholder-gray-700"
            placeholder="Enter name..."
          />
          <input
            type="text"
            className="w-full my-2 bg-[transparent] p-1  border-b border-1 border-gray-700 focus:outline-none focus:shadow-outline placeholder-gray-700"
            placeholder="Enter email..."
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="w-full border-[0.4px] rounded-b-xl border-gray-700 focus:outline-none focus:shadow-outline p-2 placeholder-gray-700"
            placeholder="Enter additional message..."
          ></textarea>
          <button className="my-3 text-white bg-blue-600 hover:bg-blue-900 transition-all duration-200 py-1 px-4 rounded-md w-full focus:ring-0 focus:outline-none">
            Submit
          </button>
          <div className="flex">
            <img src={Google} alt="google" className="h-[1.6rem] mx-3 " />
            <img src={Github} alt="github" className="h-[1.6rem] mx-3 " />
            <img src={Linkedin} alt="linkedIn" className="h-[1.6rem] mx-3 " />
            <img src={Whatsapp} alt="whatsapp" className="h-[1.6rem] mx-3 " />
          </div>
        </form>
      </div>
    </div>
  ) : null
}

export default Modal
