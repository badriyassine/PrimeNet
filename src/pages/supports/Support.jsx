import { useState } from "react";
import Info from "./components/Info";

export default function Support() {
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support request submitted:", formData);
    alert("Your request has been submitted! We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subscriptionType: "",
      subscriptionNumber: "",
      description: "",
    });
  };

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Support Request
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subscription Type & Number */}
          <div className="flex gap-4">
            <select
              name="subscriptionType"
              value={formData.subscriptionType}
              onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Subscription</option>
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
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Problem Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your problem..."
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
          >
            Submit Request
          </button>
        </form>
      </div>
        <Info />
    </section>
  );
}
