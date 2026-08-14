import React, { Suspense, lazy } from "react";
import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

const Contacto = lazy(() => import("../shared/Contacto"));

const Inicio = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-28 gradient-mesh">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <ScrollReveal className="z-10 flex-1 text-center lg:text-left">
              <Badge className="mb-6">Fonoaudiología de Vanguardia</Badge>

              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-6 leading-[1.1] tracking-tight">
                Mejora tu comunicación,{" "}
                <span className="text-gradient-primary">
                  transforma tu vida
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed lg:mx-0">
                Acompañamos tu desarrollo y bienestar mediante terapias
                personalizadas, con un enfoque clínico humano.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <Button as="a" href="#contacto" variant="primary">
                  Agendar Consulta
                </Button>

                <Button as="a" href="#servicios" variant="secondary">
                  Ver Servicios
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="relative w-full flex-1 lg:max-w-[520px]"
              delay={150}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-sm" />
              <div className="relative overflow-hidden rounded-2xl border border-outline-variant/50 pro-shadow-lg">
                <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-square">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                    alt="Fonoaudióloga trabajando con paciente"
                    width="800"
                    height="1000"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <Servicios />
      <Nosotros />
      <Suspense fallback={null}>
        <Contacto />
      </Suspense>
    </>
  );
};

export default Inicio;
