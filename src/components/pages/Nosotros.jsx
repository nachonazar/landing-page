import React from "react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import ScrollReveal from "../ui/ScrollReveal";

import fotoNosotros400 from "../../assets/nosotros-400.webp";
import fotoNosotros800 from "../../assets/nosotros-800.webp";
import fotoNosotros1200 from "../../assets/nosotros-1200.webp";

const Nosotros = () => {
  return (
    <section
      id="sobremi"
      className="section-padding scroll-mt-28 bg-surface-container-low"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="relative lg:col-span-5">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/50 pro-shadow-lg bg-surface-container">
              <img
                className="h-full w-full object-cover"
                src={fotoNosotros800}
                srcSet={`
                  ${fotoNosotros400} 400w,
                  ${fotoNosotros800} 800w,
                  ${fotoNosotros1200} 1200w
                `}
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt="Retrato profesional de fonoaudióloga en su consultorio"
                width="800"
                height="1000"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="space-y-6 lg:col-span-7" delay={120}>
            <Badge>Fonoaudióloga</Badge>

            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background leading-tight tracking-tight">
              Hola, soy la{" "}
              <span className="text-gradient-primary">
                Lic. en Fonoaudiología Natalia Rodríguez
              </span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Dedicada a la rehabilitación del lenguaje y la comunicación, para
              cada paciente con necesidades diferentes.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Nosotros;
