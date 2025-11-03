import React, { useState } from "react";
import { Palette, Video, MonitorPlay, Megaphone } from "lucide-react";
import "./animation.css"; // tambahkan file CSS ini (lihat bawah)

const servicesData = [
  {
    id: 1,
    icon: <Palette size={48} />,
    title: "Social Media Design",
    desc: "Membuat desain visual kreatif untuk branding dan promosi via media sosial yang menarik dan profesional.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    icon: <Video size={48} />,
    title: "Produksi Video",
    desc: "Video profesional untuk kebutuhan iklan, konten, dan profil perusahaan dengan kualitas sinematik.",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    icon: <MonitorPlay size={48} />,
    title: "Content Strategy",
    desc: "Perencanaan konten yang maksimal dapat mencapai tujuan bisnis yang lebih sempurna.",
    image:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    icon: <Megaphone size={48} />,
    title: "Branding Support",
    desc: "Membantu pemasaran bisnis agar dapat menjadikan merek mereka sebagai highlight di pasaran.",
    image:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const active = servicesData.find((srv) => srv.id === activeService);
  const isEven = active.id % 2 === 0;

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            Layanan Kami
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan digital dan kreatif Anda
          </p>
        </div>

        {/* Tombol Tab */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {servicesData.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveService(srv.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeService === srv.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {srv.icon}
              <span>{srv.title}</span>
            </button>
          ))}
        </div>

        {/* Content (satu service saja ditampilkan) */}
        <div
          key={active.id}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 animate-fadeSlideUp`}
        >
          {!isEven ? (
            <>
              {/* Gambar kiri */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-out">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Teks kanan */}
              <div className="text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-blue-400">{active.icon}</div>
                  <div>
                    <h3 className="text-4xl font-bold relative pb-2 inline-block">
                      {active.title}
                      <span className="absolute left-0 bottom-0 w-16 h-[3px] bg-blue-500 rounded-full"></span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {active.desc}
                </p>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Teks kiri */}
              <div className="text-right order-2 md:order-1">
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div>
                    <h3 className="text-4xl font-bold relative pb-2 inline-block">
                      {active.title}
                      <span className="absolute right-0 bottom-0 w-16 h-[3px] bg-blue-500 rounded-full"></span>
                    </h3>
                  </div>
                  <div className="text-blue-400">{active.icon}</div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {active.desc}
                </p>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Gambar kanan */}
              <div className="rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 transform transition-all duration-700 ease-out">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
