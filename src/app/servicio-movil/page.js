"use client"
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const MaintenancePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Seccion en Mantenimiento</h1>
      <p className="text-gray-400 mb-8">Estamos realizando algunas actualizaciones</p>
      <Link href="/" passHref>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md mb-4 flex items-center gap-2 hover:bg-gray-600 transition duration-300 ease-in-out">
            <FaArrowLeft /> Volver al Inicio
          </button>
        </Link>

    </div>
  );
};

export default MaintenancePage;
