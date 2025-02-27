import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

const OfertaEducativa = () => {
  const [offers, setOffers] = useState([]); // Estado para almacenar las ofertas
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Obtener las ofertas educativas al cargar el componente
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        // Hacer la solicitud al backend usando el cliente Axios
        const response = await clientAxios.get("/getoffter");
        setOffers(response.data); // Guardar las ofertas en el estado
      } catch (error) {
        setError("Error al cargar las ofertas educativas"); // Manejar errores
      } finally {
        setLoading(false); // Finalizar la carga
      }
    };

    fetchOffers();
  }, []);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando ofertas educativas...</div>;
  }

  // Mostrar un mensaje de error si algo falla
  if (error) {
    return <div>{error}</div>;
  }

  // Mostrar las ofertas educativas
  return (
    <div>
      <h1>Ofertas Educativas</h1>
      {offers.length === 0 ? (
        <p>No hay ofertas educativas disponibles.</p>
      ) : (
        <div>
          {offers.map((offer) => (
            <div
              key={offer._id}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <h2>{offer.title}</h2>
              <img
                src={offer.imageUrl}
                alt={offer.title}
                style={{ width: "200px", height: "auto" }}
              />
              <p>{offer.description}</p>
              <h3>PDFs:</h3>
              <ul>
                {offer.pdfs.map((pdf, index) => (
                  <li key={index}>
                    <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                      {pdf.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfertaEducativa;
