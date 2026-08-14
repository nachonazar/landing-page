import React from "react";
import logo from "../../assets/logo_landingPage.webp";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";

const footerLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  const irArriba = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t border-inverse-on-surface/10 bg-inverse-surface">
      <Container className="py-14 md:py-16">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
            <div className="flex max-w-sm flex-col items-center gap-4 md:items-start">
              <div
                className="flex cursor-pointer items-center gap-2 transition-opacity duration-200 hover:opacity-80"
                onClick={irArriba}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && irArriba()}
                aria-label="Ir al inicio"
              >
                <img
                  src={logo}
                  alt="logo landing page"
                  className="h-11 w-auto object-contain invert"
                  width="400"
                  height="102"
                  loading="lazy"
                />
              </div>
              <p className="text-center font-body-md text-body-md leading-relaxed text-inverse-on-surface/60 md:text-left">
                Fonoaudiología especializada para todas las etapas de la vida.
              </p>
            </div>

            <nav
              className="flex flex-wrap justify-center gap-x-8 gap-y-3"
              aria-label="Enlaces del pie de página"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  className="cursor-pointer font-label-md text-label-md text-inverse-on-surface/70 transition-colors duration-200 hover:text-inverse-on-surface"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </ScrollReveal>
      </Container>

      <div className="border-t border-inverse-on-surface/10">
        <Container className="py-6">
          <p className="text-center font-caption text-caption text-inverse-on-surface/50">
            © 2026 Voz &amp; Vida Fonoaudiología. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
