import React from "react";
import ServiceCard from "./subcomponents/ServiceCard";

const Services = () => {
  return (
    <section className="p-5 mt-32 w-11/12 mx-auto mb-32 max-sd:w-full max-sd:p-3">
      <div className="px-1">
        <h3 className="text-3xl text-gray-700 max-sd:text-lg">
          Explore Our range of services, what we offer.
        </h3>
        <p className="text-sm text-gray-700 my-3 max-sd:text-[0.75rem]">
          Explore Our Comprehensive Range of Services for Unleashing Your
          Potential and Driving Impactful Results
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-11">
        <ServiceCard
          className="w-full"
          data-aos="slide-up"
          data-aos-duration="1000"
          PropclassName={"bg-white rounded-lg shadow-1 p-4 h-[200px]"}
        >
          <h2 className="text-xl font-semibold">Card 1</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </ServiceCard>
        <ServiceCard
          className="w-full"
          data-aos="slide-up"
          data-aos-duration="1000"
          PropclassName={"bg-white rounded-lg shadow-1 p-4 h-[200px]"}
        >
          <h2 className="text-xl font-semibold">Card 2</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </ServiceCard>
        <ServiceCard
          className="w-full"
          data-aos="slide-up"
          data-aos-duration="1000"
          PropclassName={"bg-white rounded-lg shadow-1 p-4 h-[200px]"}
        >
          <h2 className="text-xl font-semibold">Card 3</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </ServiceCard>
        <ServiceCard
          className="w-full"
          data-aos="slide-up"
          data-aos-duration="1000"
          PropclassName={"bg-white rounded-lg shadow-1 p-4 h-[200px]"}
        >
          <h2 className="text-xl font-semibold">Card 4</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </ServiceCard>
        <ServiceCard
          className="w-full"
          data-aos="slide-up"
          data-aos-duration="1000"
          PropclassName={"bg-white rounded-lg shadow-1 p-4 h-[200px]"}
        >
          <h2 className="text-xl font-semibold">Card 5</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </ServiceCard>
        <ServiceCard
          className="w-full"
          data-aos="slide-up"
          data-aos-duration="1000"
          PropclassName={"bg-white rounded-lg shadow-1 p-4 h-[200px]"}
        >
          <h2 className="text-xl font-semibold">Card 6</h2>
          <p className="text-gray-600">Card content goes here.</p>
        </ServiceCard>
      </div>
    </section>
  );
};

export default Services;
