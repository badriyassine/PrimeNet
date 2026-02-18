import { useEffect, useState } from "react";

import banner1 from "/ads/banner1.jpg";
import banner2 from "/ads/banner2.jpg";
import banner3 from "/ads/banner3.jpg";
import banner4 from "/ads/banner4.jpg";

const slides = [
  {
    image: banner4,
    title: "fast and reliable internet",
    desc: "Experience seamless connectivity with our high-speed network, perfect for streaming, gaming, and working from home.",
    button: "Learn More",
  },
  {
    image: banner1,
    title: "Ultra Fast Fiber Internet",
    desc: "Enjoy speeds up to 1Gbps with unlimited access, upgrading your online experience to the next level.",
    button: "Discover",
  },
  {
    image: banner2,
    title: "New Mobile Plans",
    desc: "Stay connected everywhere with our best plans, offering unlimited data and nationwide coverage.",
    button: "View Plans",
  },
  {
    image: banner3,
    title: "Special Limited Offer",
    desc: "Subscribe now and get exclusive benefits, including free installation and a 30-day money-back guarantee.",
    button: "Get Offer",
  },
];

const Ads = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto  ">
      <div className="bg-[#073651] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto lg:h-100">
          {/* IMAGE CONTAINER */}
          <div className="w-full lg:w-1/2 h-50 md:h-70 lg:h-full overflow-hidden relative">
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
                  className="w-full h-full object-cover shrink-0"
                  alt=""
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
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10 lg:p-14 text-white">
            <div className="max-w-125">
              <h1
                key={current}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              >
                {slides[current].title}
              </h1>

              <p
                key={current + "desc"}
                className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed"
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
                "
              >
                {slides[current].button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
