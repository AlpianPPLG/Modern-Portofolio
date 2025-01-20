/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  Globe,
  Rocket,
  Shield,
  MonitorSmartphone,
  Database,
  Cloud,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: ["Cross-Platform", "Native Performance", "Offline Support"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to grow your online presence",
      features: ["SEO/SEM", "Social Media", "Content Strategy"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS/Azure", "DevOps", "Monitoring"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audit", "Penetration Testing", "24/7 Monitoring"],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Solutions for Your Digital Needs
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
            Comprehensive digital solutions tailored to your business
            requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Service Icon */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-opacity duration-300 group-hover:opacity-20`}
              ></div>
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}
              >
                <service.icon className="w-6 h-6" />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Get Started
              <Rocket className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
            >
              View Portfolio
              <MonitorSmartphone className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
