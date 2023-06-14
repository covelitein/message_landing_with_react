import AboutImg from '../assets/CompressedImages/about2.webp'
import AboutImg2 from '../assets/CompressedImages/aboutImg.webp'
import LazyLoad from "react-lazy-load";
import { RiBriefcaseLine } from "react-icons/ri";
import { RiLightbulbLine } from "react-icons/ri";
import { RiShieldLine } from "react-icons/ri";
import { RiCustomerServiceLine } from "react-icons/ri";

const About = () => {
  return (
    <section className="px-2 my-11">
      <main className="flex mx-auto w-11/12">
        <div className="flex-1 px-11">
          <div className="p-3">
            <h3 className="text-3xl text-gray-700">
              Discover who we are and what we aim to achieve
            </h3>
          </div>
          <div className="pl-4 text-sm text-gray-600 pr-3">
            Unleashing Potential, Driving Impact, Achieving Excellence Together
          </div>
          <div
            className="flex flex-col space-y-8 justify-center p-3 mt-5"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <div
              className="flex items-center space-x-3  p-2"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <RiBriefcaseLine className="text-4xl bg-blue-600 text-white p-1 rounded-md" />
              <span className="text-gray-600">Experienced professionals</span>
            </div>
            <div
              className="flex items-center space-x-3 p-2"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <RiLightbulbLine className="text-4xl bg-blue-600 text-white p-1 rounded-md" />
              <span className="text-gray-600">Innovative solutions</span>
            </div>
            <div
              className="flex items-center space-x-3 p-2"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <RiShieldLine className="text-4xl bg-blue-600 text-white p-1 rounded-md" />
              <span className="text-gray-600">Data security and privacy</span>
            </div>
            <div
              className="flex items-center space-x-3 p-2"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <RiCustomerServiceLine className="text-4xl bg-blue-600 text-white p-1 rounded-md" />
              <span className="text-gray-600">Customer support</span>
            </div>
          </div>
        </div>
        <div className="w-[55%] px-16 pt-7">
          <div
            className="w-4/5 h-[30rem] bg-blue-800 rounded-xl mx-auto relative"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <LazyLoad
              height={300}
              width={400}
              threshold={0.95}
              className="absolute top-0 left-0 -rotate-[8deg]"
            >
              <picture>
                <source
                  srcSet={AboutImg}
                  type="image/jpeg"
                  className="h-[30rem] rounded-xl"
                />
                <img
                  src={AboutImg}
                  alt="About"
                  className="h-[30rem] rounded-xl w-11/12 object-cover "
                />
              </picture>
            </LazyLoad>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About
