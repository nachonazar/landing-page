import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  // Configuración de react-hook-form mantenida del código original
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState(null); // "ok" | "error"

  const onSubmit = async (form) => {
    setEnviando(true);
    setEstado(null);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setEstado("ok");
      reset();
    } catch (error) {
      console.error(error);
      setEstado("error");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      className="py-20 px-6 md:px-12 bg-white scroll-mt-20"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            Atención Especializada
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Comencemos el camino hacia una mejor comunicación
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Nuestros especialistas están disponibles para brindarte la
            orientación que necesitas. Agenda tu valoración inicial ahora.
          </p>
        </div>

        {/* Contenedor Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Columna Izquierda: Formulario de Contacto (Orden 2 en móvil, 1 en desktop) */}
          <div className="bg-slate-50/50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Input: Nombre */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-semibold text-slate-700 uppercase tracking-wider"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.from_name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-200 focus:ring-blue-500"
                  }`}
                  {...register("from_name", {
                    required: "El nombre es un dato obligatorio",
                    minLength: {
                      value: 3,
                      message: "Debe tener al menos 3 caracteres",
                    },
                    maxLength: { value: 60, message: "Máximo 60 caracteres" },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                      message: "Solo letras y espacios",
                    },
                  })}
                />
                {errors.from_name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.from_name.message}
                  </span>
                )}
              </div>

              {/* Input: Email */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-semibold text-slate-700 uppercase tracking-wider"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.from_email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-200 focus:ring-blue-500"
                  }`}
                  {...register("from_email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ingresa un email válido",
                    },
                  })}
                />
                {errors.from_email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.from_email.message}
                  </span>
                )}
              </div>

              {/* Input: Teléfono */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-semibold text-slate-700 uppercase tracking-wider"
                  htmlFor="phone"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Ej: +56 9 1234 5678"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-200 focus:ring-blue-500"
                  }`}
                  {...register("phone", {
                    required: "El teléfono es obligatorio",
                    minLength: {
                      value: 8,
                      message: "Debe tener al menos 8 caracteres",
                    },
                    maxLength: { value: 20, message: "Máximo 20 caracteres" },
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: "Solo números, espacios y símbolos + - ()",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Textarea: Mensaje */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-semibold text-slate-700 uppercase tracking-wider"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="¿En qué podemos ayudarte?"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-200 focus:ring-blue-500"
                  }`}
                  {...register("message", {
                    required: "El mensaje es obligatorio",
                    minLength: {
                      value: 10,
                      message: "Debe tener al menos 10 caracteres",
                    },
                    maxLength: { value: 500, message: "Máximo 500 caracteres" },
                  })}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Feedback de envío */}
              {estado === "ok" && (
                <p className="text-teal-700 text-sm bg-teal-50 p-4 rounded-lg border border-teal-200">
                  ✅ Mensaje enviado correctamente. Te contactaremos pronto.
                </p>
              )}
              {estado === "error" && (
                <p className="text-red-700 text-sm bg-red-50 p-4 rounded-lg border border-red-200">
                  ❌ Ocurrió un error. Intenta de nuevo o contáctanos por
                  WhatsApp.
                </p>
              )}

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:active:scale-100"
              >
                {enviando ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>
            </form>
          </div>

          {/* Columna Derecha: Contacto Directo y Horarios (Orden 1 en móvil, 2 en desktop) */}
          <div className="space-y-8 order-1 lg:order-2 flex flex-col justify-center">
            {/* Tarjeta WhatsApp */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-2xl shadow-lg text-white relative overflow-hidden">
              {/* Círculo decorativo de fondo */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Atención Directa</h3>
                <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                  Resolución de dudas e inquietudes en tiempo real a través de
                  nuestro canal de WhatsApp profesional. Es el medio más rápido
                  para coordinar tu cita.
                </p>

                <a
                  href="https://wa.me/5493816016506" // Reemplaza por tu número
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 px-6 rounded-xl font-bold uppercase text-sm hover:bg-green-700 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl mb-6 active:scale-[0.98]"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  Contactar vía WhatsApp
                </a>

                {/* Divisor */}
                <div className="flex items-center gap-4 text-slate-500 mb-6">
                  <div className="h-px bg-slate-700 flex-1"></div>
                  <span className="text-xs uppercase font-semibold tracking-wider">
                    Otras Opciones
                  </span>
                  <div className="h-px bg-slate-700 flex-1"></div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[20px]">
                      call
                    </span>
                  </div>
                  <a
                    className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                    href="tel:+5493816016506"
                  >
                    Llamar ahora: +54 9 381 601 6506
                  </a>
                </div>
              </div>
            </div>

            {/* Mini Tarjeta de Horarios */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  schedule
                </span>
              </div>
              <div className="w-full">
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  Horario Semanal
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-2">
                    <span>Lunes a Viernes</span>
                    <span className="font-bold text-slate-900">
                      16:00 — 21:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 pt-1">
                    <span>Sábado — Domingo</span>
                    <span className="text-red-500 font-semibold">Cerrado</span>
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
