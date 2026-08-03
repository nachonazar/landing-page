import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import ScrollReveal from "../ui/ScrollReveal";

const servicios = [
  {
    icon: "child_care",
    title: "Terapia de Lenguaje Infantil",
    description:
      "Especializados en estimulación temprana y trastornos del desarrollo. Utilizamos el juego como herramienta terapéutica.",
    items: [
      { icon: "check_circle", text: "Estimulación temprana (0-3 años)" },
      { icon: "check_circle", text: "Dificultades en pronunciación" },
    ],
  },
  {
    icon: "elderly",
    title: "Rehabilitación Adultos",
    description:
      "Apoyo especializado para la recuperación de secuelas neurológicas post-ACV, traumatismos o enfermedades degenerativas.",
    items: [
      { icon: "language", text: "Afasias y recuperación de lenguaje" },
      { icon: "restaurant", text: "Disfagia (Manejo seguro de alimentación)" },
    ],
  },
  {
    icon: "record_voice_over",
    title: "Terapia Miofuncional",
    description:
      "Fortalecimiento de músculos y estructuras orofaciales para mejorar su función de manera eficiente y moderada.",
    items: [
      { icon: "check_circle", text: "Orientada a niños, jóvenes y adultos" },
      { icon: "check_circle", text: "Mejora de funciones orales" },
    ],
  },
];

const ServicioCard = ({ servicio }) => (
  <Card hover className="flex h-full flex-col">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <span className="material-symbols-outlined text-[24px]">
        {servicio.icon}
      </span>
    </div>

    <h3 className="font-headline-md text-headline-sm text-on-background mb-3">
      {servicio.title}
    </h3>

    <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow leading-relaxed">
      {servicio.description}
    </p>

    <ul className="mt-auto space-y-3 border-t border-outline-variant/50 pt-5">
      {servicio.items.map((item) => (
        <li
          key={item.text}
          className="flex items-start gap-3 font-body-md text-body-md text-on-surface"
        >
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] text-secondary">
            {item.icon}
          </span>
          {item.text}
        </li>
      ))}
    </ul>
  </Card>
);

const Servicios = () => {
  return (
    <section
      className="section-padding scroll-mt-28 bg-surface-container-lowest"
      id="servicios"
    >
      <Container>
        <ScrollReveal>
          <SectionHeader
            badge="Cuidado Especializado"
            title="Servicios de Fonoaudiología"
            description="Brindamos soluciones terapéuticas personalizadas para cada etapa de la vida, garantizando un acompañamiento integral."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <ScrollReveal
              key={servicio.title}
              className="h-full"
              delay={index * 80}
            >
              <ServicioCard servicio={servicio} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Servicios;
