import React from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { TestimonialCard } from "./subcomponents";
import { testimony1, testimony2 } from "../assets/CompressedImages";

const Testimonial = () => {
  return (
    <section className="px-3 mt-11 mb-6" id="testimonial">
      <main className="w-11/12 mx-auto max-sd:w-full">
        <h3 className="text-3xl px-2 max-sd:text-lg">
          Top Testimonies By Our Clients
        </h3>
        <h5 className="text-sm px-2 mt-2">what our clients say about us.</h5>

        <div className="grid mf:grid-cols-2 grid-cols-1 gap-3 mt-5">
          <TestimonialCard
            testimony={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos aperiam natus ad voluptatem veritatis dolores excepturi, vel libero accusamus."
            }
            img={testimony1}
            tName={"Leonardo Peres"}
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </TestimonialCard>

          <TestimonialCard
            testimony={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos aperiam natus ad voluptatem veritatis dolores excepturi, vel libero accusamus."
            }
            img={testimony2}
            tName={"Robert Greene"}
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </TestimonialCard>
        </div>
      </main>
    </section>
  );
};

export default Testimonial;
