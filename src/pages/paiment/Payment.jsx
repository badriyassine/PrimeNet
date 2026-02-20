import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function generateBankCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function Payment() {
  const navigate = useNavigate();

  const location = useLocation();

  const [method, setMethod] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [bankCode] = useState(generateBankCode());
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (!method) {
      alert("Please select a payment method");
      return;
    }
    if (!accepted) {
      alert("Please accept the terms first.");
      return;
    }
    if (method === "card") {
      if (!card.number || !card.name || !card.expiry || !card.cvv) {
        alert("Please fill all card details");
        return;
      }
      alert("Payment Successful (Demo)");
      navigate("/");
    } else if (method === "bank") {
      alert("Bank payment instructions shown. (Demo)");
      navigate("/");
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-300">
        <div className="bg-[#27b4e0] rounded-xl p-8">
          <h1 className="text-3xl text-white font-bold">Payment</h1>
          <p className="text-blue-100">Complete your order securely</p>
        </div>
        <form className="p-8 space-y-6" onSubmit={handlePay} method="Post">
          {/* Payment Method */}
          <div>
            <label className="block font-semibold mb-2">Payment Method</label>
            <select
              name="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
            >
              <option value="">Select Payment Method</option>
              <option value="card">Visa / MasterCard</option>
              <option value="bank">Bank Payment</option>
            </select>
          </div>
          {/* Card Payment Form */}
          {method === "card" && (
            <>
              <input
                type="text"
                name="number"
                placeholder="Card Number"
                value={card.number}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name on Card"
                value={card.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={card.expiry}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVC Security Code"
                  value={card.cvv}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#27b4e0] transition"
                />
              </div>
            </>
          )}
          {/* Bank Payment Instructions */}
          {method === "bank" && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="mb-2">
                <span className="font-semibold">Bank Payment Code:</span>
                <span className="ml-2 text-lg font-mono">{bankCode}</span>
              </div>
              <div className="text-gray-700 mb-2">
                Please take this code to your nearest bank branch to complete
                your payment.
              </div>
              <div className="text-yellow-700 bg-yellow-100 rounded p-2 mt-2">
                <b>Notice:</b> Your order will be held for <b>3 days</b>. If you
                do not complete the payment at the bank and visit our agency
                within this period, your order will be automatically cancelled
                and removed
              </div>
            </div>
          )}
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
              <span className="text-[#27b4e0] font-medium">
                Terms and Conditions
              </span>
            </p>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/Order")}
              className="flex-1 border border-gray-300 cursor-pointer py-3 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#27b4e0] hover:opacity-80 cursor-pointer text-white py-3 rounded-full font-semibold"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
