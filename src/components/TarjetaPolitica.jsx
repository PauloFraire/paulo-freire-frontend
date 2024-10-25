// src/pages/TarjetaPolitica.jsx
import React, { useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";

const TarjetaPolitica = () => {
  const [politicas, setPoliticas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Efecto para cargar las políticas
  useEffect(() => {
    const fetchPoliticas = async () => {
      try {
        const response = await clientAxios.get("/politicas/vigente");
        setPoliticas([response.data]); // Aquí podrías agregar más datos si es necesario
      } catch (err) {
        setError("Error al cargar las políticas");
      } finally {
        setLoading(false);
      }
    };

    fetchPoliticas();
  }, []);

  if (loading) {
    return <p>Cargando políticas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (selectedItem) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg transition duration-200 transform hover:scale-105 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-2">{selectedItem.title}</h2>
        <p className="text-gray-700 mb-4 break-words overflow-auto max-h-60">
          {selectedItem.content}
        </p>
        <button
          onClick={() => setSelectedItem(null)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <>
      {politicas.map((politica) => (
        <div
          key={politica._id}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transition duration-200 transform hover:scale-105 overflow-hidden max-w-full break-words"
        >
          <h3 className="text-lg font-bold text-blue-600 mb-2">
            {politica.title}
          </h3>
          <p className="text-gray-600 mb-4 break-words">
            {politica.content.substring(0, 100)}... {/* Mostrar un resumen */}
          </p>
          <button
            onClick={() => setSelectedItem(politica)}
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Ver detalles
          </button>
        </div>
      ))}
    </>
  );
};

export default TarjetaPolitica;
