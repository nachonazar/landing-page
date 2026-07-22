import React from 'react';

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
                            Mejora tu comunicación, <br className="hidden md:block"/> <span className="text-primary">transforma tu vida</span>
                        </h1>
                        <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto md:mx-0">
                            Acompañamos tu desarrollo y bienestar mediante terapias personalizadas, con un enfoque clínico humano y basado en evidencia.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <button className="bg-primary text-on-primary font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Reservar Cita
                                <span className="material-symbols-outlined">calendar_month</span>
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
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Fonoaudióloga trabajando con paciente" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-surface-container-low px-4" id="servicios">
                <div className="max-w-[1120px] mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-on-background mb-4">Nuestras Especialidades</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-teal-100 text-teal-800 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-4xl">child_care</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-on-surface">Lenguaje Infantil</h3>
                        <p className="text-on-surface-variant">Potenciamos el desarrollo comunicativo de los más pequeños con juegos y técnicas lúdicas efectivas.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-sky-100 text-sky-800 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-4xl">record_voice_over</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-on-surface">Terapia de Voz</h3>
                        <p className="text-on-surface-variant">Cuidado integral para profesionales de la voz y recuperación de patologías vocales complejas.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-4xl">neurology</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-on-surface">Rehabilitación Adultos</h3>
                        <p className="text-on-surface-variant">Recuperación de funciones tras eventos neurológicos, enfocándonos en la calidad de vida diaria.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Inicio;