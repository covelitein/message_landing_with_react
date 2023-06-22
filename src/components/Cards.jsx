import Scalable from "../assets/CompressedImages/scalable-1.webp";
import Connect from "../assets/CompressedImages/connect.webp";
import Ui from "../assets/CompressedImages/main.webp";
import Attribute from "./subcomponents/Attribute";

const Cards = () => {
  return (
    <div className="min-h-[40vh] z-50 w-full relative -translate-y-[4rem] flex justify-center max-mf:flex-col mf:-translate-y-[3rem] max-mf:space-y-4">
      <Attribute
        attrName={"Scalability"}
        image={Scalable}
        className={
          "w-1/3 min-h-[22rem] max-mf:min-h-[13rem] mx-3 flex items-center justify-center max-mf:w-full max-mf:mx-0 px-1"
        }
        slogan={"Our system has great capacity to handle large data"}
        data-aos="flip-left"
        data-aos-duration="1000"
      />
      
      <Attribute
        attrName={"CONNECTIVITY"}
        image={Connect}
        className={
          "w-1/3 min-h-[19rem] max-mf:min-h-[13rem] mx-3 mx-3 max-mf:flex items-center max-mf:mx-0 max-mf:justify-center max-mf:w-full max-mf:mx-0"
        }
        slogan={"Connect with various individuals from around the globe"}
        data-aos="flip-left"
        data-aos-duration="1000"
      />

      <Attribute
        attrName={"ATTRACTIVE UI"}
        image={Ui}
        className={
          "w-1/3 min-h-[19rem] max-mf:min-h-[13rem] mx-3 flex items-center justify-center max-mf:w-full max-mf:mx-0 px-1"
        }
        slogan={"User friendly interfaces to enhance your easy usability"}
        data-aos="flip-left"
        data-aos-duration="1000"
      />
    </div>
  );
};

export default Cards;
