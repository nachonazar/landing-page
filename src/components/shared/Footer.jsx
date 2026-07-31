import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  const irArriba = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="w-full bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-10 pt-16 pb-8 max-w-[1120px] mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={irArriba}
          >
            <img
              src={logo}
              alt="logo landing page"
              className="w-auto h-12 object-contain invert"
            />
          </div>
          <p className="text-on-surface-variant text-center md:text-left max-w-xs">
            Fonoaudiología especializada para todas las etapas de la vida.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary transition-all"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary transition-all"
            href="#nosotros"
          >
            Nosotros
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary transition-all"
            href="#contacto"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-[1120px] mx-auto">
        <div className="text-xs text-on-surface-variant text-center px-6 md:px-10 py-6">
          © 2026 Voz &amp; Vida Fonoaudiología. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
