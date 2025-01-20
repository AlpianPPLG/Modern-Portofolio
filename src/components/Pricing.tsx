import { useState } from "react";
import { Check, CreditCard, Zap, Shield, Clock } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = {
    basic: [
      "1 User",
      "5 Projects",
      "5GB Storage",
      "Basic Support",
      "Basic Analytics",
    ],
    pro: [
      "5 Users",
      "20 Projects",
      "20GB Storage",
      "Priority Support",
      "Advanced Analytics",
      "Custom Domain",
      "API Access",
    ],
    enterprise: [
      "Unlimited Users",
      "Unlimited Projects",
      "100GB Storage",
      "24/7 Support",
      "Advanced Analytics",
      "Custom Domain",
      "API Access",
      "Custom Integration",
      "Dedicated Manager",
    ],
  };

  const plans = [
    {
      name: "Basic",
      description: "Perfect for starters and small projects",
      monthlyPrice: 19,
      annualPrice: 190,
      features: features.basic,
      icon: Clock,
      color: "blue",
      popular: false,
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses",
      monthlyPrice: 49,
      annualPrice: 490,
      features: features.pro,
      icon: Zap,
      color: "purple",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large scale organizations",
      monthlyPrice: 99,
      annualPrice: 990,
      features: features.enterprise,
      icon: Shield,
      color: "indigo",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Pricing Plans
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Choose the right plan for you
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
            Simple, transparent pricing that grows with you
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center items-center space-x-4">
            <span
              className={`text-sm ${
                isAnnual
                  ? "text-gray-500 dark:text-gray-400"
                  : "text-gray-900 dark:text-white font-semibold"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual
                  ? "text-gray-900 dark:text-white font-semibold"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg bg-${plan.color}-100 dark:bg-${plan.color}-900/20`}
                >
                  <plan.icon
                    className={`w-6 h-6 text-${plan.color}-600 dark:text-${plan.color}-400`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-5xl font-bold text-gray-900 dark:text-white">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  per {isAnnual ? "year" : "month"}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg px-4 py-3 text-center font-semibold text-white transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                  }
                `}
              >
                <div className="flex items-center justify-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Get Started
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Have questions? Check out our{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              FAQ
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
