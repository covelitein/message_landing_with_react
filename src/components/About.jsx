import AboutImg from '../assets/CompressedImages/about2.webp'
import LazyLoad from "react-lazy-load";
import { RiBriefcaseLine } from "react-icons/ri";
import { RiLightbulbLine } from "react-icons/ri";
import { RiShieldLine } from "react-icons/ri";
import { RiCustomerServiceLine } from "react-icons/ri";
import Property from './subcomponents/Property';

const About = () => {
  return (
    <section className="px-2 my-16">
      <main className="flex flex-col lg:flex-row mx-auto w-11/12 max-sd:w-full">
        <div className="lg:w-1/2 px-11 max-md:px-2">
          <div className="sm:p-3">
            <h3 className="text-3xl text-gray-700 max-sd:text-lg">
              Discover who we are and what we aim to achieve
            </h3>
          </div>
          <div className="sm:pl-4 text-sm max-sd:text-[0.75rem] text-gray-600 sm:pr-3">
            Unleashing Potential, Driving Impact, Achieving Excellence Together
          </div>

          <div className="flex flex-col space-y-8 justify-center sm:p-3 mt-5">
            <Property
              icon={
                <RiBriefcaseLine className="text-4xl bg-blue-600 text-white p-1 rounded-md max-sm:text-3xl" />
              }
              propertyName={"Experienced professionals"}
              data-aos="slide-right"
              data-aos-duration="1000"
            />

            <Property
              icon={
                <RiLightbulbLine className="text-4xl bg-blue-600 text-white p-1 rounded-md max-sm:text-3xl" />
              }
              propertyName={"Innovative solutions"}
              data-aos="slide-right"
              data-aos-duration="1000"
            />

            <Property
              icon={
                <RiShieldLine className="text-4xl bg-blue-600 text-white p-1 rounded-md max-sm:text-3xl" />
              }
              propertyName={"Data security and privacy"}
              data-aos="slide-right"
              data-aos-duration="1000"
            />

            <Property
              icon={
                <RiCustomerServiceLine className="text-4xl bg-blue-600 text-white p-1 rounded-md max-sm:text-3xl" />
              }
              propertyName={"Customer support"}
              data-aos="slide-right"
              data-aos-duration="1000"
            />

          </div>
        </div>
        <div className="lg:w-1/2 px-8 pt-7 max-md:px-1 max-lg:mt-5 h-[40rem] lg:h-[30rem] max-sm:h-[25rem] max-sd:h-[20rem]">
          <div
            className="w-full h-full bg-blue-800 rounded-xl mx-auto relative"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <LazyLoad
              height={"100%"}
              width={"100%"}
              threshold={0.95}
              className="lg:-rotate-[8deg] absolute w-full top-0 left-0"
            >
              <img
                src={AboutImg}
                alt="About"
                className="w-full h-full rounded-xl object-cover"
              />
            </LazyLoad>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About