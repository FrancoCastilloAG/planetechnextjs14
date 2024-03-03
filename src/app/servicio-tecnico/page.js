"use client"
import React from 'react';
import Link from 'next/link';
import { FaDesktop, FaBatteryHalf, FaKeyboard, FaHdd, FaWindows, FaWrench, FaTrashAlt, FaDownload, FaCogs, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const whatsappLink = "https://wa.me/+56958727525";

const Servicio = ({ icon, title, description, onClick }) => {
    return (
        <div className="p-4 bg-gray-800 rounded-lg text-center">
            {icon && React.createElement(icon, { className: "text-4xl text-purple-500 mb-4 mx-auto" })}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out inline-flex items-center">
                <FaWhatsapp className="mr-2" /> Cotizar por WhatsApp
            </button>
        </div>

    );
};

const ServicioTecnico = () => {
    const handleWhatsAppClick = (servicio) => {
        const mensaje = encodeURIComponent(`Hola, buenas tardes. Estoy interesado en el servicio de ${servicio}.`);
        window.open(`${whatsappLink}?text=${mensaje}`, '_blank');
    };

    const servicios = [
        {
            icon: FaDesktop,
            title: "Cambio de Pantallas",
            description: "Reemplazo de pantallas dañadas en laptops.",
            onClick: () => handleWhatsAppClick("cambio de pantallas")
        },
        {
            icon: FaBatteryHalf,
            title: "Cambio de Batería",
            description: "Sustitución de baterías agotadas o defectuosas.",
            onClick: () => handleWhatsAppClick("cambio de batería")
        },
        {
            icon: FaKeyboard,
            title: "Cambio de Teclados",
            description: "Instalación de teclados nuevos en computadoras portátiles.",
            onClick: () => handleWhatsAppClick("cambio de teclados")
        },
        {
            icon: FaHdd,
            title: "Recuperación de Datos",
            description: "Recuperación de datos de discos duros dañados o formateados.",
            onClick: () => handleWhatsAppClick("recuperación de datos")
        },
        {
            icon: FaDownload,
            title: "Instalación de Programas",
            description: "Instalación y configuración de software necesario para tu dispositivo.",
            onClick: () => handleWhatsAppClick("instalación de programas")
        },
        {
            icon: FaWindows,
            title: "Instalación de Sistemas Operativos",
            description: "Instalación de sistemas operativos como Windows, macOS o Linux.",
            onClick: () => handleWhatsAppClick("instalación de sistemas operativos")
        },
        {
            icon: FaWrench,
            title: "Soldaduras y Reparaciones",
            description: "Reparaciones de componentes electrónicos y soldaduras en placas madre y otros dispositivos.",
            onClick: () => handleWhatsAppClick("soldaduras y reparaciones")
        },
        {
            icon: FaTrashAlt,
            title: "Limpieza de Hardware",
            description: "Limpieza interna y externa de equipos para mantener su funcionamiento óptimo.",
            onClick: () => handleWhatsAppClick("limpieza de hardware")
        },
        {
            icon: FaCogs,
            title: "Montaje de Computadoras",
            description: "Construcción de computadoras a medida según tus necesidades y presupuesto.",
            onClick: () => handleWhatsAppClick("montaje de computadoras")
        }
    ];

    return (
        <div className="bg-black text-white">
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
                <h1 className="text-4xl font-bold mb-4">Servicios para portátiles y sobremesa</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <Servicio key={index} {...servicio} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicioTecnico;
