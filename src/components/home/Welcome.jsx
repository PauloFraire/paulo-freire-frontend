import React from 'react';
import { SiOnlyoffice } from "react-icons/si";
import { logos } from "../../data/Data.jsx";

const Welcome = () => {
    return (
        <div className='mt-5 bg-gray-200'>

            <div className="grid grid-cols-1 overflow-hidden  lg:grid-cols-2">
                <div className="md:col-span-1 border-solid border-white  space-y-5 flex flex-col justify-center items-center bg-hero">
                    <div className="text-xl w-full uppercase tracking-wide bg-slate-100 justify-center">
                        <img src={logos[4]} alt="Logo principal" className="h-6/6" />
                    </div>
                    <iframe src="https://www.youtube.com/embed/dgImRg7Xqkk?si=Px4HxRVQd6_9yHjG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-[600px] h-[500px]'></iframe>
                </div>
                <div className='p-10  '>
                    <div className="text-4xl font-bold capitalize lg:text-5xl text-center border-b-4 border-orange-600 p-2">
                        Bienvenido  {" "}

                    </div>

                    <div className='my-5 text-slate-700'>

                        <div className='flex items-center mb-4 '>

                            <div className=''>
                                <h2 className='font-bold text-xl ' id='quienes-somos'>¿Quiénes Somos  ?</h2>

                                <p className='leading-relaxed mt-4 text-lg'>
                                    El Centro Regional de Educación Superior “Paulo Freire” (CRESPF), fue fundado hace ya más de catorce años por un grupo de maestros mexicanos con amplia experiencia educativa en distintos niveles y modalidades de la educación durante muchos años dentro del Sistema Educativo Nacional.
                                </p>
                            </div>
                        </div>



                        {/* Misión */}

                        <div className='flex items-center  mb-4' id='mision'>
                            <div className=''>
                                <h2 className='font-bold text-xl'>Misión</h2>
                                <p className='leading-relaxed mt-5 text-lg'>Somos una Institución preocupados por ofrecer posgrados de calidad, que apoyen a liberar al ser humano de sus enajenaciones y demás presiones socioeconómicas, políticas y culturales en general por medio de una “EDUCACIÓN PARA LA LIBERTAD”. </p>
                            </div>
                        </div>

                        {/* Visión */}

                        <div className='flex items-center  mb-4' id='vision'>
                            <div className=''>
                                <h2 className='font-bold text-xl'>Visión</h2>
                                <p className='leading-relaxed mt-5 text-lg'>Ser una escuela de posgrado con referente internacional, generadora de conocimiento e innovación comprometida con la formación sólida e integral de profesionales, especialistas e investigadores de excelencia, brindando una oferta académica flexible y dinámica que responda a las necesidades del mundo globalizado. </p>
                            </div>
                        </div>

                        <div className='flex items-center  mb-4' id='valores'>

                            <div className=''>
                                <h2 className='font-bold text-xl'>Valores Institucionales</h2>
                                <p className='mt-5 text-lg text-justify'>Filosofía educativa humanista con responsabilidad social.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome