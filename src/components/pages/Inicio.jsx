import React from "react";
import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Contacto from "../shared/Contacto";

const Inicio = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 md:px-0">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
              Fonoaudiología de Vanguardia
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-on-background mb-6 leading-tight">
              Mejora tu comunicación, <br className="hidden md:block" />{" "}
              <span className="text-primary">transforma tu vida</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto md:mx-0">
              Acompañamos tu desarrollo y bienestar mediante terapias
              personalizadas, con un enfoque clínico humano.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-primary text-on-primary font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Reservar Cita
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold px-10 py-4 rounded-xl hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2">
                Ver Programas
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px]">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3"></div>
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl rotate-2"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="Fonoaudióloga trabajando con paciente"
              />
            </div>
          </div>
        </div>
      </section>

      <Servicios />
      <Nosotros />
      <Contacto />
    </main>
  );
};

export default Inicio;
