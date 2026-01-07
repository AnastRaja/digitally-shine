// HeroSlider.jsx
import React, { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import PartnersMarquee from "./PartnersMarquee";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";
import web3 from "../assets/web3marketing.jpg";
import digital from "../assets/digital.jpg";
import ai from "../assets/ai.jpg";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);

  const totalSlides = 1; // Update this when you add more slides

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(id);
  }, [totalSlides]);

  return (
    <div className="relative w-full min-h-screen md:h-[85vh] overflow-hidden heroSlider">
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${current === 0 ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
      >
        <img src={web3} alt="Slide 1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-6 md:px-20 pb-32 left-0 inner_content_hero">
          <div className="container ">
            <div className="flex flex-col gap-6 max-w-3xl sm:w-full">
              <h1 className="text-white text-3xl md:text-7xl font-bold heading-hero">
                Digital Transformation <br />company
              </h1>
              <p className="text-lg max-w-xl sm:w-full ">
                We transform ideas and legacy systems into powerful digital experiences. Our team designs, builds, and scales modern solutions that help businesses move faster, work smarter, and grow sustainably.

              </p>
              <Link to="/contact">
                <button className="mt-4 px-3 py-3 h-[52px] flex justify-between rounded-lg gap-2 items-center transition hero-button">
                  Book a Free Discovery Call <ChevronRight />{" "}
                </button>
              </Link>
              {/* <PartnersMarquee /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      {/* <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 1 ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
      >
        <img
          src={digital}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-6 md:px-20 pb-32 inner_content_hero">
          <div className="container">
            <div className="flex flex-col gap-6 max-w-3xl sm:w-full">
              <h1 className="text-white text-3xl md:text-7xl font-bold heading-hero">
                Digital Marketing <br />
                Services
              </h1>
              <p className="text-lg max-w-xl sm:w-full">
                We don't just follow trends; we create them. Get a
                <strong> digital marketing strategy</strong> that connects,
                converts, and dominates your market.
              </p>
              <Link to="/contact">
                <button className="mt-4 px-3 py-3 h-[52px] flex justify-between rounded-lg gap-2 items-center transition hero-button">
                  Launch Your Digital Legacy <ChevronRight />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Slide 3 */}
      {/* <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 2 ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
      >
        <img src={ai} alt="Slide 3" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-6 md:px-20 pb-32 inner_content_hero">
          <div className="container">
            <div className="flex flex-col gap-6 max-w-3xl sm:w-full">
              <h1 className="text-white text-3xl md:text-7xl font-bold heading-hero">
                Ai Marketing <br />
                Services
              </h1>
              <p className="text-lg max-w-xl sm:w-full">
                AI, On Your Side. Stop guessing, start knowing.Leverage AI
                marketing to hyper-personalize campaigns, predict customer
                behavior, and maximize your ROI.
              </p>
              <Link to="/contact">
                <button className="mt-4 px-3 py-3 h-[52px] flex justify-between rounded-lg gap-2 items-center transition hero-button">
                  Book Free Consultation
                  <ChevronRight />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* --- Indicators & mute button --- */}
      <div className="absolute bottom-6 right-36 z-50 bottom_select">
        <div className="flex items-center gap-3 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
          {/* Indicators */}
          {/* <div className="flex gap-3 items-center">
            <button
              onClick={() => setCurrent(0)}
              className={`transition-all rounded-full ${
                current === 0 ? "w-10 h-2 bg-white" : "w-8 h-[6px] bg-white/40"
              }`}
            />
            <button
              onClick={() => setCurrent(1)}
              className={`transition-all rounded-full ${
                current === 1 ? "w-10 h-2 bg-white" : "w-8 h-[6px] bg-white/40"
              }`}
            />
            <button
              onClick={() => setCurrent(2)}
              className={`transition-all rounded-full ${
                current === 2 ? "w-10 h-2 bg-white" : "w-8 h-[6px] bg-white/40"
              }`}
            />
          </div> */}

          {/* Mute/unmute */}
          {/* <button
            onClick={() => setMuted((m) => !m)}
            className="ml-3 text-white p-1 rounded hover:text-gray-300"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button> */}
        </div>
      </div>
    </div>
  );
}
