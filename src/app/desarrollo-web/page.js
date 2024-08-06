"use client"
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

const ProductosPage = () => {
  const handleWhatsAppClick = (tipo) => {
    const mensaje = encodeURIComponent(`Hola, estoy interesado en el servicio de ${tipo}. ¿Podrías proporcionarme más información y precios?`);
    window.open(`https://wa.me/+56989013937?text=${mensaje}`, '_blank');
  };

  const productos = [
    {
      tipo: "Landing Page",
      descripcion: "Una landing page es una página web diseñada para una campaña específica o para promocionar un producto o servicio. Es simple y directa, con un objetivo claro de conversión.",
      precio: "Desde $80.000",
    },
    {
      tipo: "Micrositio",
      descripcion: "Un micrositio es un sitio web pequeño que se centra en un tema específico o en una campaña particular. Ofrece contenido detallado y es ideal para eventos, productos nuevos, o promociones especiales.(esta pagina es un micrositio)",
      precio: "Desde $100.000",
    },
    {
      tipo: "Ecommerce",
      descripcion: "Un ecommerce es una tienda en línea donde se pueden comprar productos o servicios. Permite a los usuarios navegar por catálogos, agregar productos al carrito y realizar pagos en línea.",
      precio: "Desde $200.000",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-4">Desarrollo Web</h1>
        <p className="text-gray-400 mb-8">
          Todos nuestros sitios son creados con React, específicamente Next.js 13. <br />
          El dominio y el hosting son a conveniencia del cliente. Si ya tiene uno, se puede reutilizar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div key={index} className="p-8 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{producto.tipo}</h2>
              <p className="text-gray-400 mb-4">{producto.descripcion}</p>
              <p className="text-white-400 mb-4">{producto.precio}</p>
              <button onClick={() => handleWhatsAppClick(producto.tipo)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out flex items-center">
                <FaWhatsapp className="mr-2" /> Solicitar más información por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
