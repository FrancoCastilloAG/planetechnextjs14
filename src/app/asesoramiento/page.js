"use client"
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

const AsesoramientoPage = () => {
  const handleWhatsAppClick = (tipo) => {
    const mensaje = encodeURIComponent(`Hola, estoy interesado en una computadora ${tipo}. ¿Podrían ayudarme con una cotización?`);
    window.open(`https://wa.me/+56989013937?text=${mensaje}`, '_blank');
  };

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-4">Asesoramiento para la creación de computadoras</h1>
        <section className="mt-12">
          <div className="p-8 bg-gray-800 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Computadora Gamer</h2>
            <p className="text-gray-400 mb-4">Las computadoras gamer están diseñadas para ofrecer un rendimiento óptimo en juegos. Los componentes están especializados para videojuegos, siendo las tarjetas gráficas el componente más importante y diferenciador.</p>
            <button onClick={() => handleWhatsAppClick("gamer")} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out flex items-center">
              <FaWhatsapp className="mr-2" /> Solicitar cotización por WhatsApp
            </button>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Computadora de Oficina</h2>
            <p className="text-gray-400 mb-4">Las computadoras de oficina se caracterizan por realizar multitarea de forma eficiente. Un procesador rápido y una buena cantidad de memoria RAM son esenciales para mantener la productividad.</p>
            <button onClick={() => handleWhatsAppClick("de oficina")} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out flex items-center">
              <FaWhatsapp className="mr-2" /> Solicitar cotización por WhatsApp
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AsesoramientoPage;
