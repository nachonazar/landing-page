import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "../../utils/constants";

const inputBase =
  "w-full rounded-xl border bg-surface-container-lowest px-4 py-3 font-body-md text-body-md text-on-background placeholder:text-on-surface-variant/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:border-transparent";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState(null);

  const onSubmit = async (form) => {
    if (form.botcheck) return;

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

  const fieldClass = (hasError) =>
    `${inputBase} ${hasError ? "border-error focus:ring-error" : "border-outline-variant focus:ring-primary"}`;

  return (
    <section
      className="section-padding scroll-mt-28 bg-surface-container-low"
      id="contacto"
    >
      <Container className="space-y-12 md:space-y-16">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-outline-variant/40 bg-inverse-surface px-6 py-12 md:px-12 md:py-16 pro-shadow-lg">
            <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-40" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <Badge className="mb-5 border-primary-fixed/20 bg-primary/10 text-primary-fixed">
                Atención Especializada
              </Badge>

              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-inverse-on-surface mb-4 tracking-tight">
                Comencemos el camino hacia una mejor comunicación
              </h2>

              <p className="font-body-lg text-body-lg text-inverse-on-surface/70 mb-10 leading-relaxed">
                Estoy disponible para brindarte la orientación que necesitas.
                Agenda tu valoración inicial ahora.
              </p>

              <div className="flex flex-col items-center gap-4">
                <Button
                  as="a"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.78-4.15-4.92-4.34-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.14.44.2.5.32.07.11.07.65-.17 1.33z" />
                  </svg>
                  Contactar por WhatsApp
                </Button>

                <a
                  href={`tel:${WHATSAPP_NUMBER.replace(/\s+/g, "")}`}
                  className="inline-flex cursor-pointer items-center gap-2 font-body-md text-body-md text-inverse-on-surface/55 transition-colors duration-200 hover:text-inverse-on-surface/80"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  {WHATSAPP_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal className="order-2 h-full lg:order-1" delay={100}>
            <Card className="h-full">
              <h3 className="font-headline-md text-headline-sm text-on-background mb-6">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                  type="text"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                  {...register("botcheck")}
                />

                <div className="space-y-2">
                  <label
                    className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    htmlFor="name"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    className={fieldClass(errors.from_name)}
                    aria-invalid={errors.from_name ? "true" : "false"}
                    aria-describedby={
                      errors.from_name ? "name-error" : undefined
                    }
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
                    <span
                      id="name-error"
                      role="alert"
                      className="font-caption text-caption text-error mt-1 block"
                    >
                      {errors.from_name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className={fieldClass(errors.from_email)}
                    aria-invalid={errors.from_email ? "true" : "false"}
                    aria-describedby={
                      errors.from_email ? "email-error" : undefined
                    }
                    {...register("from_email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Ingresa un email válido",
                      },
                    })}
                  />
                  {errors.from_email && (
                    <span
                      id="email-error"
                      role="alert"
                      className="font-caption text-caption text-error mt-1 block"
                    >
                      {errors.from_email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    htmlFor="phone"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Ej: +54 9 381 123 4567"
                    className={fieldClass(errors.phone)}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
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
                    <span
                      id="phone-error"
                      role="alert"
                      className="font-caption text-caption text-error mt-1 block"
                    >
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                    htmlFor="message"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="¿En qué puedo ayudarte?"
                    className={`${fieldClass(errors.message)} resize-none`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    {...register("message", {
                      required: "El mensaje es obligatorio",
                      minLength: {
                        value: 10,
                        message: "Debe tener al menos 10 caracteres",
                      },
                      maxLength: {
                        value: 500,
                        message: "Máximo 500 caracteres",
                      },
                    })}
                  ></textarea>
                  {errors.message && (
                    <span
                      id="message-error"
                      role="alert"
                      className="font-caption text-caption text-error mt-1 block"
                    >
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {estado === "ok" && (
                  <p className="rounded-xl border border-secondary/30 bg-secondary-container/50 p-4 font-body-md text-body-md text-on-secondary-container">
                    ✅ Mensaje enviado correctamente. Te contactare pronto.
                  </p>
                )}
                {estado === "error" && (
                  <p className="rounded-xl border border-error/30 bg-error-container p-4 font-body-md text-body-md text-on-error-container">
                    ❌ Ocurrió un error. Intenta de nuevo o contáctame por
                    WhatsApp.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={enviando}
                  className="w-full uppercase tracking-widest"
                >
                  {enviando ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" delay={200}>
            <Card className="h-full flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                </div>
                <div className="w-full">
                  <h4 className="font-headline-md text-headline-sm text-on-background mb-3">
                    Horario Semanal
                  </h4>
                  <div className="space-y-2 font-body-md text-body-md">
                    <div className="flex items-center justify-between border-b border-outline-variant/50 pb-2 text-on-surface-variant">
                      <span>Lunes a Viernes</span>
                      <span className="font-semibold text-on-background">
                        16:00 — 21:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-on-surface-variant">
                      <span>Sábado — Domingo</span>
                      <span className="font-semibold text-error">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Contacto;
