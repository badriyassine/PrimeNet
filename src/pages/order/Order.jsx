import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Supports from "../../pages/home/components/Supports.jsx";

export default function Order() {
  const navigate = useNavigate();

  const [accepted, setAccepted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subscriptionType: "",
    plan: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If subscriptionType changes, reset plan
    if (name === "subscriptionType") {
      setFormData({
        ...formData,
        subscriptionType: value,
        plan: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept the terms first.");
      return;
    }
    if (!formData.subscriptionType) {
      alert("Please select a subscription type");
      return;
    }
    if (formData.subscriptionType === "ADSL" && !formData.plan) {
      alert("Please select a plan for ADSL");
      return;
    }
    navigate("/payment", { state: formData });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <section className="from-blue-50 via-white to-white px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden  border border-gray-100">
        {/* Header */}
        <div className="bg-[#27b4e0] p-8">
          <h1 className="text-3xl font-bold text-white">
            Order PrimeNet Subscription
          </h1>
          <p className="text-blue-100 mt-2">
            Fill the form to subscribe to your internet offer
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
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] focus:border-transparent transition"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] focus:border-transparent transition"
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
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />
          </div>
          {/* Subscription Type */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="subscriptionType"
              value={formData.subscriptionType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            >
              <option value="">Type of Subscription</option>
              <option value="Fiber">Fiber</option>
              <option value="ADSL">ADSL</option>
              <option value="Box 5G">Box 5G</option>
              <option value="Mobile 4G">Mobile 4G</option>
              <option value="Mobile 5G">Mobile 5G</option>
            </select>
            {/* Plan select for ADSL, Box 5G, Mobile 4G/5G */}
            {formData.subscriptionType === "ADSL" && (
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              >
                <option value="">Choose ADSL Plan</option>
                <option value="ADSL Basic">ADSL Basic - 99 dh/month</option>
                <option value="ADSL Plus">ADSL Plus - 149 dh/month</option>
              </select>
            )}
            {formData.subscriptionType === "Box 5G" && (
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              >
                <option value="">Choose Box 5G Plan</option>
                <option value="DarBox 5G Basic">
                  DarBox 5G Basic - 349 dh/month
                </option>
                <option value="DarBox 5G Premium">
                  DarBox 5G Premium - 449 dh/month
                </option>
              </select>
            )}
            {formData.subscriptionType === "Fiber" && (
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              >
                <option value="">Choose Fiber Plan</option>
                <option value="Fiber Optic 200">
                  Fiber Optic - 299 dh/month
                </option>
                <option value="Fiber Optic 500">
                  Fiber Optic - 399 dh/month
                </option>
                <option value="Fiber Optic 1G">
                  Fiber Optic - 599 dh/month
                </option>
                <option value="Fiber Optic 2G">
                  Fiber Optic - 999 dh/month
                </option>
              </select>
            )}
            {formData.subscriptionType === "Mobile 4G" && (
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              >
                <option value="">Choose Mobile 4G Plan</option>
                <option value="4G Basic">4G Basic - 10 dh/month</option>
                <option value="4G Plus">4G Plus - 20 dh/month</option>
                <option value="4G Premium">4G Premium - 30 dh/month</option>
              </select>
            )}
            {formData.subscriptionType === "Mobile 5G" && (
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              >
                <option value="">Choose Mobile 5G Plan</option>
                <option value="5G Basic">5G Basic - 15 dh/month</option>
                <option value="5G Plus">5G Plus - 25 dh/month</option>
                <option value="5G Premium">5G Premium - 35 dh/month</option>
              </select>
            )}
            {formData.subscriptionType === "Satellite" && (
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              >
                <option value="">Choose Satellite Plan</option>
                <option value="Satellite Basic">
                  Satellite - 199 dh/month
                </option>
                <option value="Satellite Plus">Satellite - 299 dh/month</option>
                <option value="Satellite Premium">
                  Satellite - 399 dh/month
                </option>
                <option value="Satellite Pro">
                  Satellite Pro - 599 dh/month
                </option>
              </select>
            )}
          </div>
          {/* Address and City */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            />
          </div>
          {/* Submit section */}
          <div className="pt-6 border-t">
            <div className="flex gap-4 pb-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 border cursor-pointer border-gray-300 hover:bg-gray-100 py-3 rounded-full font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 cursor-pointer bg-[#27b4e0] hover:opacity-80 text-white py-3 rounded-full font-semibold"
              >
                Continue
              </button>
            </div>
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
          </div>
        </form>
      </div>
      <Supports />
    </section>
  );
}
