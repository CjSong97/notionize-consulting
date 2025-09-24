// components/AboutNotionize.tsx
"use client";

import { useState } from "react";
import { Check, Zap, Lightbulb, Users, BarChart } from "lucide-react";

export default function AboutNotionize() {
  const [activeTab, setActiveTab] = useState("mission");

  const sections = {
    mission: {
      title: "Our Mission",
      icon: <Zap className="w-6 h-6" />,
      content: "Empower individuals and businesses to achieve peak productivity through intelligent Notion solutions and automation.",
    },
    vision: {
      title: "Our Vision",
      icon: <Lightbulb className="w-6 h-6" />,
      content: "A world where everyone can harness the full potential of Notion to work smarter, not harder.",
    },
    approach: {
      title: "Our Approach",
      icon: <BarChart className="w-6 h-6" />,
      content: "We combine deep Notion expertise with cutting-edge automation to create tailored solutions that drive real results.",
    },
  };

  const features = [
    {
      title: "Expert Guidance",
      description: "Get expert advice from certified Notion consultants with years of experience.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored Notion setups designed specifically for your workflow and business needs.",
      icon: <Check className="w-6 h-6" />,
    },
    {
      title: "Ongoing Support",
      description: "Continued assistance to ensure you get the most out of your Notion workspace.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {section.icon}
            <span className="ml-2">{section.title}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
        <div className="prose dark:prose-invert max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {sections[activeTab as keyof typeof sections].content}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet the Founder</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="md:flex">
            <div className="md:shrink-0 flex justify-center">
              <div className="h-48 w-48 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-400">
                CJ
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                Founder & Notion Expert
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                With a passion for productivity and technology, I founded Notionize Consulting to help businesses and individuals unlock the full potential of Notion. My mission is to transform the way people work through smart organization and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}