import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/navbar/Breadcrumbs";
import CardOffer from "../components/educational/CardOffer";
import clientAxios from "../config/clientAxios";

const EducationalOffer = () => {
  const breadcrumbs = ["Oferta Educativa"];
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await clientAxios.get("/getoffter");
        setOffers(response.data);
      } catch (error) {
        setError("Error al cargar las ofertas educativas");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <div>Cargando ofertas educativas...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="my-20 container mx-auto">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="container mx-auto mt-10">
        <h1 className="font-extrabold text-4xl text-center uppercase mb-10">
          Oferta Académica
        </h1>

        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4 mx-5 mt-5">
          {offers.map((offer, index) => (
            <CardOffer key={offer._id} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalOffer;
