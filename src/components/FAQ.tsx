import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions. Our team specializes in creating custom solutions tailored to your specific needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide comprehensive support and maintenance packages for all our projects. This includes regular updates, security patches, and technical support to ensure your project continues to run smoothly.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on your specific requirements. We offer flexible payment plans and transparent pricing with no hidden fees. Contact us for a detailed quote.",
    },
    {
      question: "Can you help with existing projects?",
      answer:
        "Absolutely! We have extensive experience in taking over and improving existing projects. Our team can audit your current solution and propose improvements or take over maintenance and development.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We stay up-to-date with the latest technologies and choose the best tools for each project. This includes React, Node.js, Python, and various other modern frameworks and technologies.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Frequently Asked Questions
          </p>
          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
