import { Link } from "react-router-dom";
import Supports from "../home/components/Supports";

export default function Terms() {
  return (
    <section className=" min-h-screen">
      {/* HERO */}

      <div>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 text-lg">
            Please read these terms carefully before using PrimeNet services.
          </p>

          <p className="text-[#27b4e0] text-sm mt-2">
            Last updated: March 2026
          </p>
        </div>
      </div>

      {/* CONTENT */}

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {/* Card */}

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Welcome to PrimeNet. By accessing this website, you agree to
              follow these Terms and Conditions. This platform is created as a
              portfolio demonstration of a telecommunications service.
            </p>
          </div>

          {/* Card */}

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Service Usage
            </h2>

            <p className="text-gray-600 leading-relaxed">
              PrimeNet provides information about internet and telecom services.
              Support forms and features are demonstration only and not
              connected to real backend systems.
            </p>
          </div>

          {/* Card */}

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              User Responsibilities
            </h2>

            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Provide accurate information
              </li>

              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Do not misuse the platform
              </li>

              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Respect website security
              </li>
            </ul>
          </div>

          {/* Card */}

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Privacy Policy
            </h2>

            <p className="text-gray-600">
              This website does not store personal data. All forms are demo
              only.
            </p>
          </div>

          {/* Card */}

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Contact
            </h2>

            <p className="text-gray-600 mb-3">
              For questions, contact our support team:
            </p>

            <p className="text-[#27b4e0] font-semibold">support@primenet.com</p>
          </div>
        </div>

        {/* Back button */}

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-[#27b4e0] hover:bg-[#053750] text-white px-6 py-3 rounded-full font-medium transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Supports />
    </section>
  );
}
