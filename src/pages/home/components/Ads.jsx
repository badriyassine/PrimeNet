import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ correct import

import banner1 from "/ads/banner1.png";
import banner2 from "/ads/banner2.png";
import banner3 from "/ads/banner3.png";
import banner4 from "/ads/banner4.png";
import banner5 from "/ads/banner5.png";

const slides = [
  {
    image: banner1,
    title: "Ultra Fast Fiber Internet",
    desc: "Enjoy speeds up to 1Gbps with unlimited access, upgrading your online experience to the next level.",
    button: "Discover",
    path: "/wifi", 
  },
  {
    image: banner2,
    title: "High 5G Coverage",
    desc: "Stay connected everywhere with our best plans, offering unlimited data and nationwide coverage.",
    button: "View Plans",
    path: "/mobile",
  },
  {
    image: banner3,
    title: "*6 is Back",
    desc: "Unlimited social media use — chat, scroll, and share. Stay connected on your favorite apps without limits!",
    button: "Get it Now",
    path: "/mobile",
  },
  {
    image: banner4,
    title: "Ultimate Gaming Experience",
    desc: "Stable, lightning-fast ping for lag-free gaming.",
    button: "Subscribe Now",
    path: "/wifi",
  },
  {
    image: banner5,
    title: "VR-Ready Internet",
    desc: "Ultra-fast, stable speeds for immersive VR experiences.",
    button: "Try Now",
    path: "/wifi",
  },
];

const Ads = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-[#073651] rounded-2xl overflow-hidden">
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
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 text-white">

            <h1 className="text-3xl font-bold mb-4">
              {slides[current].title}
            </h1>

            <p className="text-gray-200 mb-6">
              {slides[current].desc}
            </p>

            {/* ✅ BUTTON LINK */}
            <Link to={slides[current].path}>
              <button
                className="
                  bg-white text-[#073651]
                  font-semibold
                  px-7 py-3
                  rounded-full
                  hover:bg-gray-200
                  transition
                  cursor-pointer
                "
              >
                {slides[current].button}
              </button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Ads;