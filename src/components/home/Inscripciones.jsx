import React, { useState, useEffect } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import imgPromocion1 from "../../assets/img/promocion 1.jpeg";
import imgPromocion2 from "../../assets/img/promocion 2.jpeg";
import imgPromocion3 from "../../assets/img/promocion 3.jpeg";
import videoInscripcionesAbiertas from "../../assets/img/Inscripciones-abiertas.mp4";
import clientAxios from "../../config/clientAxios";

const Inscripciones = () => {
  const [slogan, setSlogan] = useState("");
  //typewritter  text animation "¡Estudia tu posgrado con nosotros y únete a la familia CRESPF!"
  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchSlogan = async () => {
        try {
          const { data } = await clientAxios.get("/slogan");

          setSlogan(data.text || ""); // Fallback en caso de no haber eslogan
        } catch (error) {
          console.error("Error al obtener el eslogan:", error);
        }
      };
      fetchSlogan();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  //const text = "¡Estudia tu posgrado con nosotros y únete a la familia CRESPF!";
  //const [index, setIndex] = React.useState(0);

  // React.useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setIndex((prev) => (prev === text.length ? 0 : prev + 1));
  //     }, 150);

  //     return () => clearInterval(intervalId);

  // }, []);

  return (
    <section className="max-w-[1300px] py-16 mx-auto my-20">
      <h4 className="bg-gradient-to-tr from-green-600 to-indigo-600 text-transparent bg-clip-text font-black text-center text-7xl leading-relaxed pt-4">
        {slogan}
      </h4>
      <div className="mt-20 grid md:grid-cols-2 shadow rounded-lg grid-cols-1">
        <div className="bg-gradient-to-br from-indigo-600 to-fuchsia-200 px-4 py-2 flex items-center flex-col justify-center">
          <p className="text-gray-200 font-bold text-4xl uppercase">
            Beneficios:
          </p>
          <ul className="mt-5 space-y-5">
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Humanismo, experiencia y calidad
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Beca reembolso SEV e institucionales
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Alto índice de titulados
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Asesores altamente capacitados
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">Clases online</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Formación ideal para aprender y enseñar a través de las
                tecnologías
              </span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img src={imgPromocion1} alt="Imagen Promocion 1" />
        </div>
        <div className="flex justify-center items-center">
          <img src={imgPromocion2} alt="Imagen Promocion 2" />
        </div>
        <div className="bg-gradient-to-br from-fuchsia-200 to-indigo-600 px-4 py-2 flex items-center flex-col justify-center">
          <p className="text-gray-200 font-bold text-4xl uppercase text-center">
            POSGRADOS :
          </p>
          <ul className="mt-5 space-y-5">
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Maestría en Tecnologías Aplicadas a la Educación RVOE:
                ES139/2005
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineCheckCircle className="text-green-500 h-6 w-6 font-bold" />
              <span className="text-gray-600 font-semibold">
                Doctorado en Educación y Cultura Digital Pedagógica RVOE SEP:
                20171343
              </span>
            </li>
          </ul>
        </div>
        {/* video */}
        <div className="flex justify-center items-center bg-gradient-to-tr from-fuchsia-200 to-indigo-600">
          <video
            className="w-auto rounded-sm"
            src={videoInscripcionesAbiertas}
            controls
          />
        </div>
        <div className="flex justify-center items-center">
          <img src={imgPromocion3} alt="Imagen Promocion 3" />
        </div>
      </div>
    </section>
  );
};

export default Inscripciones;
