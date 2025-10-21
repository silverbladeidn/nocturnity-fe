import React from "react";

const images = [
  { id: 1, src: "/img/gallery1.jpg", title: "Aktivitas A" },
  { id: 2, src: "/img/gallery2.jpg", title: "Aktivitas B" },
  { id: 3, src: "/img/gallery3.jpg", title: "Aktivitas C" },
  { id: 4, src: "/img/gallery4.jpg", title: "Aktivitas D" },
  { id: 5, src: "/img/gallery5.jpg", title: "Aktivitas E" },
  { id: 6, src: "/img/gallery6.jpg", title: "Aktivitas F" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-20 text-white overflow-hidden"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-blue-700 opacity-90 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-4000"></div>
      </div>

      {/* Title Section */}
      <div className="relative text-center mb-14 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Portfolio Kami
        </h2>
        <p className="text-gray-100 mt-2">
          Dokumentasi segala hasil karya milik Nocturnity Creative
        </p>
      </div>

      {/* Image Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10 px-6 max-w-6xl mx-auto">
        {images.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl shadow-md bg-white"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
