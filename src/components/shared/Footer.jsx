import React from "react";

const Footer = () => {
  const irArriba = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="w-full bg-surface-container-highest">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-16 max-w-[1120px] mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={irArriba}
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              record_voice_over
            </span>
            <span className="font-bold text-2xl text-primary">
              Voz &amp; Vida
            </span>
          </div>
          <p className="text-on-surface-variant text-center md:text-left max-w-xs">
            Fonoaudiología especializada para todas las etapas de la vida.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary underline transition-all"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary underline transition-all"
            href="#nosotros"
          >
            Nosotros
          </a>
          <a
            className="font-semibold text-on-surface-variant hover:text-secondary underline transition-all"
            href="#contacto"
          >
            Contacto
          </a>
        </div>
        <div className="text-xs text-on-surface-variant mt-8 md:mt-0">
          © 2026 Voz &amp; Vida Fonoaudiología. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
