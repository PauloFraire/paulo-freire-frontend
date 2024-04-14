import React from 'react';
import Breadcrumbs from '../components/navbar/Breadcrumbs';
import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";
import img3 from "../assets/img/img3.jpeg";
import img13 from "../assets/img/img13.jpeg";

import becaEstatal from "../assets/img/becaEstatal.jpeg";
import becaFederal from "../assets/img/becaFederal.jpg";

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

                    <div className="pt-20 pb-16 bg-indigo-700 p-4">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 basis-[18rem] text-white">
                                <h1 className="mb-2 text-4xl  font-bold tracking-tight text-gray-900 dark:text-white">
                                    Beca Federal
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
                                            Fecha de Convocatoria: 01/01/2022
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Professional and experienced human resource</p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Provide the best services for users</p>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Modern city locations and exceptional lifestyle</p>
                                    </div>
                                    <a href="/ConvocatoriaBecas_federal.pdf" className=" bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:cursor-pointer">
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

                    <div className="pt-20 pb-16 bg-pink-700 p-4">
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
                                <h1 className="mb-2 text-4xl  font-bold tracking-tight text-gray-900 dark:text-white">
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
                                            Fecha de Convocatoria: 01/01/2022
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Professional and experienced human resource</p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Provide the best services for users</p>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center gap-x-2">
                                        <div className="rounded-full p-2  text-orange-600 !bg-orange-400/20">
                                            <FiCheck />
                                        </div>
                                        <p>Modern city locations and exceptional lifestyle</p>
                                    </div>
                                    <a href="/convocatoria_2023.pdf" className=" bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:cursor-pointer">
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