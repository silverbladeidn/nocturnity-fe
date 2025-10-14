import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Hero() {
  // Fungsi untuk scroll ke section berikutnya
  const handleScroll = () => {
    const nextSection = document.getElementById("services"); // ubah ID sesuai section berikutnya
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // kalau bukan di halaman home, pindah dulu ke home
      navigate("/");

      // kasih jeda sedikit agar halaman home sempat render dulu
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      // kalau sudah di home, langsung scroll
      const section = document.querySelector(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start text-start overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 -z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lingkaran Latar Animasi */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-100 animate-blob"></div>

        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-100 animate-blob animation-delay-2000"></div>

        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-100 animate-blob animation-delay-4000"></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 pl-[200px] pr-4 max-w-3xl w-full">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Nocturnity
          <br />
          Creative
        </h1>

        <p className="text-lg md:text-xl text-white mb-8 max-w-xl leading-relaxed drop-shadow-md">
          Segalanya dalam meningkatkan keuntungan dan popularitas, perlu adanya
          unsur pemasaran yang kreatif, inovatif, tapi profesional. Dengan
          Nocturnity, kita bisa membuat sebuah wajah untuk meraih popularitas
          dan keuntungan.
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <button
            onClick={() => handleScrollTo("#services")}
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Mulai Sekarang
          </button>

          <button
            onClick={() => handleScrollTo("#portfolio")}
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* Scroll Indicator (ikon panah) */}
      <button
        onClick={handleScroll}
        aria-label="Scroll ke bawah"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
