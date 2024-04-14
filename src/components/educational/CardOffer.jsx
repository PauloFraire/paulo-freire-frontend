import React from 'react'

const CardOffer = ({ maestria }) => {


    return (
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
            <div className={` ${maestria.state ? 'bg-amber-500' : 'bg-sky-700'}  w-8`}>

            </div>
            <div className="p-6">
                <div className="relative p-6 px-6 py-14 md:px-12">

                    <div
                        className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('${maestria.photo}')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
                        style={{ backgroundImage: `url(${maestria.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50">

                        </div>
                    </div>
                </div>
                <h4 className="block my-5 font-sans text-center text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {maestria.name}

                </h4>
                <div>
                    <p class="font-sans text-base antialiased font-light leading-relaxed text-inherit mb-5">
                        {maestria.description}
                    </p>
                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <a className="flex items-center" href='/pdf/PLAN DE ESTUDIOS, INSCRIPCIONES Y REQUISITOS.pdf'>
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <p className=''>
                                Plan de Estudios, Inscripciones y Requisitos
                            </p>
                        </a>
                        <a className="flex items-center"
                            href={`/pdf/${maestria.ficha}`}
                        >
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <p className=''>
                                Ficha de Inscripción
                            </p>
                        </a>
                        <a className="flex items-center"
                            href={`/pdf/${maestria.carta}`}
                        >
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <p className=''>
                                Carta  compromiso
                            </p>
                        </a>


                    </ul>
                </div>
                <a href="#" className="inline-block mt-5">
                    <button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Conoce Más
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                    </button>
                </a>
            </div>


        </div>
    )
}

export default CardOffer