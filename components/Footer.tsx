"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const furnitureCategories = [
    { name: "Restaurant Furniture", href: "/restaurant-furniture" },
    { name: "Cafe Furniture", href: "/cafe-furniture" },
    { name: "Bar Furniture", href: "/bar-furniture" },
    { name: "Hotel Furniture", href: "/hotel-furniture" },
    { name: "Cane Furniture", href: "/cane-furniture" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Return Policy", href: "/return-policy" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logoDark.png"
                alt="Company Logo"
                width={180}
                height={60}
                className="h-20 w-auto b"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for premium furniture solutions. We specialize in providing high-quality furniture for restaurants, cafes, bars, and hotels.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Furniture Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              {furnitureCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Furniture Street, Jaipur, Rajasthan, India - 302001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@furniture.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  srjcrafts@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} SRJCrafts. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;