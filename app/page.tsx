import Image from "next/image";
import Hero from "../components/Hero";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import BestSellingProducts from "@/components/BestSellingProducts";

export default function Home() {
  return (
    <>
    <Hero/>
    <section
  className="w-full bg-white py-16 md:py-24"
  aria-labelledby="srjcraft-hospitality-heading"
>
  <div className="max-w-5xl mx-auto px-6 text-center">
    {/* Decorative lines + eyebrow */}
    <div className="flex items-center justify-center gap-6 mb-4">
      <span className="hidden md:block w-24 h-px bg-gray-300" />
      <p className="font-[font-1] text-sm tracking-widest text-blue-600">
        DESIGNING HOSPITALITY ELEGANCE
      </p>
      <span className="hidden md:block w-24 h-px bg-gray-300" />
    </div>

    {/* H2 — Primary section heading */}
    <h2
      id="srjcraft-hospitality-heading"
      className="font-[font-2] text-xl md:text-2xl text-blue-800 mb-8"
    >
      Premium Furniture for Grand Establishments
    </h2>

    {/* Paragraph block — SEO heavy but readable */}
    <div className="space-y-6 text-gray-700">
      <p className="font-[font-1] text-sm md:text-base leading-relaxed">
        Discover the essence of style and comfort in every seat with
        <strong className="font-[font-1] font-medium"> SRJCraft</strong>, a
        forward-driven furniture manufacturing company specializing in
        premium restaurant, café, bar, and hotel furniture. We believe that
        commercial furniture should not only be functional but also elevate
        the visual identity of hospitality spaces through thoughtful design
        and superior craftsmanship.
      </p>

      <p className="font-[font-1] text-sm md:text-base leading-relaxed">
        At SRJCraft, we are committed to excellence at every stage of the
        manufacturing process from responsibly sourced materials to precision
        engineering and final inspection. Our collections are crafted using
        high-quality materials and modern production techniques to ensure
        durability, comfort, and timeless appeal for high-traffic environments.
      </p>

      <p className="font-[font-1] text-sm md:text-base leading-relaxed">
        With a deep understanding of how furniture defines atmosphere, we
        partner with restaurateurs, café owners, architects, and hoteliers to
        create furnishings that enhance guest experience and brand presence.
        Every srjCraft product reflects our passion for design, attention to
        detail, and dedication to long-lasting quality.
      </p>
    </div>
  </div>
</section>

    <IndustriesWeServe/>
    <BestSellingProducts/>
    </>
  );
}
