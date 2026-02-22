import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import faq from "./FaqQuestions";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto mb-20 mt-20 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-500 mt-3">
          Everything you need to know about PrimeNet services.
        </p>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
              border border-[#27b4e0]
              rounded-xl
              overflow-hidden
              bg-white
              transition-all duration-300
              hover:shadow-lg
              
              "
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="
                w-full
                flex
                items-center
                justify-between
                p-5
                group
                cursor-pointer
                "
              >
                <div className="flex items-center gap-3">
                  <HelpCircle
                    size={22}
                    className="
                    text-[#27b4e0]
                    group-hover:scale-110
                    transition
                    "
                  />

                  <span className="font-semibold text-gray-700 text-left">
                    {item.question}
                  </span>
                </div>

                <ChevronDown
                  size={22}
                  className={`
                  text-[#27b4e0]
                  transition-all duration-300
                  ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Animated answer effects */}
              <div
                className={`
                grid
                transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
                `}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-gray-600">{item.answer}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
