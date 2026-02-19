import { useState } from "react";
import { Link } from "react-router-dom";

export default function Support() {
  const [accepted, setAccepted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subscriptionType: "",
    subscriptionNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accepted) {
      alert("Please accept the terms first.");
      return;
    }

    alert("Demo only — this feature is not functional.");
  };

  return (
    <section className="  from-blue-50 via-white to-white py-16 px-4">

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}

        <div className=" bg-[#27b4e0] p-8">
          <h1 className="text-3xl font-bold text-white">Customer Support</h1>

          <p className="text-blue-100 mt-2">
            Submit your request and our team will assist you.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name */}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-[#27b4e0] focus:border-transparent transition"
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-[#27b4e0] focus:border-transparent transition"
            />
          </div>

          {/* Email Phone */}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />
          </div>

          {/* Subscription */}

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="subscriptionType"
              value={formData.subscriptionType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            >
              <option value="">Subscription Type</option>

              <option value="Fiber">Fiber</option>

              <option value="Mobile 4G">Mobile 4G</option>

              <option value="Mobile 5G">Mobile 5G</option>
            </select>

            <input
              type="text"
              name="subscriptionNumber"
              value={formData.subscriptionNumber}
              onChange={handleChange}
              placeholder="Subscription Number"
              required
              className="w-full border border-gray-300 rounded-xl p-3
              focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />
          </div>

          {/* Description */}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your issue..."
            required
            rows="5"
            className="w-full border border-gray-300 rounded-xl p-3
            focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition resize-none"
          />

          {/* Submit section */}

          <div className="pt-6 border-t">
            <button
              type="submit"
              className="w-full bg-[#27b4e0] cursor-pointer
              hover:opacity-70 text-white font-semibold py-3 rounded-full
              shadow-md transition duration-300"
            >
              Submit Request
            </button>

            {/* Terms */}

            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="w-4 h-4"
              />

              <p className="text-sm text-gray-600">
                I accept the{" "}
                <Link
                  to="/terms"
                  className="text-[#27b4e0] hover:underline font-medium"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>

            {/* Demo message */}

            <p className="text-xs text-gray-400 mt-2">
              <span className="font-medium text-[#27b4e0]">Notice:</span> This
              feature is for demonstration purposes only and is not functional.
            </p>
          </div>
        </form>
      </div>

    </section>
  );
}
