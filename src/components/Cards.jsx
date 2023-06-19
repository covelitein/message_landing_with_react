import Scalable from "../assets/CompressedImages/scalable-1.webp";
import Connect from "../assets/CompressedImages/connect.webp";
import Ui from "../assets/CompressedImages/main.webp";

const Cards = () => {
  return (
    <div className="min-h-[40vh] z-50 w-full relative -translate-y-[4rem] flex justify-center max-mf:flex-col mf:-translate-y-[3rem] font-[opensans] max-mf:space-y-4">
      <div className="w-1/3 min-h-[22rem] max-mf:min-h-[13rem] mx-3 flex items-center justify-center max-mf:w-full max-mf:mx-0 px-1">
        <div
          className="w-full min-h-[12rem] bg-white shadow-2xl p-2 rounded-xl max-mf:w-5/6"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <h1 className="text-center text-lg mb-2">SCALABILITY</h1>
          <img
            src={Scalable}
            alt="scalable"
            className="mx-auto text-[rgba(0,0,0,0.7)] h-[5rem]"
          />
          <p className="px-4 text-center text-md text-gray-500 mt-4">
            Our system has great capacity to handle large data
          </p>
        </div>
      </div>
      <div className="w-1/3 min-h-[19rem] max-mf:min-h-[13rem] mx-3 mx-3 max-mf:flex items-center max-mf:mx-0 max-mf:justify-center max-mf:w-full max-mf:mx-0">
        <div
          className="w-full min-h-[12rem] bg-white shadow-2xl p-2 rounded-xl max-mf:w-5/6"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <h1 className="text-center text-lg">CONNECTIVITY</h1>
          <img
            src={Connect}
            alt="connect img"
            className="mx-auto text-[rgba(0,0,0,0.7)] h-[5rem]"
          />
          <p className="px-4 text-center text-md text-gray-500 mt-4">
            Connect with various individuals from around the globe
          </p>
        </div>
      </div>
      <div className="w-1/3 min-h-[19rem] max-mf:min-h-[13rem] mx-3 flex items-center justify-center max-mf:w-full max-mf:mx-0 px-1 ">
        <div
          className="w-full min-h-[12rem] bg-white shadow-2xl p-2 rounded-xl max-mf:w-5/6"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <h1 className="text-center text-lg mb-2">ATTRACTIVE UI</h1>
          <img
            src={Ui}
            alt="attractive ui img"
            className="mx-auto text-[rgba(0,0,0,0.7)] h-[5rem]"
          />
          <p className="px-4 text-center text-md text-gray-500 mt-4">
            User friendly interfaces to enhance your easy usability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
