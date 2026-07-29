import React from "react";

const Servicios = () => {
  return (
    <section id="servicios" className="pb-section-gap scroll-mt-20">
      {/* Hero Section */}
      <div className="max-w-container-max mx-auto px-margin-desktop mt-12 mb-section-gap text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-md mb-4 uppercase tracking-wider">
          Cuidado Especializado
        </span>
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-6">
          Servicios de Fonoaudiología
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Brindamos soluciones terapéuticas personalizadas para cada etapa de la
          vida.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col gap-12">
          {/* Terapia de Lenguaje Infantil */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden ambient-shadow h-[400px] bg-surface-variant">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="Fonoaudióloga trabajando con un niño en una sala de terapia lúdica"
              />
            </div>
            <div className="lg:col-span-5 p-8 bg-white rounded-3xl border border-outline-variant/30 ambient-shadow hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">
                  child_care
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Terapia de Lenguaje Infantil
                </h2>
              </div>
              <p className="text-on-surface-variant mb-6 font-body-md">
                Especializados en estimulación temprana y trastornos del
                desarrollo. Utilizamos el juego como herramienta terapéutica
                para que los niños alcancen sus hitos comunicativos de forma
                natural.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    check_circle
                  </span>
                  <span className="text-on-surface">
                    Estimulación temprana (0-3 años)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    check_circle
                  </span>
                  <span className="text-on-surface">
                    Dificultades en pronunciación (Articulación)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    check_circle
                  </span>
                  <span className="text-on-surface">
                    Trastornos del espectro autista
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Terapia Miofuncional */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 p-8 bg-white rounded-3xl border border-outline-variant/30 ambient-shadow hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">
                  mic
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Terapia Miofuncional
                </h2>
              </div>
              <p className="text-on-surface-variant mb-6 font-body-md">
                La terapia Miofuncional consiste en fortalecer musculos. Su
                objetivo es mejorar la funcion de las estructuras orofaciales
                para que trabajen de manera moderada y eficiente. Orientada a
                niños, jovenes y adultos.
              </p>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 rounded-3xl overflow-hidden ambient-shadow h-[400px] bg-surface-variant">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1610093351747-13a89dd58f42?auto=format&fit=crop&q=80&w=800"
                alt="Mujer practicando ejercicios vocales en una clínica moderna"
              />
            </div>
          </div>

          {/* Rehabilitación Adultos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden ambient-shadow h-[400px] bg-surface-variant">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1576765607924-3f7b8b3f7a1e?auto=format&fit=crop&q=80&w=800"
                alt="Fonoaudióloga trabajando con un paciente adulto mayor en rehabilitación"
              />
            </div>
            <div className="lg:col-span-5 p-8 bg-white rounded-3xl border border-outline-variant/30 ambient-shadow hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">
                  neurology
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Rehabilitación Adultos
                </h2>
              </div>
              <p className="text-on-surface-variant mb-6 font-body-md">
                Apoyo especializado para la recuperación de secuelas
                neurológicas post-ACV, traumatismos o enfermedades
                degenerativas. Foco en comunicación y deglución segura.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    record_voice_over
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Afasias</p>
                    <p className="text-sm text-tertiary">
                      Recuperación del lenguaje comprensivo y expresivo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    restaurant
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Disfagia</p>
                    <p className="text-sm text-tertiary">
                      Manejo seguro de la alimentación y deglución.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
