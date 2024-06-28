import React from 'react'
import imgCartel1 from '../../assets/img/Cartel1.jpeg';
import imgCartel2 from '../../assets/img/Cartel2.jpeg';
import imgCartel3 from '../../assets/img/Cartel3.jpeg';
import imgCartel4 from '../../assets/img/Cartel4.jpeg';
import { FaRegFilePdf, FaSignsPost } from "react-icons/fa6";
import { CiLink } from 'react-icons/ci';
import { MdOutlineFileDownload } from "react-icons/md";
import { RiLinksLine } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import videoPromotional2 from '../../assets/video/video-promocional-2.mp4';
import videoPromotional3 from '../../assets/video/video-promocional-3.mp4';
import pdfLibroInfinito from '../../assets/pdf/LA-ESCUELA-INFINITA-LIBRO.pdf'
import pdfCronograma from '../../assets/pdf/CRONOGRAMA EVENTOS DIPLOMADO 2024.pdf'
import pdfDiptico from '../../assets/pdf/DIPTICO DISEÑO 1.pdf'
import pdfInnovacionEscolar from '../../assets/pdf/INNOVACIÓN ESCOLAR E INTELIGENCIA ARTIFICIAL - CRESPF.pdf'
import pdfProgramadaDiplomado from '../../assets/pdf/PROGRAMA DIPLOMADO INNOVACIÓN ESCOLAR E INTELIGENCIA ARTIFICIAL GENERATIVA - CRESPF 2024.pdf'
import invitacion1 from '../../assets/img/invitacion1.jpeg';
import invitacion2 from '../../assets/img/invitacion2.jpeg';


const DiplomadoInformation = () => {
    return (
        <section className='bg-gradient-to-tr from-indigo-900 to-slate-800  py-20 '>

            <h3 className='text-4xl font-extrabold text-center text-teal-600 uppercase py-2'>Información del Diplomado</h3>

            <div className='max-w-[1200px] mx-auto my-10'>
                <h3 className='text-2xl font-bold mx-auto  my-4 capitalize text-slate-400 flex gap-2 items-center text-center justify-center'>
                    <FaSignsPost />
                    Carteles promocionales
                </h3>
                <div className='image-wrapper gap-2'>
                    <figure className='item-img'>

                        <img src={imgCartel1} alt="" />

                    </figure>
                    <figure className='item-img'>
                        <img src={imgCartel2} alt="" />

                    </figure>
                    <figure className='item-img'>
                        <img src={imgCartel3} alt="" />

                    </figure>
                    <figure className='item-img'>
                        <img src={imgCartel4} alt="" />

                    </figure>

                </div>
            </div>



            <div className='grid md:grid-cols-3 grid-cols-1 py-5'>

                <div className='col-span-1 my-4  p-4 '>

                    <p className="text-slate-400 text-center font-bold text-2xl flex items-center justify-center gap-2">
                        <RiLinksLine />
                        Díptico e infomación
                    </p>
                    <div className='flex flex-col gap-2 mt-10 items-center justify-center h-full'>
                        <a href={pdfCronograma} className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-700 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 gap-2 bg-gradient-to-tr from-orange-300 to-yellow-200 w-full">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 w-6 h-6' />
                            <span className="w-full">CRONOGRAMA EVENTOS DIPLOMADO 2024</span>
                            <FaExternalLinkSquareAlt className='h-6 w-6' />
                        </a>
                        {/*  */}
                        <a href={pdfDiptico} className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-700 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 gap-2 bg-gradient-to-tr from-pink-300 to-yellow-100 w-full">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 w-6 h-6' />
                            <span className="w-full">Diptico Diseño</span>
                            <FaExternalLinkSquareAlt className='h-6 w-6' />
                        </a>
                        {/*  */}
                        <a href={pdfInnovacionEscolar} className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-700 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 gap-2 bg-gradient-to-tr from-blue-300 to-sky-100 w-full" >
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 w-6 h-6' />
                            <span className="w-full">Innovación Escolar e Inteligencia Artificial - CRESPF</span>
                            <FaExternalLinkSquareAlt className='h-6 w-6' />
                        </a>
                        {/*  */}
                        <a href={pdfProgramadaDiplomado} className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-700 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 gap-1 w-full bg-gradient-to-tr from-green-300 to-sky-100">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 w-6 h-6' />
                            <span className="w-full capitalize">Programa Diplomado Innovación Escolar e Inteligencia Artificial Generativa - CRESPF 2024 </span>
                            <FaExternalLinkSquareAlt className='h-6 w-6' />
                        </a>
                        {/*  */}
                    </div>
                </div>

                <div className='col-span-2 my-4  p-4'>
                    <p className="text-slate-400 text-center font-bold text-2xl flex items-center justify-center gap-2">
                        <FaVideo />
                        Videos Promocionales
                    </p>

                    <div className='flex h-full '>
                        <div className='grid justify-center items-center mx-5 mt-10 grid-cols-1 xl:grid-cols-2 gap-2'>
                            <video className='' controls >
                                <source src={videoPromotional2} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                            <video className='' controls >
                                <source src={videoPromotional3} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>


                </div>

            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 mt-20'>

                <div className='col-span-2 my-4   md:p-2'>
                    <h3 className='text-2xl font-bold mx-auto  my-4 capitalize text-slate-400 text-center'>

                        Invitaciones
                    </h3>
                    <div className='grid sm:grid-cols-2 gap-2'>
                        <figure className='item-img'>
                            <img src={invitacion1} alt="" />
                        </figure>
                        <figure className='item-img'>
                            <img src={invitacion2} alt="" />
                        </figure>
                    </div>
                </div>

                <div className='col-span-1 my-4  p-4'>
                    <h3 className='text-2xl font-bold mx-auto  my-4 capitalize text-slate-400 flex gap-2 items-center text-center'>
                        <FaSignsPost />
                        Libro “La Escuela Infinita”
                    </h3>

                    <div className='py-10 flex ju'>
                        <div className='flex'>
                            <div className="block max-w-sm p-6 bg-gradient-to-tr from-purple-300 to-blue-200 rounded-lg shadow hover:bg-gray-100 flex-grow hover:scale-105 transition-all duration-300 ease-in-out ">
                                <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 h-8 w-8' />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white text-center mt-4">La Escuela Infinita Libro</h5>

                                <p className='font-normal text-gray-700'>
                                    Aprender y Enseñar en Entornos Ubicos
                                </p>

                                <div className='flex justify-around mt-5'>
                                    <a className="flex flex-col justify-center items-center font-semibold text-green-700 " href='https://laescuelainfinita.aprendiendo.cu' target='_blank'>
                                        <CiLink />
                                        Ver en línea
                                    </a>
                                    <a href={pdfLibroInfinito} className='flex flex-col justify-center items-center font-semibold text-blue-700' target='_blank'>
                                        <MdOutlineFileDownload className='text-center' />
                                        Descargar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    )
}

export default DiplomadoInformation;