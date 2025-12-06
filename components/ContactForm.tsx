"use client";

import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.message);

    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      aria-labelledby="contact-srfcraft"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id="contact-srfcraft"
          className="font-[font-2] text-2xl md:text-3xl text-center text-gray-900 mb-4"
        >
          Contact SRFCraft
        </h2>

        <p className="font-[font-1] text-sm md:text-base text-center text-gray-600 mb-10">
          Speak with our team about custom furniture solutions for restaurants,
          cafés, bars, and hotels.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md border border-gray-200 rounded-lg p-6 md:p-8 space-y-5"
        >
          <div>
            <label className="block mb-1 text-sm font-[font-1] text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 text-sm font-[font-1] focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-[font-1] text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 text-sm font-[font-1] focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-[font-1] text-gray-700">
              Phone Number
            </label>
            <input
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 text-sm font-[font-1] focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-[font-1] text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 text-sm font-[font-1] focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 text-sm font-[font-1] hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {message && (
            <p className="text-sm text-center font-[font-1] text-gray-700">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
