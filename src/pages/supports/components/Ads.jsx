import support from "/support/support.png";
import { Link } from "react-router-dom";

import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Ads = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mb-6">
      <div className="bg-[#073651] rounded-2xl overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[420px]">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 h-52 md:h-72 lg:h-full overflow-hidden relative">
            <img
              src={support}
              alt="support"
              className="w-full h-full object-cover"
            />

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
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10 lg:p-14 text-white">
            {/* Decoration lines */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
              <div className="h-[2px] w-16 bg-white/60 rounded-full"></div>

              <div className="h-[2px] w-10 bg-white/40 rounded-full"></div>

              <div className="h-[2px] w-6 bg-white/20 rounded-full"></div>
            </div>

            {/* CONTENT */}
            <div className="max-w-[520px]">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Support Center
              </h1>

              <p className="text-gray-200 mb-6">
                Get help with your PrimeNet internet services, technical issues,
                or account management. Our support team is available 24/7.
              </p>

              {/* SUPPORT CONTACT INFO */}

              <div className="space-y-4 mb-8">
                {/* PHONE */}
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-6 h-6 text-white" />

                  <span>
                    Call Support:
                    <span className="font-semibold ml-2">
                      +212 520 00 00 00
                    </span>
                  </span>
                </div>

                {/* WHATSAPP */}
                <div className="flex items-center gap-3">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />

                  <span>
                    WhatsApp:
                    <span className="font-semibold ml-2">
                      +212 520 00 00 00
                    </span>
                  </span>
                </div>

                {/* FORM */}
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-6 h-6 text-white" />

                  <span>Or send a support request using our contact form</span>
                </div>
              </div>

              {/* BUTTON */}

              <Link to="https://web.whatsapp.com/" target="_blank">
                <button
                  className="
                bg-white
                text-[#073651]
                font-semibold
                px-7
                py-3
                rounded-full
                hover:bg-gray-200
                transition
                shadow-lg
                hover:shadow-xl
                cursor-pointer
                "
                >
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
