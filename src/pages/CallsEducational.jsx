import React from 'react';
import Breadcrumbs from '../components/navbar/Breadcrumbs';
import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";
import img3 from "../assets/img/img3.jpeg";
import img13 from "../assets/img/img13.jpeg";

import becaEstatal from "../assets/img/becaEstatal.jpeg";
import becaFederal from "../assets/img/becaFederal.jpg";

import pdfBecaFederal from "../assets/pdf/ConvocatoriaBecas_federal.pdf";
import pdfBecaEstatal from "../assets/pdf/convocatoria_2023.pdf";

const CallsEducational = () => {

    const breadcrumbs = ['Convocatorias'];

    return (
        <div className=''>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <div className=" mx-auto  ">
                <h1 className="font-extrabold text-4xl text-center uppercase mb-10">Becas y Apoyos</h1>

                <div className='p-5'>
                    <p className='flex justify-center items-center mx-auto mb-4 text-lg leading-relaxed max-w-3xl text-center'>
                        El Centro Regional de Educación Superior “Paulo Freire” (CRESPF), apoya en gestionar las Becas estatales y federales como incentivo en estudiar tus posgrados con nosotros
                    </p>

                    <div className="pt-20 pb-16 bg-gradient-to-tr from-indigo-500 to-purple-600 p-4">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 basis-[18rem] text-white">
                                <h1 className="mb-2 text-4xl  font-bold tracking-tight text-gray-800 dark:text-white">
                                    Beca Federal
                                </h1>
                                <p className="mt-3">
                                    La Secretaría de Educación de Veracruz, con fundamento en el artículo 3o de la Constitución Política de los Estados Unidos Mexicanos y 7 inciso B) fracción XX del Reglamento Interior de la Secretaría de Educación de Veracruz:
                                </p>

                                <div className="mt-4">
                                    <div className="flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>
                                            Se requiere 3 años de antigüedad ininterrumpidos en el sistema, cumplidos al momento de solicitar la prestación.
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Original de la carta de aceptación definitiva de la Especialidad, Maestría o Doctorado, expedida por la Institución de Educación Superior Nacional.</p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Carta Compromiso original (Anexo II)</p>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Escrito de exposición de motivos original, en el que se exprese y acredite el interés de realizar estudios de posgrado, la relación entre los estudios que desea realizar, y su función, mínimo dos cuartillas (Enfoque Pedagógico y sin datos administrativos).</p>
                                    </div>
                                    <a href={pdfBecaFederal} className=" bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:cursor-pointer" target='_black'>
                                        Descargar Formato
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 basis-[20rem]">
                                <div className="relative">
                                    <img
                                        src={becaFederal}
                                        alt=""
                                        className="rounded-lg w-full sm:h-[400px] object-cover"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 pb-16 bg-gradient-to-br from-pink-400 to-rose-600 p-4">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 basis-[20rem]">
                                <div className="relative">
                                    <img
                                        src={becaEstatal}
                                        alt=""
                                        className="rounded-lg w-full sm:h-full object-cover object-center"
                                    />

                                </div>
                            </div>

                            <div className="flex-1 basis-[18rem] text-white">
                                <h1 className="mb-2 text-4xl  font-bold tracking-tight text-gray-800 dark:text-white">
                                    Beca Estatal
                                </h1>
                                <p className="mt-3">
                                    Beca Federal para estudiantes, con el fin de apoyar a los estudiantes que deseen estudiar un posgrado en el CRESPF
                                </p>

                                <div className="mt-4">
                                    <div className="flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>
                                            Convocatorias 2023
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Acta de Nacimiento</p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>CURP</p>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Indentificación ofical</p>
                                    </div>
                                    <a href={pdfBecaEstatal} className=" bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:cursor-pointer">
                                        Descargar Formato
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CallsEducational;