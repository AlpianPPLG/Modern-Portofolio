import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Quote,
  CheckCircle,
  TrendingUp,
  Award,
  MessageCircle,
  Users,
  ThumbsUp,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "CEO, TechIndo Solutions",
    company: "TechIndo Solutions",
    content:
      "Bekerja sama dengan tim ini adalah pengalaman yang luar biasa. Mereka tidak hanya memahami kebutuhan bisnis kami, tetapi juga memberikan solusi yang inovatif dan efektif. Website kami sekarang jauh lebih modern dan user-friendly!",
    avatar: "/img/Person1.jpg",
    rating: 5,
    verified: true,
    project: "Corporate Website Development",
    result: "+150% Traffic Increase",
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Marketing Director",
    company: "GrowthCo Indonesia",
    content:
      "Hasil yang diberikan sangat melampaui ekspektasi kami. Kehadiran online kami meningkat drastis sejak mulai bekerja sama. Tim yang sangat profesional dan responsif terhadap setiap kebutuhan kami.",
    avatar: "/img/Person2.jpg",
    rating: 5,
    verified: true,
    project: "E-Commerce Platform",
    result: "3x Sales Conversion",
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    role: "Founder & CEO",
    company: "StartupHub Asia",
    content:
      "Saya sangat terkesan dengan kemampuan mereka menerjemahkan ide kompleks menjadi desain yang intuitif dan mudah digunakan. Mobile app yang mereka buat untuk kami sangat membantu pertumbuhan bisnis!",
    avatar: "/img/Person3.jpg",
    rating: 5,
    verified: true,
    project: "Mobile App Development",
    result: "10K+ Active Users",
  },
  {
    id: 4,
    name: "Linda Pratiwi",
    role: "Business Owner",
    company: "Fashion Boutique",
    content:
      "Dari konsultasi awal hingga launching, prosesnya sangat smooth. Tim ini benar-benar peduli dengan kesuksesan bisnis klien mereka. Highly recommended untuk siapa saja yang butuh solusi digital berkualitas!",
    avatar: "/img/Person1.jpg",
    rating: 5,
    verified: true,
    project: "Online Store & Branding",
    result: "+200% Online Orders",
  },
  {
    id: 5,
    name: "David Kusuma",
    role: "IT Manager",
    company: "RetailMart Indonesia",
    content:
      "Kualitas kode yang bersih, dokumentasi yang lengkap, dan support yang excellent. Mereka tidak hanya deliver project tepat waktu, tapi juga provide training kepada tim kami. Partnership yang sangat valuable!",
    avatar: "/img/Person2.jpg",
    rating: 5,
    verified: true,
    project: "Enterprise System Integration",
    result: "50% Efficiency Boost",
  },
  {
    id: 6,
    name: "Putri Maharani",
    role: "Digital Marketing Lead",
    company: "Creative Agency Pro",
    content:
      "Tim yang sangat kreatif dan teknikal. Mereka berhasil membuat landing page yang converting dengan design yang stunning. ROI dari project ini sangat tinggi dan kami pasti akan bekerja sama lagi!",
    avatar: "/img/Person3.jpg",
    rating: 5,
    verified: true,
    project: "Landing Page Optimization",
    result: "85% Conversion Rate",
  },
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const itemsPerPage = 3;
  const whatsappNumber = "+628125844194";

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, testimonials.length - itemsPerPage)
        : prev - itemsPerPage
    );
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // Fill empty slots if needed
  while (visibleTestimonials.length < itemsPerPage && visibleTestimonials.length < testimonials.length) {
    visibleTestimonials.push(testimonials[visibleTestimonials.length]);
  }

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);
  const currentSlide = Math.floor(currentIndex / itemsPerPage);

  return (
    <section id="testimony" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6 transform -rotate-3 hover:rotate-3 transition-transform">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase mb-2">
            Testimoni Klien
          </h2>
          <p className="text-4xl font-bold sm:text-5xl mb-4">
            Apa Kata Mereka Tentang Kami?
          </p>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-500/30 rounded-lg mb-3">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <p className="text-3xl font-bold mb-1">100+</p>
              <p className="text-sm text-gray-300">Klien Puas</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-yellow-500/30 rounded-lg mb-3">
                <Star className="w-8 h-8 text-yellow-300" />
              </div>
              <p className="text-3xl font-bold mb-1">4.9/5</p>
              <p className="text-sm text-gray-300">Rating</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-green-500/30 rounded-lg mb-3">
                <ThumbsUp className="w-8 h-8 text-green-300" />
              </div>
              <p className="text-3xl font-bold mb-1">98%</p>
              <p className="text-sm text-gray-300">Satisfaction</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-purple-500/30 rounded-lg mb-3">
                <TrendingUp className="w-8 h-8 text-purple-300" />
              </div>
              <p className="text-3xl font-bold mb-1">150%</p>
              <p className="text-sm text-gray-300">Avg Growth</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:shadow-2xl group relative"
                  onMouseEnter={() => setIsAutoPlay(false)}
                  onMouseLeave={() => setIsAutoPlay(true)}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote className="w-12 h-12 text-white" />
                  </div>

                  {/* Avatar & Info */}
                  <div className="flex items-start mb-4 relative z-10">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                      />
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Project Info */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="text-gray-400 mb-1">Project:</p>
                        <p className="text-blue-300 font-medium">
                          {testimonial.project}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 mb-1">Result:</p>
                        <p className="text-green-300 font-bold">
                          {testimonial.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlay(false);
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white p-3 rounded-full transition-all transform hover:scale-110 border border-white/30"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i * itemsPerPage);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlay(false);
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white p-3 rounded-full transition-all transform hover:scale-110 border border-white/30"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mb-8">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {isAutoPlay ? "⏸️ Pause Auto-play" : "▶️ Resume Auto-play"}
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                Ingin Menjadi Bagian dari Kisah Sukses Mereka?
              </h3>
              <p className="text-green-50 mb-6 max-w-2xl mx-auto">
                Bergabunglah dengan 100+ klien yang telah merasakan transformasi digital bersama kami. Konsultasi gratis untuk Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Halo, saya tertarik untuk memulai project bersama tim Anda setelah melihat testimoni klien yang menakjubkan!"
                    );
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${message}`,
                      "_blank"
                    );
                  }}
                  className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Mulai Project Anda Sekarang
                </button>
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Lihat Portfolio Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4 text-sm">
            Dipercaya oleh perusahaan terkemuka di Indonesia
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
            <div className="text-gray-400 font-semibold">TechIndo Solutions</div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-400 font-semibold">GrowthCo Indonesia</div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-400 font-semibold">StartupHub Asia</div>
            <div className="text-gray-400">•</div>
            <div className="text-gray-400 font-semibold">RetailMart Indonesia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;

