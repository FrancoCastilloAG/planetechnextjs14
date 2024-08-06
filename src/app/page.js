import React from 'react';
import Link from 'next/link';
import { FaLaptop, FaMobileAlt, FaInternetExplorer, FaCogs, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ServicioItem = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg text-center">
      {icon && React.createElement(icon, { className: "text-4xl text-purple-500 mb-4 mx-auto" })}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={linkHref} passHref className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-md block transition duration-300 hover:bg-purple-600">
        {linkText}
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Planetech!</h1>
          <p className="text-gray-400">
            Tu centro de soluciones tecnológicas en La Serena
          </p>
          <p className="mt-4 text-gray-400">
            Especialistas en reparación de computadoras, teléfonos móviles y desarrollo web
          </p>
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Redes Sociales</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://wa.me/+56989013937?text=Hola,%20buenas%20tardes.%20Quisiera%20hacer%20una%20cotización." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-4xl text-green-500" />
            </a>
            <a href="https://www.instagram.com/planetech_ls/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl text-purple-500" />
            </a>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicioItem
              icon={FaLaptop}
              title="Reparación de Computadoras"
              description="¿Problemas con tu ordenador? ¡Nosotros te ayudamos!"
              linkText="Saber Más"
              linkHref="/servicio-tecnico"
            />
            <ServicioItem
              icon={FaMobileAlt}
              title="Reparación de Teléfonos Móviles"
              description="Pantallas rotas, baterías agotadas... ¡Lo solucionamos!"
              linkText="Saber Más"
              linkHref="/servicio-movil"
            />
            <ServicioItem
              icon={FaCogs}
              title="Asesoramiento Técnico"
              description="¿Necesitas ayuda para elegir el mejor equipo? ¡Contáctanos!"
              linkText="Saber Más"
              linkHref="/asesoramiento"
            />
            <ServicioItem
              icon={FaInternetExplorer}
              title="Desarrollo Web"
              description="¿Quieres tener presencia en línea? Diseñamos y desarrollamos sitios web a medida."
              linkText="Saber Más"
              linkHref="/desarrollo-web"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
