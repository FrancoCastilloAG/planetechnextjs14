"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import imagen1 from "@/assets/images/PLANETA SIN SOMBRA.png";
import imagen2 from "@/assets/images/PLANETECH NOMBRE BLANCO Y AZUL.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full text-white relative p-4">
            <div className="flex items-center justify-between px-6 py-6 relative z-10">
                <a href="/" className="flex items-center">
                    <img
                        src={imagen1.src}
                        alt="Logo Planeta Sin Sombra"
                        className="w-10 h-10 lg:w-20 lg:h-20 mr-4"
                    />
                    <img
                        src={imagen2.src}
                        alt="Logo Planetech Blanco y Azul"
                        className="w-26 h-6 lg:w-30 lg:h-10"
                    />
                </a>
                <div className="lg:hidden z-20">
                    <FaBars onClick={toggleMenu} className="text-3xl cursor-pointer" />
                </div>
                {/* Menú desplegable en dispositivos grandes */}
                <div className={`lg:flex lg:items-center lg:justify-end ${isMenuOpen ? 'fixed top-0 left-0 w-full bg-black text-white p-4 z-30' : 'hidden'}`}>
                    <FaTimes onClick={toggleMenu} className="text-3xl lg:hidden absolute top-10 right-12 cursor-pointer z-40" />
                    <a href="/" className="block lg:inline-block px-4 py-2 hover:bg-gray-700 rounded bg-black mt-4 lg:mt-0 lg:mr-4">
                        Inicio
                    </a>
                    <a href="/servicio-tecnico" className="block lg:inline-block px-4 py-2 hover:bg-gray-700 rounded bg-black mt-4 lg:mt-0 lg:mr-4">
                        Servicio Técnico
                    </a>
                    <a href="/desarrollo-web" className="block lg:inline-block px-4 py-2 hover:bg-gray-700 rounded bg-black mt-4 lg:mt-0 lg:mr-4">
                        Desarrollo Web
                    </a>
                    <a href="/servicio-movil" className="block lg:inline-block px-4 py-2 hover:bg-gray-700 rounded bg-black mt-4 lg:mt-0 lg:mr-4">
                        Servicio Técnico Celulares
                    </a>
                    <a href="/asesoramiento" className="block lg:inline-block px-4 py-2 hover:bg-gray-700 rounded bg-black mt-4 lg:mt-0 lg:mr-4">
                        Asesoramiento
                    </a>
                </div>
            </div>
        </nav>
    );
}
