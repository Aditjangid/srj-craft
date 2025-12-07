"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ContactFormModal = () => {
  const [open, setOpen] = useState(false);
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

    let data;
    try {
      data = await res.json();
    } catch {
      setStatus("idle");
      setMessage("Server returned invalid response.");
      return;
    }

    if (res.ok) {
      setStatus("sent");
      setMessage("Message sent!");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
        setMessage(null);
        setOpen(false); // CLOSE MODAL
      }, 1500);
    } else {
      setStatus("idle");
      setMessage(data.message || "Something went wrong.");
    }
  }

  const buttonText =
    status === "sending" ? "SENDING..." : status === "sent" ? "SENT" : "SEND MESSAGE";

  const buttonClasses =
    "w-full py-3 text-sm transition font-medium rounded-md disabled:opacity-60 " +
    (status === "sent"
      ? "bg-green-600 text-white"
      : "bg-black text-white hover:bg-gray-900");

  return (
    <>
      {/* External trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer transition-colors font-[font-2] px-6 py-3  text-blue-500 rounded-md text-sm hover:bg-blue-500 hover:text-white border border-blue-400 "
      >
        CONTACT US
      </button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg p-6 rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-[font-2]">
              Contact Us
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">

            <div>
              <label className="block text-sm text-gray-700">Full Name</label>
              <input
                name="name"
                required
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Phone</label>
              <input
                name="phone"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <button disabled={status === "sending"} className={buttonClasses}>
              {buttonText}
            </button>

            {message && (
              <p className="text-center text-sm text-gray-700">{message}</p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactFormModal;
