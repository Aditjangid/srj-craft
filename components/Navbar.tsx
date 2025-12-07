"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import ContactFormModal from "./ContactFormModal";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "RESTAURANT FURNITURE",
      hasDropdown: true,
      href: "/restaurant-furniture",
      submenu: ["Dining Chairs", "Dining Tables", "Booths", "Outdoor Restaurant Furniture"],
    },
    {
      title: "CAFE FURNITURE",
      hasDropdown: true,
      href: "/cafe-furniture",
      submenu: ["Cafe Chairs", "Cafe Tables", "Coffee Tables", "Outdoor Cafe Furniture"],
    },
    {
      title: "BAR FURNITURE",
      hasDropdown: true,
      href: "/bar-furniture",
      submenu: ["Bar Chairs", "Bar Stools", "Bar Table", "Outdoor Bar Furniture"],
    },
    {
      title: "HOTEL FURNITURE",
      hasDropdown: true,
      href: "/hotel-furniture",
      submenu: ["Hotel Chairs", "Hotel Tables", "Hotel Beds", "Outdoor Hotel Furniture"],
    },
    {
      title: "CANE FURNITURE",
      hasDropdown: true,
      href: "/cane-furniture",
      submenu: ["Cane Chairs", "Cane Tables", "Cane Sofas", "Outdoor Cane Furniture"],
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block w-full bg-white shadow-md">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 gap-6">

              {/* Logo */}
              <Link href="/" className=" flex-shrink-0">
                <Image
                  src="/logo1.png"
                  alt="SRFCraft – Premium Hospitality Furniture Manufacturer"
                  width={200}
                  height={60}
                  className="h-28 w-auto"
                  priority
                />
              </Link>

              {/* Utility Links */}
              <div className="flex items-center gap-6">
                <Link href="/" className="text-sm font-[font-2] text-gray-900 hover:bg-gray-200 p-2 rounded-4xl px-4">
                  HOME
                </Link>
                <Link href="/about-us" className="text-sm font-[font-2] text-gray-900 hover:bg-gray-200 p-2 rounded-4xl px-4">
                  ABOUT US
                </Link>
                <Link href="/blogs" className="text-sm font-[font-2] text-gray-900 hover:bg-gray-200 p-2 rounded-4xl px-4">
                  BLOGS
                </Link>
                <ContactFormModal />
              </div>

              {/* Search Bar */}
              <div className="flex items-center flex-1 max-w-md shadow-sm rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-sm font-[font-1] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  onClick={handleSearch}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3"
                  aria-label="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>



            </div>
          </div>
        </div>


        {/* Menu Bar */}
        <div className="bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-4 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300 transition-colors rounded-t-lg"
                  >
                    <span>{item.title}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.submenu.length > 0 && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-xl border border-gray-200 z-50 rounded-b-lg overflow-hidden">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={`${item.href}/${subitem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                          {subitem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden w-full bg-white shadow-md relative z-40">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="px-4 py-3">
            {/* Mobile Top Bar */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 p-2 hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo1.png"
                  alt="Company Logo"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                  priority
                />
              </Link>

              <div className="w-10"></div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Slide-out Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-5 flex items-center justify-between">
            <h2 className="text-white text-lg font-[font-1]">Menu</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-gray-600 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="overflow-y-auto h-[calc(100%-80px)]">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-3 py-3 text-sm text-gray-900 rounded-md hover:bg-gray-100"
              >
                HOME
              </Link>

              <Link
                href="/about-us"
                className="block px-3 py-3 text-sm text-gray-900 rounded-md hover:bg-gray-100"
              >
                ABOUT US
              </Link>

              <Link
                href="/blogs"
                className="block px-3 py-3 text-sm text-gray-900 rounded-md hover:bg-gray-100"
              >
                BLOGS
              </Link>

              <div className="px-3 py-3">
                <ContactFormModal />
              </div>
            </div>



            {/* Mobile Search Bar inside menu */}
            <div className="px-4 py-4 border-b border-gray-200">
              <div className="flex items-center shadow-sm rounded-lg overflow-hidden border border-gray-300">
                <input
                  type="text"
                  placeholder="Search Products...."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm text-gray-700 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  onClick={handleSearch}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2.5 transition-colors flex-shrink-0"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="px-4 py-4">
              {menuItems.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="w-full flex items-center justify-between py-3.5 px-4 text-sm font-[font-1] text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.title ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Mobile Submenu with smooth transition */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openDropdown === item.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="pl-4 pt-1 pb-2 space-y-1">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={`${item.href}/${subitem.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block py-2.5 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3.5 px-4 text-sm font-[font-1] text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}


            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;