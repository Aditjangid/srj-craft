import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    name: "Wooden Restaurant Chair",
    category: "Restaurant Furniture",
    href: "/restaurant-furniture/dining-chairs",
    image:
      "/industries/cafe.jpeg",
  },
  {
    name: "Modern Café Table Set",
    category: "Cafe Furniture",
    href: "/cafe-furniture/cafe-tables",
    image:
      "/industries/cafe.jpeg",
  },
  {
    name: "High Bar Stool",
    category: "Bar Furniture",
    href: "/bar-furniture/bar-stools",
    image:
      "/industries/cafe.jpeg",
  },
  {
    name: "Luxury Hotel Lounge Chair",
    category: "Hotel Furniture",
    href: "/hotel-furniture/hotel-chairs",
    image:
      "/industries/cafe.jpeg",
  },
];

const BestSellingProducts = () => {
  return (
    <section
      className="bg-gray-50 py-14 md:py-20"
      aria-labelledby="best-selling-products-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2
            id="best-selling-products-heading"
            className="font-[font-2] text-2xl md:text-3xl text-blue-900 mb-3"
          >
            Best Selling Hospitality Furniture
          </h2>
          <p className="font-[font-1] text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Our most trusted furniture pieces, widely chosen by restaurants,
            cafés, bars, and hotels for durability, comfort, and timeless design.
          </p>
        </div>

        {/* Product Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <li
              key={product.name}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <Link href={product.href} className="block">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={product.image}
                    alt={`${product.name} by SRFCraft`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                <div className="p-4">
                  <p className="font-[font-1] text-xs tracking-wide text-gray-500 mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-[font-2] text-base text-gray-900 leading-snug">
                    {product.name}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block font-[font-1] text-sm px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
