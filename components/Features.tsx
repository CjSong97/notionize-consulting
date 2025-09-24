import Link from 'next/link'
import { CheckCircle, Zap, Search } from 'lucide-react';

const Features = () => {
  return (
    <div id="solutions"className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Streamlined Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect starting point for your Notion and automation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Workstream A */}
          <div className="relative group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Template Pack + Onboarding</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Jumpstart your Notion journey with our premium templates and personalized setup session.
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Premium Notion templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1-hour personalized onboarding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best practices & pro tips</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Workstream B */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Quick Notion Audit</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get expert insights into optimizing your Notion workspace for maximum efficiency.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">What&apos;s Included:</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300 text-left">
                  <li>Comprehensive audit template</li>
                  <li>Discovery checklist</li>
                  <li>Personalized booking page</li>
                  <li>Follow-up email sequence</li>
                  <li>Launch post templates</li>
                </ol>
              </div>
              <Link 
                href="/contact" 
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                Book Audit
              </Link>
            </div>
          </div>

          {/* Workstream C */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI Automation Pilot</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transform your workflow with AI-powered automation solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Pilot Package Includes:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Hero workflow automation</li>
                    <li>• Base Zap/Make module setup</li>
                    <li>• Custom pilot one-pager</li>
                    <li>• 5-minute demo session</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                Start Automation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;