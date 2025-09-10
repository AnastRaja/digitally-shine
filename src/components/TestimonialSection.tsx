import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Jobin & Jismi's outstanding project management skills are a unique aspect of their service. What stood out most about Jobin and Jismi was their exceptional commitment to excellence and customer satisfaction. Their level of expertise...",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Anil Malhi",
    role: "Director of Web Development & IT,",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "We have been working with Jobin & Jismi since 2023. What began as a project for customizing our NetSuite Advanced PDF forms has evolved into a full-service development partnership. J&J has extended the functionality of many of...",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Alex Thompson",
    role: "Global Information Technology Director, ",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Their openness, prompt communication, and skilled execution ensured our project was completed smoothly, on time, and within budget. The transition of our site was flawless, with no loss of customer connectivity. Manuals were...",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Steve Pardue",
    role: "Managing Member",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Their openness, prompt communication, and skilled execution ensured our project was completed smoothly, on time, and within budget. The transition of our site was flawless, with no loss of customer connectivity. Manuals were...",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Steve Pardue",
    role: "Managing Member",
  },
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
            Hear from those <br /> who’ve experienced{" "}
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={2} // show 2 slides side by side
          slidesPerGroup={1} // move 1 slide at a time
          breakpoints={{
            768: {slidesPerView: 2},
            1024: {slidesPerView: 2},
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-xl  h-full flex flex-col justify-between shadow-sm my-10">
                {/* Text */}
                <p className="text-white text-[20px] mb-4">{item.text}</p>

                {/* Author */}
                <div className="flex items-center mt-auto pt-4">
                  <img
                    src={item.authorImg}
                    alt={item.author}
                    className="w-12 h-12 rounded-md object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{item.author}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
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
