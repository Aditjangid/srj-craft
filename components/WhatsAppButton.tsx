"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9057331212?text=Hi%20I%20am%20interested%20in%20your%20work"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 bg-green-500 text-white p-3  justify-center items-center rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-100"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
