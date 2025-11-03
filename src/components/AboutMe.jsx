import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="relative py-20 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute top-10 left-4 md:top-20 md:left-10 w-64 h-64 md:w-96 md:h-96 
                        bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob"
        ></div>
        <div
          className="absolute top-10 right-10 md:top-20 md:right-40 w-64 h-64 md:w-96 md:h-96 
                        bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
        ></div>
        <div
          className="absolute -bottom-8 left-8 md:-bottom-8 md:left-20 w-64 h-64 md:w-96 md:h-96 
                        bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-4000"
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg mb-6">
          Tentang Kami
        </h2>
        <p className="text-black leading-relaxed">
          Kami <strong>Nocturnity Creative</strong> yaitu sebuah creative agency
          yang fokus membantu brand membangun identitas digital lewat desain
          grafis, video editing, hingga strategi konten.
          <br />
          <br />
          Buat kami, desain bukan cuma soal estetika. Desain adalah cara brand
          berbicara, membangun citra, dan mewakilkan audiensnya melalui pesan
          komunikasi. Lewat Nocturnity Creative, kami hadir untuk:
          <br />
          <br />
          ✅ Bikin konten sosial media lebih menarik & konsisten
          <br />
          ✅ Menghidupkan brand lewat desain & video yang engaging
          <br />
          ✅ Bantu kamu punya strategi konten yang relevan
          <br />
          <br />✨ Ini baru langkah pertama kami. Yuk ikutin perjalanan{" "}
          <span className="font-semibold">@NocturnityCreative</span> 🚀
          <br />
          Dapatkan insight desain, tips branding, dan lihat karya-karya terbaru
          dari tim kami.
          <br />
          👉 Ready to grow with us? DM kami sekarang!
          <br />
          <br />
          <span className="text-black font-semibold">
            #creativeagency #socialmediadesign #videoediting #brandingagency
            #NocturnityCreative
          </span>
        </p>
      </div>
    </section>
  );
}
