// HeroSlider.jsx
import React, {useEffect, useState} from "react";
import {Volume2, VolumeX} from "lucide-react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import web3 from "../assets/web3marketing.jpg";
import digital from "../assets/digital.jpg";
import ai from "../assets/ai.jpg";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);

  const totalSlides = 3; // Update this when you add more slides

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(id);
  }, [totalSlides]);

  return (
    <div className="relative w-full min-h-screen md:h-[85vh] overflow-hidden">
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 0 ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
      >
        <img src={web3} alt="Slide 1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-6 md:px-20 pb-48 ">
          <div className="container">
            <h1 className="text-white text-3xl md:text-7xl font-bold heading-hero">
              Web3 Marketing <br />
              Services
            </h1>
            <p className="text-2xl">From <strong>NFTs to Metaverse and Blockchain growth</strong>, <br/> we build decentralized strategies that connect communities and create influence.
</p>
            <button className="mt-4 px-6 py-3 flex justify-between rounded-lg  transition hero-button w-fit">
              Book a Free Discovery Call <ArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 1 ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
      >
        <img
          src={digital}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-6 md:px-20 pb-48">
          <div className="container">
            <h1 className="text-white text-3xl md:text-7xl font-bold heading-hero">
              Digital Marketing <br />
              Services
            </h1>
              <p className="text-2xl">We don't just follow trends; we create them. <br/>Get a<strong> digital marketing strategy</strong> that connects, converts, and dominates your market.
</p>
            <button className="mt-4 px-6 py-3 flex justify-between rounded-lg  transition hero-button">
              Launch Your Digital Legacy <ArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 2 ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
      >
        <img src={ai} alt="Slide 3" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start px-6 md:px-20 pb-48">
          <div className="container">
            <h1 className="text-white text-3xl md:text-7xl font-bold heading-hero">
              Ai Marketing <br />
              Services
            </h1>
             <p className="text-2xl">AI, On Your Side. Stop guessing, start knowing.Leverage AI marketing <br/>to hyper-personalize campaigns,  predict customer behavior, and maximize your ROI.
</p>
            <button className="mt-4 px-6 py-3 flex justify-between rounded-lg  transition hero-button">
             Book Free Consultation
 <ArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>

      {/* --- Indicators & mute button --- */}
      <div className="absolute bottom-6 right-6 z-50">
        <div className="flex items-center gap-3 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
          {/* Indicators */}
          <div className="flex gap-3 items-center">
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
          </div>

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
