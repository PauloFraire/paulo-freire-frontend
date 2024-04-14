import React from 'react'

const CardProject = () => {
    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Proyectos de desarrollo educativo
                        </div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Yhosimar Proyecto de desarrollo
                        </a>
                        <p className="mt-2 text-gray-500">
                            NEARPOD, HERRAMIENTA DIGITAL PARA LA EVALUACIÓN 2.0, EDUCACIÓN A DISTANCIA DE LA COMPRENSIÓN LECTORA EN EDUCACIÓN PRIMARIA
                        </p>

                        <span className="bg-green-100 text-green-800 text-sm font-medium my-8 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 underline">
                            Descargar
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardProject