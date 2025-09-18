import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import kmedit from "../assets/testi/KM-EDIT.png";
import infograph from "../assets/testi/ifography.png";
import lawblovks from "../assets/testi/lawblovks.png";
import {FaQuoteLeft} from "react-icons/fa";
const testimonials = [
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Adroits Digital helped Infography.in boost visibility and drive higher profits with their smart marketing strategies. They are a team you can truly rely on for growth.",
    authorImg: lawblovks,
    author: "Manoj",
    role: "CEO of Infography.in",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "We’ve partnered with Adroits Digital on several projects, and their expertise in social media posters and handling has always stood out. Their creative approach consistently takes our projects to the next level.",
    authorImg: kmedit,
    author: "Senthil",
    role: "KM Edit",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Adroits Digital has done an outstanding job with the UI, providing timely assistance and delivering the project right on schedule.",
    authorImg: infograph,
    author: "Dhriti Misra",
    role: "Project & Investment Manager, lawblocks.io",
  },
  // {
  //   logo: "https://avatar.iran.liara.run/public/boy",
  //   text:
  //     "We’re a SaaS bootstrapped to $1 M ARR and needed predictable pipeline. Their LinkedIn ABM cadences booked 43 qualified demos per month—up from 9—and cut sales cycle by 22 days.",
  //   authorImg: "https://avatar.iran.liara.run/public/boy",
  //   author: "Rahul Nair",
  //   role: "Founder & CTO",
  // },
  // ➝ Add more testimonials here
];

export default function TestimonialSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Header */}

        <div className="content-about">
          <span>Testimonials</span>
          <h2>
            {" "}
            Trusted by Innovators & <br />
            Game-Changers
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1} // show 2 slides side by side
          slidesPerGroup={1} // move 1 slide at a time
          breakpoints={{
            0: {slidesPerView: 1}, // mobile: 1 slide
            640: {slidesPerView: 2}, // small devices: 2 slides
            768: {slidesPerView: 2}, // tablets: 2 slides
            1024: {slidesPerView: 3}, // desktops: 3 slides
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-xl relative flex flex-col justify-between shadow-sm   p-4  bg-[#151517] testimonial-card">
                {/* Text */}

                <div>
                  <div className="icons_quote">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-white text-[18px] mb-4 mt-3">
                    {item.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center  pt-4">
                  <div className="h-auto flex  items-center gap-3">
                    <img
                      src={item.authorImg}
                      alt={item.author}
                      className=" test-image "
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {item.author}
                      </h4>
                      <p className="text-sm text-gray-500 role">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
