/* eslint-disable @typescript-eslint/no-unused-vars */
import { Zap, Shield, Code, Cloud, Layout, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Layout,
      title: "Responsive Design",
      description: "Layouts that automatically adapt to any device screen size",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized code that loads quickly and runs smoothly",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Built-in security features to protect your data",
      color: "red",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-structured code following best practices",
      color: "green",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services",
      color: "purple",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams to work together efficiently",
      color: "indigo",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Everything you need
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
            Powerful features to help you build better projects
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transform transition-transform group-hover:scale-95"></div>
              <div className="relative">
                <div
                  className={`inline-flex p-3 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/20 mb-5`}
                >
                  <feature.icon
                    className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
