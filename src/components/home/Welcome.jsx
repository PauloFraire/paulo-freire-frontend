import React from 'react';
import { SiOnlyoffice } from "react-icons/si";
import { logos } from "../../data/Data.jsx";

const Welcome = () => {
    return (
        <div className='mt-5'>

            <div className="grid grid-cols-1 overflow-hidden  sm:grid-cols-2 md:grid-cols-2">
                <div className="md:col-span-1 border-solid border-white  space-y-5 flex flex-col justify-center items-center bg-hero">
                    <div className="text-xl w-full uppercase tracking-wide bg-slate-100 justify-center">
                        <img src={logos[4]} alt="Logo principal" className="h-6/6" />
                    </div>
                    <iframe width="900" height="450" src="https://www.youtube.com/embed/dgImRg7Xqkk?si=Px4HxRVQd6_9yHjG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className=' lg:w-auto'></iframe>
                </div>
                <div className='p-10 bg-[#0d3c55] !text-slate-100'>
                    <div className="text-4xl font-bold capitalize lg:text-5xl text-center">
                        Bienvenido  {" "}

                    </div>

                    <div className='my-5'>

                        <div className='flex items-center mb-4'>

                            <div className=''>
                                <h2 className='font-bold text-xl'>¿Quiénes Somos  ?</h2>
                                <p className='leading-relaxed mt-4 text-lg'>
                                    El Centro Regional de Educación Superior “Paulo Freire” (CRESPF), fue fundado hace ya más de catorce años por un grupo de maestros mexicanos con amplia experiencia educativa en distintos niveles y modalidades de la educación durante muchos años dentro del Sistema Educativo Nacional.
                                </p>
                            </div>
                        </div>

                        {/* Misión */}

                        <div className='flex items-center  mb-4'>
                            <div className=''>
                                <h2 className='font-bold text-xl'>Misión</h2>
                                <p className='leading-relaxed mt-5 text-lg'>Somos una Institución preocupados por ofrecer posgrados de calidad, que apoyen a liberar al ser humano de sus enajenaciones y demás presiones socioeconómicas, políticas y culturales en general por medio de una “EDUCACIÓN PARA LA LIBERTAD”. </p>
                            </div>
                        </div>

                        {/* Visión */}

                        <div className='flex items-center  mb-4'>
                            <div className=''>
                                <h2 className='font-bold text-xl'>Visión</h2>
                                <p className='leading-relaxed mt-5 text-lg'>Ser una escuela de posgrado con referente internacional, generadora de conocimiento e innovación comprometida con la formación sólida e integral de profesionales, especialistas e investigadores de excelencia, brindando una oferta académica flexible y dinámica que responda a las necesidades del mundo globalizado </p>
                            </div>
                        </div>

                        <div className='flex items-center  mb-4'>

                            <div className=''>
                                <h2 className='leading-relaxed text-lg'>Valores Institucionales</h2>
                                <p className='mt-5 text-lg text-justify'>Filosofía educativa humanista con responsabilidad social</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome