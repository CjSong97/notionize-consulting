export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer Notion workspace audits, custom template creation, and consulting services to help you optimize your Notion workspace."
    },
    {
      question: "How long does a typical audit take?",
      answer: "Most audits are completed within 3-5 business days after we receive all necessary access and information."
    },
    {
      question: "Do you offer custom template development?",
      answer: "Yes! We can create custom Notion templates tailored to your specific needs and workflows."
    },
    {
      question: "What's your pricing structure?",
      answer: "Pricing varies based on the scope of work. Please visit our contact page for more details or to request a custom quote."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out the contact form with details about your project, and we'll get back to you within 24 hours to discuss next steps."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
