import React from 'react'
import imgOferta from '../../assets/img/img21.jpeg';
import imgOferta2 from '../../assets/img/img22.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineCheckCircle } from "react-icons/hi";


const Inscripciones = () => {

    //typewritter  text animation "¡Estudia tu posgrado con nosotros y únete a la familia CRESPF!"

    const text = "¡Estudia tu posgrado con nosotros y únete a la familia CRESPF!";
    const [index, setIndex] = React.useState(0);

    // React.useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setIndex((prev) => (prev === text.length ? 0 : prev + 1));
    //     }, 150);

    //     return () => clearInterval(intervalId);

    // }, []);



    return (
        <section className='max-w-[1300px] py-16 mx-auto'>
            <h4 className='bg-gradient-to-tr from-green-600 to-indigo-600 text-transparent bg-clip-text font-black text-center text-7xl'>
                {text}
            </h4>
            <div className='mt-20 grid grid-cols-2 shadow rounded-lg'>
                <div className='bg-gradient-to-br from-indigo-600 to-fuchsia-200 px-4 py-2 flex items-center flex-col justify-center'>
                    <p className='text-gray-200 font-bold text-4xl uppercase'>Beneficios:</p>
                    <ul className='mt-5 space-y-5'>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Humanismo, experiencia y calidad</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Beca reembolso SEV e institucionales</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Alto índice de titulados</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Asesores altamente capacitados</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Clases online</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Formación ideal para aprender y enseñar a través de las tecnologías</span>
                        </li>

                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://img.freepik.com/fotos-premium/adolescente-feliz-estudiante-chica-estudiando-mesa_1368-43188.jpg" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://img.freepik.com/foto-gratis/chicas-universitarias-estudiando-juntas_23-2149038414.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid" alt="" />
                </div>
                <div className='bg-gradient-to-br from-fuchsia-200 to-indigo-600 px-4 py-2 flex items-center flex-col justify-center'>
                    <p className='text-gray-200 font-bold text-4xl uppercase text-center'>Programas:</p>
                    <ul className='mt-5 space-y-5'>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Maestría en Tecnologías Aplicadas a la Educación
                                RVOE: ES139/2005</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <HiOutlineCheckCircle className='text-green-500 h-6 w-6 font-bold' />
                            <span className='text-gray-600 font-semibold'>Doctorado en Educación y Cultura Digital Pedagógica
                                RVOE SEP: 20171343</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Inscripciones