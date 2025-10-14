import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import "../components/animation.css"; // animasi blob & fade

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-130 animate-blob"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-130 animate-blob animation-delay-4000"></div>
      </div>

      {/* Konten Utama */}
      <div className="max-w-6xl mx-auto px-6 md:grid-cols-2 gap-16 relative flex items-center ">
        {/* Informasi Kontak */}
        <div className="animate-fadeSlideUp pl-24">
          <h2 className="text-5xl text-start font-bold mb-8">Contact</h2>

          <div className="space-y-6 text-gray-100">
            <div className="flex items-start text-start gap-4">
              <MapPin size={28} className="text-purple-300 mt-1" />
              <p>
                Gg. Butet, Jl. Kebagusan Raya, Kebagusan, Pasar Minggu, Jakarta
                Selatan
              </p>
            </div>

            <div className="flex items-start text-start gap-4">
              <Phone size={24} className="text-purple-300 mt-1" />
              <div>
                <p>No. Telp Utama: +62 21 7248002</p>
                <p>No. Telp Hunting: +62 21 7208793</p>
                <p>No. Fax: +62 21 7208782</p>
              </div>
            </div>

            <div className="flex items-start text-start gap-4">
              <Mail size={24} className="text-purple-300 mt-1" />
              <p>bd@h-digital.id</p>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl animate-fadeSlideUp text-start"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-black font-semibold text-start text-sm">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black placeholder-black"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block mb-2 text-black font-semibold text-start text-sm">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black placeholder-black"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-black font-semibold text-start text-sm">
              Email *
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black placeholder-black"
              placeholder="you@example.com"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-black font-semibold text-start text-sm">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black placeholder-black resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 px-8 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-300/30"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
