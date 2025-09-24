"use client";

import { useState } from "react";
import { Mail, MessageSquare, FileText, Zap, Check, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    auditType: "",
    templateType: "",
    budget: "",
    timeline: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Replace with your form submission logic
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          contactType: activeTab
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          auditType: "",
          templateType: "",
          budget: "",
          timeline: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  const tabs = [
    { id: "general", icon: <MessageSquare className="w-4 h-4 mr-2" />, label: "General Inquiry" },
    { id: "audit", icon: <FileText className="w-4 h-4 mr-2" />, label: "Audit Request" },
    { id: "template", icon: <Zap className="w-4 h-4 mr-2" />, label: "Custom Template" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch to discuss how we can help optimize your Notion workspace
          </p>
        </div>

        {/* Contact Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Common Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Dynamic Fields Based on Tab */}
              {activeTab === "audit" && (
                <>
                  <div>
                    <label htmlFor="auditType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Type of Audit
                    </label>
                    <select
                      id="auditType"
                      name="auditType"
                      value={formData.auditType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="single">Single Workflow Audit ($75+)</option>
                      <option value="complete">Complete Workspace Audit ($250+)</option>
                      <option value="enterprise">Enterprise Solution (Custom)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      When do you need this by?
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Within 1 week, Flexible, etc."
                    />
                  </div>
                </>
              )}

              {activeTab === "template" && (
                <>
                  <div>
                    <label htmlFor="templateType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Template Type
                    </label>
                    <select
                      id="templateType"
                      name="templateType"
                      value={formData.templateType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="startup">Startup Operations Hub</option>
                      <option value="content">Content Creator Suite</option>
                      <option value="freelance">Freelance Business OS</option>
                      <option value="custom">Custom Template</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="50-100">$50 - $100</option>
                      <option value="100-250">$100 - $250</option>
                      <option value="250-500">$250 - $500</option>
                      <option value="500+">$500+ (Custom Solution)</option>
                    </select>
                  </div>
                </>
              )}

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {activeTab === "general" ? "How can we help you?" : "Additional Details"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={activeTab === "general" 
                    ? "Tell us about your project or questions..." 
                    : "Any specific requirements or details we should know?"}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  {activeTab === "audit" ? "Request Audit" : 
                   activeTab === "template" ? "Get Custom Quote" : "Send Message"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                {status && (
                  <p className={`mt-3 text-sm ${
                    status.includes("success") ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-gray-400"
                  }`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:notionizeconsulting@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              notionizeconsulting@gmail.com
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Chat</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Chat with our team in real-time during business hours.
            </p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Start Chat
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Help</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Browse our help center for instant answers to common questions.
            </p>
            <a
              href="/faq"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              Visit Help Center
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}