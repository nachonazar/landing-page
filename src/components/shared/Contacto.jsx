import React from "react";

const Contacto = () => {
  return (
    <section id="contacto" className="scroll-mt-20">
      {/* Hero Section */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12 md:pt-24 mb-16 md:mb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6 block">
            Atención Especializada
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface mb-8 leading-[1.1] font-headline-xl">
            Comencemos el camino hacia una mejor comunicación
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body-lg leading-relaxed max-w-2xl mx-auto">
            Nuestros especialistas están disponibles para brindarte la
            orientación que necesitas. Agenda tu valoración inicial ahora.
          </p>
        </div>
      </div>

      {/* Main High-Conversion Area */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-10 items-start max-w-4xl mx-auto">
          {/* Primary CTA: WhatsApp */}
          <div className="glass-card p-8 md:p-14 rounded-3xl pro-shadow border border-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <span className="material-symbols-outlined text-[12rem] text-secondary">
                chat_bubble
              </span>
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl font-bold text-on-surface mb-4 font-headline-lg">
                Atención Directa
              </h3>
              <p className="text-lg text-on-surface-variant mb-12 max-w-xl">
                Resolución de dudas e inquietudes en tiempo real a través de
                nuestro canal de WhatsApp profesional. Es el medio más rápido
                para coordinar tu cita.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <a
                  className="w-full md:w-auto bg-secondary text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-on-secondary-container shadow-xl hover:shadow-secondary/25 transition-all flex items-center justify-center gap-4 active:scale-[0.98]"
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-3xl">
                    chat
                  </span>
                  Contactar vía WhatsApp
                </a>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold mb-2">
                    Otras opciones
                  </p>

                  <a
                    className="flex items-center gap-3 text-primary hover:text-primary-container transition-all group font-bold"
                    href="tel:+56912345678"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <span className="material-symbols-outlined text-lg">
                        call
                      </span>
                    </div>
                    <span>Llamar ahora: +56 9 1234 5678</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Info Grid: Professional Anchors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Schedule */}
            <div className="glass-card p-8 rounded-2xl border border-surface-variant/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                </div>
                <h4 className="text-xl font-bold text-on-surface">
                  Horario Semanal
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-surface-variant/30">
                  <span className="text-on-surface-variant">
                    Lunes a Viernes
                  </span>
                  <span className="font-bold text-on-surface">
                    16:00 — 21:00
                  </span>
                </div>
                <div className="flex justify-between items-center text-error/60">
                  <span>Sábado — Domingo</span>
                  <span className="font-bold">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Features/Trust */}
            <div className="glass-card p-8 rounded-2xl border border-surface-variant/50 flex flex-col justify-center bg-primary-container/[0.02]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    clinical_notes
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">
                      Evaluación Integral
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Diagnósticos precisos para tratamientos efectivos.
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

export default Contacto;
