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
            <div className="flex max-w-sm flex-col items-center gap-5 md:items-start">
              <button
                className="flex cursor-pointer items-center gap-2 transition-opacity duration-200 hover:opacity-80 appearance-none bg-transparent border-none p-0"
                onClick={irArriba}
                aria-label="Ir al inicio"
              >
                <img
                  src={logo}
                  alt="Voz & Vida Fonoaudiología"
                  className="h-11 w-auto object-contain invert"
                  width="400"
                  height="102"
                  loading="lazy"
                />
              </button>

              <p className="text-center font-body-md text-body-md leading-relaxed text-inverse-on-surface/80 md:text-left">
                Fonoaudiología especializada para todas las etapas de la vida.
              </p>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://instagram.com/natalia_rodriguez2790/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir en Instagram"
                  className="text-inverse-on-surface/60 transition-colors duration-200 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/natalia.rodriguez.37201901"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir en Facebook"
                  className="text-inverse-on-surface/60 transition-colors duration-200 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <nav
              className="flex flex-wrap justify-center gap-x-8 gap-y-3"
              aria-label="Enlaces del pie de página"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  className="cursor-pointer font-label-md text-label-md text-inverse-on-surface/80 transition-colors duration-200 hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </ScrollReveal>
      </Container>

      <div className="border-t border-inverse-on-surface/20">
        <Container className="py-6">
          <p className="text-center font-caption text-caption text-inverse-on-surface/80">
            © {new Date().getFullYear()} Voz &amp; Vida Fonoaudiología. Todos
            los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
