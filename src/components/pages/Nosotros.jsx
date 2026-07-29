import React from "react";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="max-w-container-max mx-auto px-margin-desktop py-section-gap scroll-mt-20"
    >
      {/* Hero Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap items-center mb-section-gap">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden ambient-shadow bg-surface-container">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800"
              alt="Retrato profesional de fonoaudióloga en su consultorio"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container opacity-20 rounded-full blur-3xl -z-10"></div>
        </div>
        <div className="lg:col-span-7 space-y-gutter">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-md text-label-md">
            Fonoaudióloga Clínica
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-background leading-tight">
            Hola, soy la{" "}
            <span className="text-primary">
              Lic. en Fonoaudiología Natalia Rodriguez
            </span>
          </h2>
          <div className="space-y-4 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
            <p>
              Dedicada a la rehabilitación del lenguaje y la comunicación, para
              cada paciente con necesidades diferentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
