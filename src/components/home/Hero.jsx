import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { logos } from "../../data/Data";
import clientAxios from '../../config/clientAxios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import inscripciones2025 from '../../assets/img/inscripciones2025.jpeg';
import CongresoLaHabana2025 from '../../assets/img/CongresoLaHabana2025.png'

// Importa las imágenes de la carpeta
import imagen1 from '../../assets/img/pedagogia2025/1.jpg';
import imagen2 from '../../assets/img/pedagogia2025/2.jpg';
import imagen3 from '../../assets/img/pedagogia2025/3.jpg';
import imagen4 from '../../assets/img/pedagogia2025/4.jpg';
import imagen5 from '../../assets/img/pedagogia2025/5.jpg';
import imagen6 from '../../assets/img/pedagogia2025/6.jpg';
import imagen7 from '../../assets/img/pedagogia2025/7.jpg';
import imagen8 from '../../assets/img/pedagogia2025/8.jpg';
import imagen9 from '../../assets/img/pedagogia2025/9.jpg';

const Hero = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(inscripciones2025); // Inicia con la primera imagen local
  const [isFirstImage, setIsFirstImage] = useState(true); // Controla si se está mostrando la imagen local

// Array de imágenes importadas
const importedImages = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9];

  useEffect(() => {
    const getHero = async () => {
      try {
        const response = await clientAxios.get('/customsize');
        const imagenes = response.data.map(item => item.slideImg);
        setImages(imagenes);
      } catch (error) {
        console.log(error);
      }
    };
    getHero();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFirstImage && images.length > 0) {
        setCurrentImage(images[0]); // Cambia a la primera imagen de la consulta
        setIsFirstImage(false);
      } else {
        const index = images.indexOf(currentImage);
        setCurrentImage(images[(index + 1) % images.length]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images, isFirstImage]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full mx-auto home bg-gradient-to-t to-green-100 from-white py-16 -mb-32">
      <div className="md:flex items-center justify-center">
        <div className='flex-1 basis-[20rem]'>
          <div className="flex justify-center space-y-5 flex-col items-center sm:flex-row mx-auto p-4 item gap-4">
            <img src={logos[0]} className='w-40' loading='lazy' />
          </div>
          <div className="text-center">
            <div className="text-center">
              <div className="flex items-center justify-center"> {/* Reducido el espacio entre elementos */}
                <p className="uppercase text-3xl font-black text-gray-600">
                  Posgrados Validados <span className="text-teal-700">ante la usicamm</span>
                </p>
              </div>
              <img src={logos[6]} className="w-32 inline-block" loading="lazy" />
            </div>
            <div className='justify-center flex sm:flex-row'>
              <p className='uppercase text-3xl font-black text-gray-600'>RVOE de la SEP y SEV</p>
            </div>
            <div className='flex justify-center'>
              <img src={logos[5]} className='w-32' loading='lazy' />
              <img src={logos[7]} className='w-32' loading='lazy' />
            </div>
            <div className='mt-5 mx-4 text-slate-600 space-y-3'>
              <p className='sm:text-xl text-xl font-semibold leading-relaxed'>
                CLAVE DEL CENTRO DE TRABAJO:
                <span className='font-normal'> 30PSU0029L</span>
              </p>
              <p className='sm:text-xl text-2xl font-semibold leading-snug'>
                Clave de la Institución
                <span className='font-normal'> 30MSU0027Q</span>
              </p>
              <p className='sm:text-xl text-2xl font-semibold leading-snug'>
                Acuerdo NO.
                <span className='font-normal'> ES139/2005</span>
              </p>
              {/* <p className='sm:text-xl text-2xl font-semibold leading-snug'>
                Clave de la Carrera:
                <span className='font-normal'>7EA12135</span>
              </p> */}
              <p className='sm:text-xl text-2xl font-semibold leading-snug'>
                Modalidad:
                <span className='font-normal'>No Escolarizada</span>
              </p>
              <p className="text-lg text-gray font-bold mt-5 mx-4 text-center uppercase text-orange-600">
                "En esta vida no solo los talentos son los que triunfan, también las voluntades".
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 basis-[20rem] justify-center items-center mt-2 animate-fade lg:mx-4 sm:mx-8">
          {currentImage && <img src={currentImage} alt="imagen hero" className='w-[800px] h-[500px] sm:w-[600px] sm:h-[400px] xs:w-[400px] xs:h-[300px] object-cover object-top shadow-sm rounded-sm' />}
        </div>
      </div>

      {/* Imagen CongresoLaHabana2025 */}
      <div className='flex w-full justify-center mt-10'>
        <img 
            src={CongresoLaHabana2025} 
            alt="Congreso La Habana 2025" 
            className='w-11/12 rounded-[20px]'
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="mt-8 w-11/12">
        <h1 className="text-center mt-8 mb-3 font-bold text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
          Congreso Internacional de Pedagogía 2025
        </h1>
          <Slider {...carouselSettings}>
            {importedImages.map((image, index) => (
              <div key={index} className="px-4">
                <img
                  src={image}
                  alt={`pedagogia2025-${index}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg" // Altura reducida a h-64 (16rem)
                />
              </div>
            ))}
          </Slider>
          {/* Descripción general debajo del carrusel */}
          <p className="text-center mt-[32px] text-[25px] font-semibold text-gray-700">
            El Centro Regional de Educación Superior Paulo Freire, presente en la inauguración del Congreso Internacional de Pedagogia 2025, en la Habana, Cuba. Participan 32 países con el objetivo de intercambiar políticas públicas, estrategias y recomendaciones para mejorar la práctica educativa en el mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;