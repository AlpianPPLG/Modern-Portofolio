import { Check, MessageCircle, Globe, Smartphone, Rocket } from "lucide-react";

const Pricing = () => {
  const whatsappNumber = "+628125844194"; // Format: country code + number without spaces
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  const features = {
    landing: [
      "Landing Page Design",
      "Responsive Mobile & Desktop",
      "Up to 5 Sections",
      "Contact Form Integration",
      "Basic SEO Optimization",
      "Fast Loading Speed",
      "Free 1 Month Support",
    ],
    website: [
      "Multi-Page Website",
      "Responsive Design",
      "Up to 10 Pages",
      "CMS Integration (Optional)",
      "Advanced SEO",
      "Contact & Forms",
      "Performance Optimization",
      "Free 2 Months Support",
      "Free Minor Revisions",
    ],
    mobileApp: [
      "Cross-Platform App (iOS & Android)",
      "Custom UI/UX Design",
      "API Integration",
      "Push Notifications",
      "Database Setup",
      "App Store Deployment",
      "Admin Panel (Web)",
      "Free 3 Months Support",
      "Free Updates & Bug Fixes",
      "Source Code Included",
    ],
  };

  const plans = [
    {
      name: "Landing Page",
      description: "Perfect untuk personal branding atau product showcase",
      price: 1500000, // Rp 1.5 juta
      features: features.landing,
      icon: Globe,
      color: "blue",
      popular: false,
      deliveryTime: "3-5 Hari Kerja",
    },
    {
      name: "Company Website",
      description: "Ideal untuk company profile atau business website",
      price: 5000000, // Rp 5 juta
      features: features.website,
      icon: Rocket,
      color: "purple",
      popular: true,
      deliveryTime: "1-2 Minggu",
    },
    {
      name: "Mobile App",
      description: "Solusi lengkap untuk aplikasi mobile bisnis Anda",
      price: 15000000, // Rp 15 juta
      features: features.mobileApp,
      icon: Smartphone,
      color: "indigo",
      popular: false,
      deliveryTime: "3-4 Minggu",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Paket Layanan
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Pilih Paket yang Sesuai Kebutuhan Anda
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
            Harga transparan untuk website & aplikasi mobile berkualitas
          </p>
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
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    plan.color === "blue"
                      ? "bg-blue-100 dark:bg-blue-900/20"
                      : plan.color === "purple"
                      ? "bg-purple-100 dark:bg-purple-900/20"
                      : "bg-indigo-100 dark:bg-indigo-900/20"
                  }`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${
                      plan.color === "blue"
                        ? "text-blue-600 dark:text-blue-400"
                        : plan.color === "purple"
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  Rp {plan.price.toLocaleString("id-ID")}
                </p>
                <div className="mt-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/20 px-3 py-1 text-xs font-medium text-green-800 dark:text-green-400">
                  ⏱️ {plan.deliveryTime}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`${whatsappLink}?text=${encodeURIComponent(
                  `Halo! Saya tertarik dengan paket ${plan.name} (Rp ${plan.price.toLocaleString("id-ID")}). Bisakah kita diskusikan lebih lanjut?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-lg px-4 py-3 text-center font-semibold text-white transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                    : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
              >
                <div className="flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi via WhatsApp
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Butuh paket custom atau ada pertanyaan?
          </p>
          <a
            href={`${whatsappLink}?text=${encodeURIComponent(
              "Halo! Saya ingin bertanya tentang layanan pembuatan website/aplikasi."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Hubungi Saya di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
