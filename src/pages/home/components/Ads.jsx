import { useEffect, useState } from "react";

import banner1 from "/ads/banner1.jpg";
import banner2 from "/ads/banner2.jpg";
import banner3 from "/ads/banner3.jpg";
import banner4 from "/ads/banner4.jpg";
import banner5 from "/ads/banner5.jpg";

const slides = [
  {
    image: banner1,
    title: "Ultra Fast Fiber Internet",
    desc: "Enjoy speeds up to 1Gbps with unlimited access, upgrading your online experience to the next level.",
    button: "Discover",
  },
  {
    image: banner2,
    title: "High 5G Coverage",
    desc: "Stay connected everywhere with our best plans, offering unlimited data and nationwide coverage.",
    button: "View Plans",
  },
  {
    image: banner3,
    title: "Star 6 Offer",
     desc: "Unlimited social media use — chat, scroll, and share.\nStay connected on your favorite apps without limits!",
    button: "Learn More",
  },
  {
    image: banner4,
    title: "Ultimate Gaming Experience",
    desc: "Stable, lightning-fast ping for lag-free gaming. Free installation & 30-day money-back guarantee.",
    button: "Get Offer",
  },
  {
    image: banner5,
    title: "VR-Ready Internet",
    desc: "Ultra-fast, stable speeds for immersive VR experiences.",
    button: "Learn More",
  },
];

const Ads = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-[#073651] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[420px]">
          {/* IMAGE CONTAINER */}
          <div className="w-full lg:w-1/2 h-52 md:h-72 lg:h-full overflow-hidden relative">
            {/* SLIDER */}
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover shrink-0"
                />
              ))}
            </div>

            {/* COMPANY NAME VERTICAL */}
            <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 items-center">
              <span
                className="text-white/80 font-bold text-lg tracking-[0.4em]"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                PRIMENET
              </span>
            </div>
          </div>

          {/* TEXT CONTAINER */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10 lg:p-14 text-white overflow-hidden">
            {/* SPEED DECORATION LINES */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 items-end pointer-events-none">
              <div className="h-[2px] w-16 bg-white/60 rounded-full animate-pulse"></div>
              <div className="h-[2px] w-10 bg-white/40 rounded-full animate-pulse delay-100"></div>
              <div className="h-[2px] w-6 bg-white/20 rounded-full animate-pulse delay-200"></div>
            </div>

            {/* CONTENT */}
            <div className="max-w-[520px]">
              <h1
                key={current}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight transition-all duration-500"
              >
                {slides[current].title}
              </h1>

              <p
                key={current + "desc"}
                className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed transition-all duration-500"
              >
                {slides[current].desc}
              </p>

              <button
                key={current + "btn"}
                className="
                  bg-white text-[#073651]
                  font-semibold
                  px-7 py-3
                  rounded-full
                  hover:bg-gray-200
                  transition
                  shadow-lg
                  hover:shadow-xl
                  cursor-pointer
                "
              >
                {slides[current].button}
              </button>
            </div>

            {/* DOTS INDICATOR — BOTTOM RIGHT */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      index === current
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
