import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faq = [
  {
    question: "How can I subscribe to a PrimeNet plan?",
    answer:
      "You can subscribe online, visit a PrimeNet agency, or contact our customer support.",
  },
  {
    question: "How long does fiber installation take?",
    answer:
      "Installation is completed within 24 to 48 hours depending on your location.",
  },
  {
    question: "How can I top-up my internet?",
    answer:
      "You can instantly top-up using USSD codes, our mobile app, or at PrimeNet agencies.",
  },
  {
    question: "What should I do if my internet is slow?",
    answer:
      "Restart your router first. If the issue continues, contact our technical support.",
  },
  {
    question: "Is SIM or eSIM free?",
    answer: "Yes, SIM and eSIM are free for all new PrimeNet customers.",
  },
  {
    question: "Are there any installation fees?",
    answer:
      "Some offers include free installation. Otherwise, fees will be clearly mentioned.",
  },
  {
    question: "Can I change my plan anytime?",
    answer:
      "Yes, you can upgrade or change your plan anytime from your account or agency.",
  },
  {
    question: "How can I contact PrimeNet support?",
    answer: "You can contact us via WhatsApp, phone, or customer care centers.",
  },
  {
    question: "Is PrimeNet available in my city?",
    answer:
      "PrimeNet is expanding quickly. Contact us to check availability in your area.",
  },
  {
    question: "How long does complaint resolution take?",
    answer: "All complaints are handled within 48 hours maximum.",
  },
];

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

              {/* Answer with animation */}
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
