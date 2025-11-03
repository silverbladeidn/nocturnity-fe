import React from "react";
import { MapPin, Mail } from "lucide-react";
import "../components/animation.css"; // animasi blob & fade
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pt-20 pb-12 md:py-24 text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-4 w-64 h-64 md:top-20 md:left-10 md:w-96 md:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-130 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 md:top-20 md:right-40 md:w-96 md:h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 w-64 h-64 md:-bottom-8 md:left-20 md:w-96 md:h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-130 animate-blob animation-delay-4000"></div>
      </div>

      {/* Konten Utama */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Informasi Kontak */}
        <div className="animate-fadeSlideUp w-full lg:w-1/2 lg:pl-8 xl:pl-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-start font-bold mb-6 md:mb-8">
            Kontak Kami
          </h2>

          <div className="space-y-4 md:space-y-6 text-gray-100">
            <div className="flex items-start text-start  gap-3 md:gap-4">
              <MapPin
                size={24}
                className="text-blue-300 mt-1 flex-shrink-0 w-6 h-6 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">
                Gg. Butet, Jl. Kebagusan Raya, Kebagusan, Pasar Minggu, Jakarta
                Selatan
              </p>
            </div>

            <div className="flex items-start text-start gap-3 md:gap-4">
              <FaWhatsapp
                size={20}
                className="text-blue-300 mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
              />
              <div className="text-sm md:text-base">
                <a
                  href="https://wa.me/6285189953855?text=Halo,%20saya%20ingin%20bertanya%20tentang%20desain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-black transition-colors"
                >
                  +62 851-8995-3855
                </a>{" "}
              </div>
            </div>

            <div className="flex items-start text-start gap-3 md:gap-4">
              <Mail
                size={20}
                className="text-blue-300 mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
              />
              <a
                href="mailto:nocturnity.creative@gmail.com"
                className="text-sm md:text-base hover:text-black transition-colors"
              >
                nocturnity.creative@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="w-full lg:w-[70%] ml-auto bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 animate-fadeSlideUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kolom kiri: input */}
            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-black text-start font-semibold text-sm md:text-base">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/20 border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-300"
                  placeholder="Tuliskan nama anda"
                />
              </div>

              <div>
                <label className="block mb-2 text-black text-start font-semibold text-sm md:text-base">
                  Domisili
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/20 border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-300"
                  placeholder="Tuliskan domisili anda"
                />
              </div>

              <div>
                <label className="block mb-2 text-black text-start font-semibold text-sm md:text-base">
                  Jenis Usaha
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/20 border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-300"
                  placeholder="Tuliskan jenis usaha anda"
                />
              </div>
            </div>

            {/* Kolom kanan: checkbox kategori */}
            <div className="bg-white/20 rounded-xl border border-white/30 p-6 flex flex-col justify-center">
              <label className="block mb-4 text-black font-semibold text-sm md:text-base">
                Pilih Kategori
              </label>

              <div className="flex flex-col gap-4 text-black text-sm md:text-base">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  Growth
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  Starter (Discuss More)
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                  Scaleup
                </label>
              </div>
            </div>
          </div>

          {/* Tombol submit */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-300  text-black 
                 font-semibold rounded-full hover:bg-blue-500
                 transition-all shadow-lg hover:shadow-blue-400/40"
            >
              Kirim Data
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
