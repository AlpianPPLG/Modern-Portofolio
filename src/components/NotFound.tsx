import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-none animate-pulse">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AlertCircle className="w-20 h-20 text-red-500 animate-bounce" />
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Oops! Sepertinya halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>

        {/* Decorative Elements */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
            <Search className="w-6 h-6" />
            <span className="text-sm">Halaman tidak dapat ditemukan</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali
          </button>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Butuh Bantuan?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Jika Anda mengalami masalah atau memerlukan bantuan, silakan hubungi kami:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Hubungi Kami
            </a>
            <a
              href="https://wa.me/6281258441941?text=Halo,%20saya%20mengalami%20masalah%20dengan%20halaman%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Atau kunjungi halaman populer:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/#about" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Tentang Kami
            </a>
            <span className="text-gray-400">•</span>
            <a href="/#services" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Layanan
            </a>
            <span className="text-gray-400">•</span>
            <a href="/#portfolio" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Portfolio
            </a>
            <span className="text-gray-400">•</span>
            <a href="/#pricing" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Harga
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
