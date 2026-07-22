import React from 'react';

const Menu = () => {
    return (
        <header className="w-full top-0 sticky z-50 bg-surface shadow-sm transition-all duration-200">
            <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-[1120px] mx-auto">
                <div className="flex items-center gap-2 cursor-pointer transition-all duration-200">
                    <span className="material-symbols-outlined text-primary text-3xl">record_voice_over</span>
                    <span className="text-2xl font-bold text-primary">Voz &amp; Vida</span>
                </div>
                <nav className="hidden md:flex gap-8">
                    <a className="font-semibold text-primary border-b-2 border-primary pb-1" href="#">Inicio</a>
                    <a className="font-semibold text-on-surface-variant hover:text-secondary transition-colors" href="#servicios">Servicios</a>
                    <a className="font-semibold text-on-surface-variant hover:text-secondary transition-colors" href="#beneficios">Nosotros</a>
                    <a className="font-semibold text-on-surface-variant hover:text-secondary transition-colors" href="#contacto">Contacto</a>
                </nav>
                <button className="md:hidden text-primary">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </header>
    );
};

export default Menu;