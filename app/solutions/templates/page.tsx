import Link from "next/link";
import { Check, Zap, Clock, Users, BookOpen, MessageSquare } from "lucide-react";

export default function TemplateSolutions() {
  const templates = [
    {
      name: "Startup Operations Hub",
      description: "All-in-one workspace for early-stage startups to manage projects, tasks, and team collaboration.",
      price: "$29",
      link: "https://www.notion.com/@nconsulting",
      features: ["Project management", "Task tracking", "Team wiki", "OKR tracking"]
    },
    {
      name: "Content Creator Suite",
      description: "Organize your content calendar, track ideas, and manage collaborations all in one place.",
      price: "$24",
      link: "https://www.notion.com/@nconsulting",
      features: ["Content calendar", "Idea bank", "Publishing tracker", "Analytics dashboard"]
    },
    {
      name: "Freelance Business OS",
      description: "Manage clients, projects, invoices, and time tracking in a single, streamlined system.",
      price: "$19",
      link: "https://www.notion.com/@nconsulting",
      features: ["Client portal", "Project tracker", "Invoice generator", "Time tracking"]
    }
  ];

  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Template + Onboarding Package",
      description: "Get a custom template and a 1:1 onboarding session to set it up for your specific needs.",
      price: "From $149",
      cta: "Book a Call",
      link: "/contact"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Team Training",
      description: "Group training sessions to get your entire team up to speed with Notion.",
      price: "Custom Pricing",
      cta: "Learn More",
      link: "/contact"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Upcoming Courses",
      description: "Comprehensive Notion courses for small businesses (Coming Soon).",
      price: "Coming Soon",
      cta: "Get Notified",
      link: "https://notionize0.gumroad.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notion Templates for Small Businesses</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Jumpstart your business operations with our professionally designed Notion templates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.notion.com/@nconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Browse Templates
            </a>
            <a
              href="#custom-solutions"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Custom Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Popular Templates</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our collection of battle-tested templates designed for small businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{template.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{template.description}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{template.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">one-time purchase</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Template
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.notion.com/@nconsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all templates
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="custom-solutions" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Custom Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Need something more tailored to your business? We've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 dark:bg-gray-600 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">{service.price}</span>
                  <a
                    href={service.link}
                    target={service.link.startsWith('http') ? '_blank' : '_self'}
                    rel={service.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    {service.cta}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business with Notion?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need a template, custom solution, or expert guidance, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@notionize.consulting"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://calendly.com/notionize/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">How do I access the templates after purchase?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              After completing your purchase, you'll receive an email with a link to duplicate the template to your Notion workspace. 
              You can also access all your purchased templates through your account on our website.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Can I get a custom template made for my business?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Absolutely! We offer custom template development with a 1-hour onboarding session. 
              <a href="#custom-solutions" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Learn more about our custom solutions</a>.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Do you offer refunds?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Due to the digital nature of our products, we don't offer refunds on template purchases. 
              However, if you're not satisfied with your purchase, please contact us and we'll do our best to make it right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}