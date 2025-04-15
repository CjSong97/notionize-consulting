"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:notionizeconsulting@gmail.com?subject=Inquiry from Notionize Consulting&body=${encodeURIComponent(message)}`;
    
    // Open mail client
    window.location.href = mailtoLink;

    setStatus("Email client opened. Send your message from there.");
    setMessage("");
  };

  return (
    <main className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl pb-4">
        Have questions or need assistance? Contact us and we’ll be happy to help.
      </p>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="message" className="text-left font-semibold text-gray-700 dark:text-gray-300">
            Your Message:
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Email
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-500">{status}</p>}
      </div>

      {/* Direct Contact Info */}
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
        Or email us directly at:{" "}
        <a href="mailto:notionizeconsulting@gmail.com" className="text-blue-600 hover:underline">
          notionizeconsulting@gmail.com
        </a>
      </p>
    </main>
  );
}
