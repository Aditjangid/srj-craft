"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    let res: Response;

    try {
      res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      setStatus("idle");
      setMessage("Network error — try again.");
      return;
    }

    let data: any;
    try {
      data = await res.json();
    } catch {
      setStatus("idle");
      setMessage("Server returned invalid response.");
      return;
    }

    if (res.ok) {
      setStatus("sent");
      setMessage("Message sent.");

      form.reset();

      setTimeout(() => {
        setStatus("idle");
        setMessage(null);
      }, 2000);
    } else {
      setStatus("idle");
      setMessage(data.message || "Something went wrong.");
    }
  }

  const buttonText =
    status === "sending" ? "SENDING..." : status === "sent" ? "SENT" : "SEND MESSAGE";

  const buttonClasses =
    "w-full py-3 text-sm font-[font-1] transition disabled:opacity-60 " +
    (status === "sent"
      ? "bg-green-600 text-white"
      : "bg-gray-900 text-white hover:bg-gray-800");

  return (
    <section className="bg-gray-100 py-16 md:py-24" aria-labelledby="contact-srfcraft">
      <div className="max-w-5xl mx-auto bg-white  shadow-sm overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* LEFT SECTION */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 tracking-wider mb-3">
              WE'RE HERE FOR BUSINESS
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              GET CUSTOM QUOTATION
            </h1>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Our expert team is dedicated to helping you find premium-quality furniture at truly affordable prices. Connect with us to discuss your requirements, or visit our showroom to experience the craftsmanship and detail that go into every piece we create.
            </p>

            <div className="space-y-4">
              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">E-mail</p>
                  <a
                    href="mailto:srjcrafts@gmail.com"
                    className="text-gray-900 font-medium hover:underline"
                  >
                    srjcrafts@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone number</p>
                  <a
                    href="tel:+919057331212"
                    className="text-gray-900 font-medium hover:underline"
                  >
                    +91 9057331212
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 space-y-5 border-l border-gray-200"
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

            <button disabled={status === "sending"} className={buttonClasses}>
              {buttonText}
            </button>

            {message && (
              <p className="text-sm text-center font-[font-1] text-gray-700">{message}</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
