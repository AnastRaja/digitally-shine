import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Adroits Digital didn’t just help us market our NFT project—they helped us build a global community. The results were beyond expectations",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Maya Chen",
    role: "Co-Founder, PixelPandas NFT",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "Their AI-driven campaigns increased our conversions by 200%. It felt like they knew our customers better than we did.",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Ankit Malhotra",
    role: "Head of Growth, UrbanLoom Fashion",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "From web design to strategy, they delivered quality and innovation at every step",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Priya Deshmukh ",
    role: "Startup CEO",
  },
  {
    logo: "https://avatar.iran.liara.run/public/boy",
    text:
      "We’re a SaaS bootstrapped to $1 M ARR and needed predictable pipeline. Their LinkedIn ABM cadences booked 43 qualified demos per month—up from 9—and cut sales cycle by 22 days.",
    authorImg: "https://avatar.iran.liara.run/public/boy",
    author: "Rahul Nair",
    role: "Founder & CTO",
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
            Trusted by Innovators & <br />
            Game-Changers
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3} // show 2 slides side by side
          slidesPerGroup={1} // move 1 slide at a time
          breakpoints={{
            768: {slidesPerView: 2},
            1024: {slidesPerView: 3},
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-xl flex flex-col justify-start shadow-sm my-10 p-4 h-64 max-h-64 bg-[#151517] testimonial-card">
                {/* Text */}
                <div className="flex items-center  pt-4">
                  <img
                    src={item.authorImg}
                    alt={item.author}
                    className="w-12 h-12 rounded-md object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{item.author}</h4>
                    <p className="text-sm text-gray-500 role">{item.role}</p>
                  </div>
                </div>

                <p className="text-white text-[18px] mb-4 mt-3">{item.text}</p>

                {/* Author */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
