import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import banner1 from "/ads/banner1.png";
import banner2 from "/wifiAds/fiber.png";
import logo from "/logo/Dark_logo.png";

const slides = [
  {
    image: banner2,
    title: "Ultimate Gaming Experience",
    desc: "Stable, lightning-fast ping for lag-free gaming. Free installation & 30-day money-back guarantee.",
    button: "Subscribe Now",
    path: "/order",
  },
  {
    image: banner1,
    title: "Ultra Fast Fiber Internet",
    desc: "Enjoy speeds up to 1Gbps with unlimited access, upgrading your online experience to the next level.",
    button: "Get it Now",
    path: "/order",
  },
];

const Ads = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mb-5">
      <div className="bg-[#073651] rounded-xl md:mx-2 sm:mx-2 mx-2 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:h-[420px]">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 h-52 md:h-72 lg:h-full overflow-hidden relative">
            <div
              className="flex h-full transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  className="w-full h-full object-cover shrink-0"
                />
              ))}
            </div>
            {/* Vertical Brand */}
            <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2">
              <span
                className="text-white/80 font-bold text-lg tracking-[0.4em]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                PRIMENET
              </span>
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 text-white relative">
            <h1 className="text-3xl font-bold mb-4">{slides[current].title}</h1>
            <p className="text-gray-200 mb-6">{slides[current].desc}</p>

            {/* LINK BUTTON */}
            <Link to={slides[current].path}>
              <button className="bg-white cursor-pointer text-[#073651] font-semibold px-7 py-3 rounded-full hover:bg-gray-200 transition shadow-lg">
                {slides[current].button}
              </button>
            </Link>

            {/* Decoration lines */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
              <div className="h-[2px] w-16 bg-white/60 rounded-full"></div>

              <div className="h-[2px] w-10 bg-white/40 rounded-full"></div>

              <div className="h-[2px] w-6 bg-white/20 rounded-full"></div>
            </div>

            {/* CLICKABLE DOTS BOTTOM RIGHT */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                    ${current === index ? "bg-white" : "bg-gray-400"}`}
                  onClick={() => setCurrent(index)} // Jump to slide on click
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
