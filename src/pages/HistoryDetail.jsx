import React from 'react'
import { FiCheck } from "react-icons/fi";
import img14 from "../assets/img/img14.jpeg";
import img15 from "../assets/img/img15.jpeg";
import img16 from "../assets/img/img16.jpeg";

import imgl1 from "../assets/img/lucio1.jpg";
import imgl2 from "../assets/img/lucio2.jpg";
import imgl3 from "../assets/img/lucio3.webp";
import imgl4 from "../assets/img/lucio4.jpg";

import imgPerote1 from "../assets/img/imgPerote1.jpeg";
import imgPerote2 from "../assets/img/imgPerote2.jpeg";

import libroPerote from "../assets/pdf/Prueba_De Xalapa a Perote.pdf";
import { FaRegFilePdf } from 'react-icons/fa6';
import { CiLink } from 'react-icons/ci';
import { MdOutlineFileDownload } from 'react-icons/md';

const HistoryDetail = () => {
    return (
        <div className='container mx-auto bg-gray-50'>
            <div className="max-w-5xl  mx-auto  mt-20 p-5">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className="md:col-span-3">
                        <div>
                            <h1 className=" text-center mb-8 text-4xl  text-slate-700 font-bold ">
                                Historia y Cultura Regional
                            </h1>
                            <h3 className=" text-center mb-8 text-2xl text-slate-700 font-bold">
                                Rafael Lucio Ver.
                            </h3>
                            <img
                                src={imgl2}
                                alt=""
                                className="w-full h-[500px] object-cover"
                            />
                            <p className="my-10 text-lg max-w-5xl mx-auto leading-relaxed text-slate-500">
                                La sede principal del Centro Regional de Educación Superior Paulo Freire, se encuentra localizada en Rafael Lucio, Ver.

                                Y desde esta página de la Institución se quiere enaltecer la riqueza de la cultura del estado de Veracruz, que sea este apartado un centro de difusión, más alla de la cultura en el ámbito educacional.
                            </p>
                            <p className="my-8 text-lg max-w-5xl mx-auto leading-relaxed text-slate-500">
                                El municipio de Rafael Lucio se encuentra en el estado mexicano de Veracruz, es uno de los 212 municipios de la entidad y tiene su ubicación en la zona centro montañosa del estado. Sus coordenadas son 19°35” latitud norte, con una longitud oeste de 96°59” y con una altura de 1,840 m s. n. m.
                                El municipio fue nombrado en honor del médico, científico y académico mexicano Rafael Lucio Nájera quien describió la lepra lepromatosa difusa, más tarde conocida como lepra de Lucio y Latapí.6 y fuera médico de Benito Juárez y de Maximiliano I de México

                            </p>
                            <h2 className="mt-4 text-4xl font-bold text-center">
                                Historia
                            </h2>
                            <p className="mt-4  max-w-5xl mx-auto text-lg flex leading-relaxed text-slate-500">
                                En 1586 existía un poblado llamado San Miguel del Soldado, correspondiendo a una venta establecida ahí después de consolidada la conquista.
                                El 18 de enero de 1735 el virrey Juan Antonio de Vizarrón y Eguiarreta, autorizó la fundación del pueblo.
                                En mayo de 1835 Daniel Thomas Egerton, un paisajista británico, visitó el pueblo de San Miguel del Soldado y realizó dos óleos sobre lienzo del pueblo y su iglesia.9
                                Por Decreto del 5 de noviembre de 1932 se crea el municipio de Rafael Lucio y la cabecera se denomina Rafael Lucio, en honor del ilustre médico xalapeño.

                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-2 max-w-[900px] mx-auto">
                                <div className='w-full object-cover object-center'>
                                    <img
                                        src={imgl1}
                                        alt=""
                                        className="w-full  "
                                    />
                                </div>
                                <div className='w-full h-full object-cover object-center row-span-2 '>
                                    <img
                                        src={imgl4}
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className='w-full object-cover object-center '>
                                    <img
                                        src={imgl3}
                                        alt=""
                                        className="w-full  "
                                    />

                                </div>
                                <div className='w-full object-cover object-center sm:col-span-2'>
                                    <img
                                        src={img16}
                                        alt=""
                                        className="w-full  sm:h-[400px]"
                                    />

                                </div>
                                <div className='w-full object-cover object-center '>
                                    <img
                                        src={img15}
                                        alt=""
                                        className="w-full  "
                                    />

                                </div>
                                <div className='w-full object-cover object-center '>
                                    <img
                                        src={img14}
                                        alt=""
                                        className="w-full  "
                                    />

                                </div>
                            </div>
                            <p className="mt-3 max-w-5xl mx-auto text-lg leading-relaxed mb-5 text-slate-500">
                                Al centro se representan las principales características económicas y geográficas del municipio, en el recuadro superior se muestra una mazorca atravesada con dos machetes símbolo de la principal actividad agrícola del lugar, abajo atraviesa la vía del ferrocarril que cruza por casi todo el municipio y en su auge el ferrocarril fue una de las fuentes de empleo más importante dentro del municipio. En los recuadros inferiores se destacan a la izquierda una vaca y un cántaro, ya que la ordeña de la leche es otro de los principales sustentos de los rafaeluciences; y a la derecha se muestra un panorama de las construcciones tradicionales del pueblo rodeado por el Cofre de Perote, toda vez que este municipio pertenece a esa misma sierra.
                                La parte superior se destaca por una cruz, que es el símbolo de la principal religión que se profesa en el lugar, la católica, por lo mismo la frase "Quien como Dios", en honor al Santo Patrono del Lugar San Miguel Arcángel y nombre que llevó la cabecera municipal durante varios siglos, San Miguel del Soldado.
                                En la parte inferior lleva el nombre oficial del municipio de Rafael Lucio, en honor al ilustre médico mexicano desde el año de 1932.
                                Costados: Detalles en Flores que representan la vasta vegetación con la que cuenta el municipio, incluso otra actividad comercial en pequeña escala es vender flores decorativas

                            </p>

                            <div className='mt-10'>
                                <h3 className="mt-4 text-4xl font-bold text-center text-slate-700 mb-10">
                                    Libro Perote
                                </h3>

                                <p className="mt-3 max-w-5xl mx-auto text-lg leading-relaxed mb-5 text-slate-500 ">
                                    La Dirección Académica y la Dirección de Investigación y Difusión Cultural del Centro Regional de Educación Superior “Paulo Freire”, en su afán de estimular la cultura de investigación entre los estudiantes de los posgrados, ha creado nueva investigación “DE XALAPA A PEROTE EN EL SIGLO XVI, caminos, ventas y practicas pre- mercantiles”, hoy se presenta a la comunidad de esta Casa de Estudios, en la que se desarrollan las tres funciones sustantivas clásicas de toda universidad: la investigación, la docencia y la difusión cultural.

                                    <span className='font-bold block'>REYNALDO O. MARTIN CEBALLOS ALPUCHE </span>
                                </p>

                                <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>

                                    <div>
                                        <img src={imgPerote1}
                                            alt=""
                                            className="w-full  "
                                        />
                                    </div>

                                    <div>
                                        <img src={imgPerote2}
                                            alt=""
                                            className="w-full  "
                                        />
                                    </div>

                                    <div className='py-10 flex h-full'>
                                        <div className='flex'>
                                            <div class="block max-w-sm p-6 bg-gradient-to-tr from-green-300 to-blue-200 rounded-lg shadow hover:bg-gray-100 flex-grow hover:scale-105 transition-all duration-300 ease-in-out ">
                                                <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 h-8 w-8' />
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white text-center mt-4">La Escuela Infinita Libro</h5>

                                                <p className='font-normal text-gray-700 text-center'>
                                                    De Xalapa a Perote en el Siglo XVI: Caminos, ventas y prácticas pre-mercantiles.
                                                </p>

                                                <div className='flex justify-around mt-5'>

                                                    <a href={libroPerote} className='flex flex-col justify-center items-center font-semibold text-blue-700' target='_blank'>
                                                        <MdOutlineFileDownload className='text-center' />
                                                        Descargar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HistoryDetail