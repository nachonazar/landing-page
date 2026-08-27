import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_landingPage.webp";
import Container from "../ui/Container";

const navLinks = [
  { label: "Inicio", href: "#", action: "top" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobremi" },
  { label: "Contacto", href: "#contacto" },
];

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irArriba = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuAbierto(false);
  };

  const handleNavClick = (link) => {
    if (link.action === "top") {
      irArriba();
    } else {
      setMenuAbierto(false);
    }
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] pt-4 px-4 md:px-6 transition-all duration-300"
      role="banner"
    >
      <Container className="pointer-events-auto">
        <div
          className={`flex items-center justify-between rounded-full border border-outline-variant/50 px-6 py-3 backdrop-blur-md transition-all duration-300 md:px-8 ${
            scrolled
              ? "bg-white/95 shadow-md shadow-black/5"
              : "bg-white/80 shadow-sm"
          }`}
        >
          <button
            className="flex cursor-pointer items-center gap-2 transition-opacity duration-200 hover:opacity-80 appearance-none bg-transparent border-none p-0"
            onClick={irArriba}
            aria-label="Ir al inicio"
          >
            <img
              src={logo}
              alt="Voz & Vida Fonoaudiología"
              className="h-9 w-auto object-contain md:h-10"
              width="400"
              height="102"
              fetchPriority="high"
            />
          </button>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  link.action === "top"
                    ? "text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-background"
                }`}
                href={link.href}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="cursor-pointer rounded-full p-2 text-primary transition-colors hover:bg-surface-container-low md:hidden flex items-center justify-center"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            <span className="material-symbols-outlined text-2xl leading-none">
              {menuAbierto ? "close" : "menu"}
            </span>
          </button>
        </div>
      </Container>

      {/* Menú Móvil */}
      {menuAbierto && (
        <Container className="pointer-events-auto mt-2 md:hidden relative z-[99]">
          <nav
            className="flex flex-col gap-1 rounded-2xl border border-outline-variant/50 bg-white/95 p-4 shadow-lg backdrop-blur-md"
            aria-label="Navegación móvil"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  link.action === "top"
                    ? "bg-primary/5 text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
                href={link.href}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      )}
    </header>
  );
};

export default Menu;
