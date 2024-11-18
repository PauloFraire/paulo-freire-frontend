// src/pages/Acercade.jsx
import React from "react";
import TarjetaPolitica from "./TarjetaPolitica";
import TarjetaTermino from "./TarjetaTermino";
import TarjetaDeslinde from "./TarjetaDeslinde";

const Contacto = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Información sobre la Empresa
      </h1>

      {/* Diseño de tarjetas en cuadrícula */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-full">
        {/* Aquí se llamará a cada componente que renderiza su propio contenido */}
        <TarjetaPolitica />
        <TarjetaTermino />
        <TarjetaDeslinde />
        {/* Puedes agregar más tarjetas aquí si es necesario */}
      </div>
    </div>
  );
};

export default Contacto;
