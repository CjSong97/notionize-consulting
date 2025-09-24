import { Search, Zap, LayoutDashboard, Database, Lightbulb, Clock, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AuditSolutions() {
  const auditTypes = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-purple-500" />,
      title: "Single Workflow Audit",
      description: "Optimize a specific workflow or process in your Notion workspace.",
      price: "From $75",
      features: [
        "45-60 minute audit call",
        "1-page improvement plan",
        "3 quick win implementations",
        "Before/after screenshots"
      ],
      cta: "Book Workflow Audit",
      popular: false
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "Complete Workspace Audit",
      description: "Comprehensive review of your entire Notion workspace structure.",
      price: "From $250",
      features: [
        "60-90 minute audit call",
        "Detailed improvement roadmap",
        "5+ quick win implementations",
        "Database optimization",
        "Template recommendations"
      ],
      cta: "Book Full Audit",
      popular: true
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We'll discuss your current Notion setup and pain points.",
      icon: <Search className="w-6 h-6 text-blue-500" />
    },
    {
      number: "02",
      title: "Workshop Session",
      description: "Live audit of your workspace with real-time improvements.",
      icon: <Lightbulb className="w-6 h-6 text-purple-500" />
    },
    {
      number: "03",
      title: "Quick Wins",
      description: "Immediate improvements you can implement right away.",
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      number: "04",
      title: "Deliverables",
      description: "Receive your customized improvement plan and next steps.",
      icon: <Check className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            30-Minute Notion Cleanup
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notion Workspace Audit</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Get expert insights to optimize your Notion workspace for maximum productivity.
          </p>
          <div className="mt-8">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              View Audit Options
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Get a Notion Audit?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Most teams use only 20% of Notion's potential. We'll help you unlock the other 80%.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Immediate Productivity Boost</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Walk away with 3+ quick wins that will save you hours every week.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get personalized recommendations from Notion experts who've helped 100+ businesses.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <LayoutDashboard className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Structured Approach</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Clear, actionable plan to transform your workspace from messy to magnificent.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple 4-step process to optimize your Notion workspace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg h-full border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Step {step.number}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Audit Options</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the audit that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {auditTypes.map((audit, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden ${audit.popular ? 'ring-2 ring-purple-500' : 'border border-gray-200 dark:border-gray-700'}`}
            >
              {audit.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    {audit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{audit.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{audit.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{audit.price}</span>
                  <span className="text-gray-500 dark:text-gray-400"> / one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {audit.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    audit.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {audit.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your Notion workspace?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Book your audit today and get immediate improvements to your workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:notionizeconsulting@gmail.com"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">What happens during the audit call?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We'll screen share your Notion workspace and go through your current setup. You'll get immediate feedback and we'll implement quick wins on the spot. The session is recorded for your reference.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">What if I need more help after the audit?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Many clients choose to continue with our implementation services after their audit. We offer various support packages to help you implement all recommended changes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">How quickly can I book an audit?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We typically have availability within 3-5 business days. Use our booking tool to see available time slots that work with your schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}