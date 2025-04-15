"use client";

import Link from "next/link";
//import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Notionize Consulting
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-500 transition">Home</Link>

          {/* Solutions Dropdown */}
          {/* <div className="relative">
            <button 
              className="flex items-center gap-1 hover:text-gray-500 transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Solutions <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md">
                <Link href="/solutions/option1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Option 1
                </Link>
                <Link href="/solutions/option2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Option 2
                </Link>
                <Link href="/solutions/option3" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Option 3
                </Link>
              </div>
            )}
          </div> */}

          <Link href="/about" className="hover:text-gray-500 transition">About</Link>
          <Link href="/blog" className="hover:text-gray-500 transition">Blog</Link>
          <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
        </nav>

        {/* Learn More Button */}
        <Link href="/contact" className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
