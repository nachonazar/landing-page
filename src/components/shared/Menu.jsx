import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const irArriba = () => {
    window.scrollTo(0, 0);
    setMenuAbierto(false);
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-surface shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-[1120px] mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer transition-all duration-200"
          onClick={irArriba}
        >
          <img
            src={logo}
            alt="logo landing page"
            className="w-auto h-12 object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-8">
          <a
            className="font-semibold text-primary border-b-2 border-primary pb-1"
            href="#"
            onClick={irArriba}
          >
            Inicio
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary transition-colors"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary transition-colors"
            href="#nosotros"
          >
            Nosotros
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary transition-colors"
            href="#contacto"
          >
            Contacto
          </a>
        </nav>

        <button
          className="md:hidden text-primary"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-3xl">
            {menuAbierto ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Menú mobile */}
      {menuAbierto && (
        <nav className="md:hidden flex flex-col items-center gap-4 bg-surface px-6 py-4 shadow-sm">
          <a className="font-semibold text-primary" href="#" onClick={irArriba}>
            Inicio
          </a>
          <a
            className="font-semibold text-on-surface-variant"
            href="#servicios"
            onClick={() => setMenuAbierto(false)}
          >
            Servicios
          </a>
          <a
            className="font-semibold text-on-surface-variant"
            href="#nosotros"
            onClick={() => setMenuAbierto(false)}
          >
            Nosotros
          </a>
          <a
            className="font-semibold text-on-surface-variant"
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
};

export default Menu;
