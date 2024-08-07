import React, { useEffect, useState } from 'react';
import hero from "../../assets/hero.png";
import { logos } from "../../data/Data";
import { motion } from "framer-motion";
import imgMoodle from "../../assets/img/moodle.avif"
import imgAgenda from "../../assets/img/logo-agenda.png"
import hero1 from "../../assets/img/img14.jpeg";
import hero2 from "../../assets/img/img15.jpeg";
import hero3 from "../../assets/img/img16.jpeg";
import hero4 from "../../assets/img/img19.jpeg";
import hero5 from "../../assets/img/img20.jpeg";
import hero6 from "../../assets/img24.jpeg";
import hero7 from "../../assets/img25.jpeg";
import hero8 from "../../assets/img26.jpeg";

const Hero = () => {

  const images = [hero1, hero7, hero2, hero8, hero3, hero4, hero5, hero6];

  const [data, setData] = useState([])
  const [currentImage, setCurrentImage] = useState(hero6);

  //fetch a las imagenes

  // useEffect(() => {
  //   const getHero = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/customsize');
  //       const json = await response.json()
  //       setData(json)

  //       const imageArray = data.map((item) => item.slideImg);
  //       images.push(...imageArray);

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getHero()
  // }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(images[(images.indexOf(currentImage) + 1) % images.length]);
    }, 8000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentImage]);




  return (
    <div className="w-full  mx-auto home bg-gradient-to-t from-green-100 to-lime-100 py-16" >
      <div className="md:flex items-center justify-center">
        <div className='flex-1 basis-[20rem] '>
          <div className="my-5 flex justify-center  space-y-5 flex-col  items-center sm:flex-row mx-auto p-4 item gap-2">

            <img src={logos[0]} className='w-36' loading='lazy' />
            <img src={logos[5]} className='w-36' loading='lazy' />
            <img src={logos[7]} className='w-36' loading='lazy' />
            <img src={logos[6]} className='w-36' loading='lazy' />
          </div>
          <div className="my-5">

          </div>
          <div className="sm:text text-3xl font-extrabold uppercase text-center">
            Posgrados Validados ante  la usicamm
            <p className="text-lg leading-7 text-gray font-medium mt-5 mx-4 text-center capitalize">
              "en esta vida no solo los talentos son los que triunfan, también las voluntades".
            </p>

            {/* <p>
              Tel. 52(228)8113228
            </p> */}

            <div className='mt-4 mx-4 text-slate-600 space-y-3'>
              <p className='sm:text-xl text-xl font-semibold uppercase leading-relaxed'>
                CLAVE DEL CENTRO DE TRABAJO:
                <span className='font-normal'> 30PSU0029L</span>
              </p>
              <p className='sm:text-xl text-2xl font-semibold uppercase leading-snug'>
                CLAVE DE LA INSTITUCIÓN:
                <span className='font-normal'> 30MSU0027Q</span>
              </p>
              <p className='sm:text-xl text-2xl font-semibold uppercase leading-snug'>
                ACUERDO NO.
                <span className='font-normal'> ES139/2005</span>
              </p>
              <p className='sm:text-xl text-2xl font-semibold uppercase leading-snug'>
                CLAVE DE CARRERA:
                <span className='font-normal'>7EA12135</span>
              </p>
              <p className='sm:text-xl text-2xl font-semibold uppercase leading-snug'>
                MODALIDAD:
                <span className='font-normal'> NO ESCOLARIZADA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 basis-[20rem] justify-center items-center mt-2 animate-fade lg:mx-4 sm:mx-8">

          {
            < img src={currentImage} alt="imagen hero" className='w-[800px] h-[500px] object-cover object-top shadow-lg bg-slate-200 p-2' />
          }

        </div>
      </div>

    </div>
  )
}

export default Hero;