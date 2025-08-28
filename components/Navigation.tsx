"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, ShoppingCartIcon, User, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Track Order", href: "/track" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 logo">
          <div className="w-9 h-9 bg-gradient-to-r from-primary to-orange-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CE</span>
          </div>
          <span className="text-xl font-bold text-primary">CloudEats</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors font-semibold ${
                pathname === item.href
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Cart Button */}
          <Link href="/cart" className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-gray-700">
                <ShoppingCartIcon size={20} />
              </span>
              <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-white text-xs font-semibold">
                3
              </span>
            </button>
          </Link>

          {/* User Button */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <span className="text-gray-700">
              <User size={20} />
            </span>
          </button>

          <Link href="/menu">
            <button className="hidden sm:flex px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md border-t border-gray-200`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block transition-colors font-medium text-lg ${
                pathname === item.href
                  ? "text-primary"
                  : "text-dark hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/menu">
            <button className="mt-4 px-3 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
