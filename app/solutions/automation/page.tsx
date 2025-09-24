"use client";

import { Zap, Bot, Cpu, BarChart, ArrowRight, Check, Code, Database, LayoutGrid, MessageSquare, Mail, Calendar, FileText, Users } from "lucide-react";
import Link from "next/link";

export default function AutomationSolutions() {
  const services = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "AI Workflow Automation",
      description: "Smart automations that connect Notion with your favorite tools using AI.",
      price: "From $1,000",
      features: [
        "Custom AI workflow design",
        "Zapier/Make integration",
        "Basic prompt engineering",
        "1-hour training session"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      title: "AI Agent Implementation",
      description: "Deploy Notion AI Agents to automate complex tasks and workflows.",
      price: "From $3,000",
      features: [
        "Custom AI Agent setup",
        "Multi-step automations",
        "Advanced prompt engineering",
        "Team training included"
      ],
      popular: false,
      cta: "Learn More"
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      title: "Enterprise AI Solutions",
      description: "End-to-end automation solutions for growing businesses.",
      price: "Custom Pricing",
      features: [
        "Custom development",
        "API integrations",
        "ROI tracking",
        "Ongoing support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const integrations = [
    { name: "Google Workspace", icon: <LayoutGrid className="w-8 h-8" /> },
    { name: "Slack", icon: <MessageSquare className="w-8 h-8" /> },
    { name: "Jira", icon: <Database className="w-8 h-8" /> },
    { name: "Gmail", icon: <Mail className="w-8 h-8" /> },
    { name: "Google Calendar", icon: <Calendar className="w-8 h-8" /> },
    { name: "Google Sheets", icon: <FileText className="w-8 h-8" /> },
    { name: "Microsoft Teams", icon: <Users className="w-8 h-8" /> },
    { name: "Custom APIs", icon: <Code className="w-8 h-8" /> }
  ];

  const useCases = [
    {
      title: "Automated Meeting Notes",
      description: "AI-powered meeting summaries directly in Notion",
      benefits: "Saves 2-3 hours per week",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Data Sync & Enrichment",
      description: "Keep your Notion databases in sync with other tools",
      benefits: "Eliminates manual data entry",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "AI-Powered Triage",
      description: "Automatically categorize and prioritize tasks",
      benefits: "Improves team efficiency by 30%",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Document Processing",
      description: "Extract and structure information from documents",
      benefits: "Process documents 10x faster",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Supercharge Your Workflow with AI</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Connect Notion with AI and your favorite tools to automate repetitive tasks and unlock new possibilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#solutions"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:notionizeconsulting@gmail.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-8">
          INTEGRATIONS WITH YOUR FAVORITE TOOLS
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center justify-center group">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-gray-700 dark:text-gray-200 group-hover:shadow-md transition-all duration-200">
                {integration.icon}
              </div>
              <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Popular Automation Use Cases</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how AI can transform your Notion workspace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{useCase.description}</p>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">✓ {useCase.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div id="solutions" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI Automation Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the level of automation that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                service.popular 
                  ? 'transform hover:-translate-y-1 shadow-xl ring-2 ring-blue-500' 
                  : 'border border-gray-200 dark:border-gray-700 hover:shadow-lg'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">/ one-time</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.cta === "Contact Sales" ? "mailto:notionizeconsulting@gmail.com" : "/contact"}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    service.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to automate your workflow?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can help you implement AI automation in your Notion workspace.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Started
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
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">What tools can you integrate with Notion?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We can integrate Notion with virtually any tool that has an API, including Google Workspace, Slack, Jira, and many more. We also work with custom APIs for specialized business needs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">How long does implementation take?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Most automations can be set up within 1-2 weeks, depending on complexity. We'll provide a detailed timeline after our initial consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Do you provide training and support?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yes! Every solution includes training for your team, and we offer ongoing support plans to ensure your automations continue to meet your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}