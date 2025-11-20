import { useState, useMemo } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  Search,
  HelpCircle,
  Clock,
  DollarSign,
  Code,
  Users,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const faqs = [
    {
      question: "Layanan apa saja yang tersedia?",
      answer:
        "Kami menyediakan berbagai layanan digital termasuk web development, mobile app development, UI/UX design, dan digital marketing. Tim kami spesialis dalam membuat solusi custom yang disesuaikan dengan kebutuhan bisnis Anda.",
      category: "Layanan",
      icon: Code,
    },
    {
      question: "Berapa lama waktu pengerjaan project?",
      answer:
        "Timeline project bervariasi tergantung kompleksitas. Website sederhana 2-4 minggu, aplikasi web kompleks 2-3 bulan. Kami akan memberikan timeline detail saat konsultasi awal.",
      category: "Waktu",
      icon: Clock,
    },
    {
      question: "Apakah ada layanan maintenance?",
      answer:
        "Ya! Kami menyediakan paket support dan maintenance lengkap untuk semua project. Termasuk update berkala, security patches, dan technical support untuk memastikan project Anda berjalan lancar.",
      category: "Layanan",
      icon: Shield,
    },
    {
      question: "Bagaimana struktur harga yang ditawarkan?",
      answer:
        "Harga kami berbasis project dan disesuaikan dengan kebutuhan spesifik Anda. Kami menawarkan sistem pembayaran fleksibel dan harga transparan tanpa biaya tersembunyi. Hubungi kami untuk quote detail.",
      category: "Harga",
      icon: DollarSign,
    },
    {
      question: "Apakah bisa handle project yang sudah berjalan?",
      answer:
        "Tentu! Kami punya pengalaman luas dalam mengambil alih dan meningkatkan project yang sudah ada. Tim kami bisa audit solusi Anda saat ini dan memberikan saran improvement atau maintenance.",
      category: "Layanan",
      icon: Zap,
    },
    {
      question: "Teknologi apa yang digunakan?",
      answer:
        "Kami selalu update dengan teknologi terkini dan memilih tools terbaik untuk setiap project. Termasuk React, Node.js, Python, TypeScript, dan berbagai framework modern lainnya.",
      category: "Teknis",
      icon: Code,
    },
    {
      question: "Apakah project bisa dikerjakan secara remote?",
      answer:
        "Sangat bisa! Kami terbiasa bekerja remote dengan klien dari berbagai lokasi. Komunikasi rutin via video call, chat, dan project management tools memastikan kolaborasi yang efektif.",
      category: "Proses",
      icon: Users,
    },
    {
      question: "Bagaimana proses pembayaran yang berlaku?",
      answer:
        "Kami menerima pembayaran bertahap: DP 30% di awal, 40% saat development, dan 30% sisanya setelah project selesai. Pembayaran bisa via transfer bank atau e-wallet.",
      category: "Harga",
      icon: DollarSign,
    },
    {
      question: "Apakah ada garansi untuk project?",
      answer:
        "Ya, kami memberikan garansi 30 hari untuk bug fixing setelah project selesai. Untuk maintenance jangka panjang, tersedia paket support bulanan/tahunan.",
      category: "Layanan",
      icon: Shield,
    },
  ];

  const categories = ["Semua", "Layanan", "Harga", "Waktu", "Teknis", "Proses"];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "Semua" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const whatsappNumber = "+628125844194";

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 transform rotate-3 hover:rotate-6 transition-transform">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-2">
            Pertanyaan Umum
          </h2>
          <p className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
            Yang Sering Ditanyakan
          </p>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Temukan jawaban untuk pertanyaan Anda di sini
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {faqs.length}+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pertanyaan
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500 transform hover:scale-105 transition-all">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  24/7
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Support
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  100+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Klien Puas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion - 2 Column Grid */}
        <div className="max-w-6xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredFaqs.map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                      openIndex === index
                        ? "border-blue-500 dark:border-blue-400"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full px-6 py-5 text-left flex items-start gap-4 focus:outline-none group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className={`p-2 rounded-lg transition-all ${
                            openIndex === index
                              ? "bg-blue-500 dark:bg-blue-600"
                              : "bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900"
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 ${
                              openIndex === index
                                ? "text-white"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {faq.question}
                        </span>
                        <span className="ml-2 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <span className="flex-shrink-0 ml-2">
                        {openIndex === index ? (
                          <Minus className="h-5 w-5 text-blue-500" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                        )}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6 pl-20">
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Tidak ada pertanyaan yang cocok dengan pencarian Anda
              </p>
            </div>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                Masih Ada Pertanyaan?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi kami. Tim support kami siap membantu menjawab semua pertanyaan Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Halo, saya punya beberapa pertanyaan yang ingin saya tanyakan."
                    );
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${message}`,
                      "_blank"
                    );
                  }}
                  className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat via WhatsApp
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Hubungi Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Help Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Atau kunjungi halaman lainnya:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Layanan Kami
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#portfolio"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Portfolio
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#pricing"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Harga
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#testimony"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Testimoni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
