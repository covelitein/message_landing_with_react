import React from "react";
import Accordion from "./subcomponents/Accordion";

const Faqs = () => {
  return (
    <section className="mt-32 mb-32 w-11/12 mx-auto">
      <h3 className="sd:text-3xl text-lg">Frequently Asked Questions</h3>
      <h5 className="text-sm mt-1">
        Popular questions we mostly get from our clients
      </h5>
      <main className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3">
        <div className="sd:mt-9 mt-3 ">
          <Accordion
            question={"How do I sign up for this"}
            children={
              "Just go through the connect button, or through the subscribe button, we will send you a message on your email."
            }
            data-aos="slide-up"
            data-aos-duration="1000"
          />
          <Accordion
            question={"How do I sign up for this"}
            children={
              "Just go through the connect button, or through the subscribe button, we will send you a message on your email."
            }
            data-aos="slide-up"
            data-aos-duration="1000"
          />
          <Accordion
            question={"How do I sign up for this"}
            children={
              "Just go through the connect button, or through the subscribe button, we will send you a message on your email."
            }
            data-aos="slide-up"
            data-aos-duration="1000"
          />
        </div>
        <div className="lg:mt-9">
          <Accordion
            question={"How do I sign up for this"}
            children={
              "Just go through the connect button, or through the subscribe button, we will send you a message on your email."
            }
            data-aos="slide-up"
            data-aos-duration="1000"
          />
          <Accordion
            question={"How do I sign up for this"}
            children={
              "Just go through the connect button, or through the subscribe button, we will send you a message on your email."
            }
            data-aos="slide-up"
            data-aos-duration="1000"
          />
          <Accordion
            question={"How do I sign up for this"}
            children={
              "Just go through the connect button, or through the subscribe button, we will send you a message on your email."
            }
            data-aos="slide-up"
            data-aos-duration="1000"
          />
        </div>
      </main>
    </section>
  );
};

export default Faqs;
