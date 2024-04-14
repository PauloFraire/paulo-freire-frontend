import React from 'react'
import imgOferta from '../../assets/img/img21.jpeg';
import imgOferta2 from '../../assets/img/img22.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Inscripciones = () => {

    const data = [
        {
            title: 'Oferta Educativa',
            description: `El Centro de Estudios Avanzados en Educación y Formación Profesional (CEAEFP) ofrece programas de posgrado en modalidad virtual y semipresencial, con el objetivo de formar profesionales de la educación y áreas afines, capaces de generar conocimiento y aplicar estrategias innovadoras en la solución de problemas educativos.`,
            img: imgOferta
        },
        {
            title: 'Proceso de inscripción',
            description: `El proceso de inscripción se realiza en línea, a través de la plataforma de la Universidad Pedagógica Nacional (UPN). Los aspirantes deberán cumplir con los requisitos establecidos en la convocatoria y presentar la documentación solicitada en la fecha y horario establecidos.`,
            img: imgOferta2
        }
    ]

    return (
        <section className='max-w-[1200px] py-16 mx-auto'>
            <div className='bg-green-100 p-2'>
                <div className='flex flex-col md:even:flex-row-reverse md:odd:flex-row gap-4'>
                    <div className='flex-1 bg-gradient-to-tr from-yellow-500 to-purple-600 p-8 rounded-full shadow-2xl py-8'>
                        <img src={imgOferta} alt={"title"} loading='lazy' className='w-full h-80 md:h-[550px] shadow-xl rounded-3xl object-center 
                        transform hover:scale-105 transition duration-300 ease-in-out' />
                    </div>
                    <div className='flex-1 flex items-center justify-center bg-gradient-to-tr from-sky-300 to-blue-900 p-4 shadow-2xl rounded-full'>
                        <img src={imgOferta2} alt={"title"} loading='lazy' className='w-full h-80 md:h-[450px] shadow-xl  object-center rounded-3xl rounded-ee-none transform hover:scale-105 transition duration-300 ease-in-out' />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Inscripciones