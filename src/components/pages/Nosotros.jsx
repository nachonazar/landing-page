import React from "react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import ScrollReveal from "../ui/ScrollReveal";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="section-padding scroll-mt-28 bg-surface-container-low"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="relative lg:col-span-5">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/50 pro-shadow-lg bg-surface-container">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800"
                alt="Retrato profesional de fonoaudióloga en su consultorio"
                width="800"
                height="1000"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="space-y-6 lg:col-span-7" delay={120}>
            <Badge>Fonoaudióloga Clínica</Badge>

            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background leading-tight tracking-tight">
              Hola, soy la{" "}
              <span className="text-gradient-primary">
                Lic. en Fonoaudiología Natalia Rodriguez
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
