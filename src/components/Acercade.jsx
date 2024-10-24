import React, { useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";

const Acercade = () => {
  const [informacion, setInformacion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para cargar la información al iniciar
  useEffect(() => {
    const fetchInformacion = async () => {
      try {
        const response = await clientAxios.get("/politicas");
        setInformacion(response.data || []);
      } catch (err) {
        setError("Error al cargar la información");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInformacion();
  }, []);

  if (loading) {
    return <p>Cargando información...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Información sobre la Empresa
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {informacion.map((info) => (
          <div
            key={info._id}
            className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between"
          >
            <h2 className="text-xl font-bold mb-2">{info.title}</h2>
            <p className="text-gray-600">{info.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acercade;
