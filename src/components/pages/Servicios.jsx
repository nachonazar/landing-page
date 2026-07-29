import React from "react";

const Servicios = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-12" id="servicios">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            Cuidado Especializado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Servicios de Fonoaudiología
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Brindamos soluciones terapéuticas personalizadas para cada etapa de
            la vida, garantizando un acompañamiento integral.
          </p>
        </div>

        {/* Contenedor Grid (Tarjetas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1: Terapia de Lenguaje Infantil */}
          <div className="relative bg-slate-50/50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl hover:z-10">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
              <span className="material-symbols-outlined text-[28px]">
                child_care
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Terapia de Lenguaje Infantil
            </h3>
            <p className="text-sm text-slate-600 mb-6 flex-grow">
              Especializados en estimulación temprana y trastornos del
              desarrollo. Utilizamos el juego como herramienta terapéutica.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                  check_circle
                </span>
                Estimulación temprana (0-3 años)
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                  check_circle
                </span>
                Dificultades en pronunciación
              </li>
            </ul>
          </div>

          {/* Tarjeta 2: Rehabilitación Adultos */}
          <div className="relative bg-slate-50/50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl hover:z-10">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
              <span className="material-symbols-outlined text-[28px]">
                elderly
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Rehabilitación Adultos
            </h3>
            <p className="text-sm text-slate-600 mb-6 flex-grow">
              Apoyo especializado para la recuperación de secuelas neurológicas
              post-ACV, traumatismos o enfermedades degenerativas.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                  language
                </span>
                Afasias y recuperación de lenguaje
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                  restaurant
                </span>
                Disfagia (Manejo seguro de alimentación)
              </li>
            </ul>
          </div>

          {/* Tarjeta 3: Terapia Miofuncional */}
          <div className="relative bg-slate-50/50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl hover:z-10">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
              <span className="material-symbols-outlined text-[28px]">
                record_voice_over
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Terapia Miofuncional
            </h3>
            <p className="text-sm text-slate-600 mb-6 flex-grow">
              Fortalecimiento de músculos y estructuras orofaciales para mejorar
              su función de manera eficiente y moderada.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                  check_circle
                </span>
                Orientada a niños, jóvenes y adultos
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                  check_circle
                </span>
                Mejora de funciones orales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
