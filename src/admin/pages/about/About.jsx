import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

const About = () => {
  const [politicas, setPoliticas] = useState(null);
  const [terminos, setTerminos] = useState(null);
  const [deslindes, setDeslindes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: dataPoliticas } = await clientAxios.get("/politicas/vigente");
        const { data: dataTerminos } = await clientAxios.get("/Terminos/vigente");
        const { data: dataDeslindes } = await clientAxios.get("/deslindes/vigente");

        setPoliticas(dataPoliticas);
        setTerminos(dataTerminos);
        setDeslindes(dataDeslindes);
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };

    fetchData();
  }, []);

  const renderCard = (data, header) => (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-2">{header}</h2>
      {data ? (
        <>
          <p><strong>Título:</strong> {data.title}</p>
          <p><strong>Contenido:</strong> {data.content}</p>
          <p><strong>Versión:</strong> {data.version}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Perfil de la empresa</h1>
      <p className="text-lg mb-8">Información sobre la empresa.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderCard(politicas, "Políticas")}
        {renderCard(terminos, "Términos")}
        {renderCard(deslindes, "Deslindes")}
      </div>
    </div>
  );
};

export default About;
