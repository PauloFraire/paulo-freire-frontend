import React from 'react'

const CardBook = ({ title, description, pdf }) => {
    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover object-center md:h-full md:w-48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Tesis Doctorales</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            {title}
                        </a>
                        <p className="mt-2 text-gray-500">
                            {description}
                        </p>

                        <a href={pdf} className="bg-green-100 text-green-800 text-sm font-medium my-8 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 underline" target='_blank'>
                            Descargar
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardBook