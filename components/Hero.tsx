"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Master Your Digital Productivity
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-3xl">
        Notionize Consulting helps you navigate your digital life with ease. 
        We specialize in productivity tools like Notion, ClickUp, and Atlassian, 
        making digital organization simple and effective.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link href="/about" className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
          Learn More
        </Link>
        <Link href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 text-lg rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition">
          Contact Us
        </Link>
      </div>
    </section>
  );
}