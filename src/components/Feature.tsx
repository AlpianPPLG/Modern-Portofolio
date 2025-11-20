import { Zap, Shield, Code, Palette, Smartphone, HeadphonesIcon, MessageCircle } from "lucide-react";

const Features = () => {
  const whatsappNumber = "+628125844194";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  const features = [
    {
      icon: Palette,
      title: "Custom UI/UX Design",
      description: "Desain antarmuka yang menarik dan user-friendly sesuai brand identity Anda",
      color: "blue",
      whatsappMessage: "Halo! Saya tertarik dengan layanan Custom UI/UX Design. Bisakah kita diskusikan lebih lanjut?",
    },
    {
      icon: Zap,
      title: "Fast & Optimized",
      description: "Website dan aplikasi yang cepat dengan performa optimal untuk pengalaman terbaik",
      color: "yellow",
      whatsappMessage: "Halo! Saya ingin tahu lebih lanjut tentang optimisasi performa website/aplikasi.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Tampilan sempurna di semua perangkat: desktop, tablet, dan smartphone",
      color: "purple",
      whatsappMessage: "Halo! Saya butuh website/aplikasi yang mobile responsive. Bisa bantu?",
    },
    {
      icon: Code,
      title: "Clean Code & SEO",
      description: "Kode rapi mengikuti best practices dan SEO friendly untuk ranking Google",
      color: "green",
      whatsappMessage: "Halo! Saya tertarik dengan layanan development dengan Clean Code & SEO optimization.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Keamanan data terjamin dengan sistem yang stabil dan dapat diandalkan",
      color: "red",
      whatsappMessage: "Halo! Saya butuh website/aplikasi yang aman dan reliable. Bisa konsultasi?",
    },
    {
      icon: HeadphonesIcon,
      title: "Free Support & Maintenance",
      description: "Support gratis hingga 3 bulan, maintenance, dan update fitur secara berkala",
      color: "indigo",
      whatsappMessage: "Halo! Saya ingin tahu lebih detail tentang support & maintenance yang diberikan.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Keunggulan Layanan
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Kenapa Pilih Kami?
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
            Solusi lengkap untuk website dan aplikasi mobile berkualitas tinggi
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transform transition-transform group-hover:scale-95"></div>
              <div className="relative">
                <div
                  className={`inline-flex p-3 rounded-lg mb-5 ${
                    feature.color === "blue"
                      ? "bg-blue-100 dark:bg-blue-900/20"
                      : feature.color === "yellow"
                      ? "bg-yellow-100 dark:bg-yellow-900/20"
                      : feature.color === "purple"
                      ? "bg-purple-100 dark:bg-purple-900/20"
                      : feature.color === "green"
                      ? "bg-green-100 dark:bg-green-900/20"
                      : feature.color === "red"
                      ? "bg-red-100 dark:bg-red-900/20"
                      : "bg-indigo-100 dark:bg-indigo-900/20"
                  }`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      feature.color === "blue"
                        ? "text-blue-600 dark:text-blue-400"
                        : feature.color === "yellow"
                        ? "text-yellow-600 dark:text-yellow-400"
                        : feature.color === "purple"
                        ? "text-purple-600 dark:text-purple-400"
                        : feature.color === "green"
                        ? "text-green-600 dark:text-green-400"
                        : feature.color === "red"
                        ? "text-red-600 dark:text-red-400"
                        : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
                <a
                  href={`${whatsappLink}?text=${encodeURIComponent(feature.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi via WhatsApp
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Siap Wujudkan Project Anda?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Konsultasikan kebutuhan website atau aplikasi mobile Anda dengan kami.
            Gratis konsultasi, tanpa komitmen!
          </p>
          <a
            href={`${whatsappLink}?text=${encodeURIComponent(
              "Halo! Saya ingin konsultasi tentang pembuatan website/aplikasi. Bisa bantu saya?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat Sekarang di WhatsApp
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            💬 Respon cepat • 🎯 Solusi custom • ✅ Harga transparan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
