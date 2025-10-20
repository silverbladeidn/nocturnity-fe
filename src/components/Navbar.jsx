import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
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
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <button
          onClick={() => handleScrollTo("#hero")}
          className="flex items-center space-x-3 group focus:outline-none"
        >
          <img
            src="/NocturnityLogo.png" // ganti dengan logo di public/
            alt="Nocturnity Logo"
            className="h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition">
            Nocturnity
          </h1>
        </button>
        <ul className="flex space-x-8 font-medium">
          <li></li>
          <li>
            <button
              onClick={() => handleScrollTo("#services")}
              className="hover:text-purple-400 transition focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none"
            >
              Layanan
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("#portfolio")}
              className="hover:text-purple-400 transition focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none"
            >
              Portfolio
            </button>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 hover:text-white transition-colors focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none"
            >
              Kontak Kami
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
