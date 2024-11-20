import React, { useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";

const TarjetaDeslinde = () => {
  const [deslindes, setDeslindes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  // Efecto para cargar los deslindes periódicamente
  useEffect(() => {
    const fetchDeslindes = async () => {
      try {
        const response = await clientAxios.get("/deslindes/vigente");
        if (response.data) {
          setDeslindes([response.data]);
        } else {
          setDeslindes([]); // No hay deslinde vigente
        }
      } catch (err) {
        setError("Error al cargar los deslindes");
      } finally {
        setLoading(false);
      }
    };

    fetchDeslindes();

    const interval = setInterval(() => {
      fetchDeslindes();
    }, 5000); // Consulta cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Cargando deslindes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Mostrar mensaje si no hay deslindes o si el deslinde no está activo
  if (
    deslindes.length === 0 ||
    !deslindes.some((deslinde) => deslinde.isActive)
  ) {
    return (
      <p className="text-center text-xl text-gray-500">
        Pronto subiremos el deslinde!
      </p>
    );
  }

  if (selectedItem) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg transition duration-200 transform hover:scale-105 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-2">{selectedItem.title}</h2>
        <p className="text-gray-700 mb-4 break-words overflow-auto max-h-60">
          {selectedItem.content}
        </p>
        <p className="text-gray-500 text-sm">
          {formatDate(selectedItem.createdAt)}
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
      {deslindes.map((deslinde) => (
        <div
          key={deslinde._id}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transition duration-200 transform hover:scale-105 overflow-hidden max-w-full break-words"
        >
          <h3 className="text-lg font-bold text-blue-600 mb-2">
            {deslinde.title}
          </h3>
          <p className="text-gray-600 mb-2 break-words">
            {deslinde.content.substring(0, 100)}... {/* Mostrar un resumen */}
          </p>
          <p className="text-gray-500 text-sm">
            {formatDate(deslinde.createdAt)}
          </p>
          <button
            onClick={() => setSelectedItem(deslinde)}
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Ver detalles
          </button>
        </div>
      ))}
    </>
  );
};

export default TarjetaDeslinde;
