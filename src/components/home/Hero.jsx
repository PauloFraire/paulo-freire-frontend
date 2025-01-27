import React, { useEffect, useState } from 'react';
import { logos } from "../../data/Data";
import hero6 from "../../assets/img24.jpeg";
import clientAxios from '../../config/clientAxios';

const Hero = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(hero6);

  // Fetch de imágenes
  useEffect(() => {
    const getHero = async () => {
      try {
        const response = await clientAxios.get('/customsize');
        const imagenes = response.data.map(item => item.slideImg); // Extraemos los URLs de las imágenes
        if (imagenes.length > 0) {
          setImages(imagenes);
          setCurrentImage(imagenes[0]); // Iniciar con la primera imagen si está disponible
        }
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };
    getHero();
  }, []);

  // Cambio de imágenes con intervalo
  useEffect(() => {
    if (images.length === 0) return; // Evitar ejecutar el intervalo si no hay imágenes

    const interval = setInterval(() => {
      const index = images.indexOf(currentImage);
      setCurrentImage(images[(index + 1) % images.length]); // Cambiar a la siguiente imagen
    }, 8000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [currentImage, images]);

  return (
    <div className="w-full mx-auto home bg-gradient-to-t from-green-100 to-lime-100 py-16">
      <div className="md:flex items-center justify-center">
        <div className="flex-1 basis-[20rem]">
          <div className="my-5 flex justify-center space-y-5 flex-col items-center sm:flex-row mx-auto p-4 item gap-4">
            <img src={logos[0]} className="w-32" loading="lazy" alt="logo 1" />
            <img src={logos[5]} className="w-36" loading="lazy" alt="logo 2" />
            <img src={logos[7]} className="w-36" loading="lazy" alt="logo 3" />
            <img src={logos[6]} className="w-36" loading="lazy" alt="logo 4" />
          </div>
          <div className="text-center">
            <p className="uppercase text-5xl font-black text-gray-600">
              Posgrados Validados <span className="text-teal-700">ante la usicamm</span>
            </p>
            <p className="text-lg text-gray font-bold mt-5 mx-4 text-center uppercase text-orange-600">
              "En esta vida no solo los talentos son los que triunfan, también las voluntades".
            </p>
            <div className="mt-4 mx-4 text-slate-600 space-y-3">
              <p className="sm:text-xl text-xl font-semibold leading-relaxed">
                CLAVE DEL CENTRO DE TRABAJO: <span className="font-normal">30PSU0029L</span>
              </p>
              <p className="sm:text-xl text-2xl font-semibold leading-snug">
                Clave de la Institución <span className="font-normal">30MSU0027Q</span>
              </p>
              <p className="sm:text-xl text-2xl font-semibold leading-snug">
                Acuerdo NO. <span className="font-normal">ES139/2005</span>
              </p>
              <p className="sm:text-xl text-2xl font-semibold leading-snug">
                Clave de la Carrera: <span className="font-normal">7EA12135</span>
              </p>
              <p className="sm:text-xl text-2xl font-semibold leading-snug">
                Modalidad: <span className="font-normal">No Escolarizada</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 basis-[20rem] justify-center items-center mt-2 animate-fade lg:mx-4 sm:mx-8">
          <img
            src={currentImage}
            alt="imagen hero"
            className="w-[800px] h-[500px] object-cover object-top shadow-sm rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
