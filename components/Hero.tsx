"use client";

import Link from "next/link";
import { ArrowRight, Zap, Search, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-gray-900" />
      
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Transform your workflow with Notion
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="block">Supercharge Your</span>
            <span className="relative inline-block">
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Productivity Stack
                </span>
              </span>
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Notionize Consulting helps entrepreneurs and businesses maximize efficiency with 
            Notion, AI automation, and smart workflows. Get more done in less time.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#solutions" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="https://www.notion.com/@nconsulting" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              View Templates
            </Link>
          </div>
          
          {/* Key features */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Templates & Onboarding</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Get started quickly with our premium templates and expert guidance.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Notion Audits</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Optimize your workspace with our comprehensive audit service.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI Automation</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Streamline workflows with smart automations and AI integration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}