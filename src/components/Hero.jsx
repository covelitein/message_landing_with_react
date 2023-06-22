import { setGlobalState } from "../store/store.js"
import HeroImg from "../assets/CompressedImages/heroImg.webp";

const Hero = () => {

  const openModal = ()=> {
     setGlobalState("AddToursModalOpacity", "opacity-100");
     setGlobalState("AddToursVisibility", "visible");
     setGlobalState("AddTourModalTranslate", "translate-0");
  }

  return (
    <div className="min-h-[60vh] text-white flex justify-center items-center flex-col"
     style={{background:`linear-gradient(to left, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${HeroImg}) fixed no-repeat center/cover`}}
    >
      <h1
        className="text-3xl text-center max-md:text-2xl max-sd:text-lg"
        data-aos="slide-down"
        data-aos-duration="1000"
      >
        CLASSICALLY DESIGNED SYSTEM
      </h1>
      <h2
        className="text-xl text-gray-300 text-center mt-2 max-md:text-lg max-sd:text-[0.9rem]"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        Trusted around the globe
      </h2>
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-900 transition-all duration-200 py-2 px-4 rounded-lg focus:ring-0 focus:outline-none max-sm:text-sm"
        onClick={openModal}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Connect Now
      </button>
    </div>
  );
};

export default Hero;
