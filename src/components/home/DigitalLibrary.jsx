import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgBook from "../../assets/imgBook.png";

const DigitalLibrary = () => {
    return (
        <div className='news-section bg-gradient-to-br bg-blue-600'>

            <div className='flex flex-col mx-10  px-5 '>
                <h2 className='font-extrabold text-5xl text-center uppercase mb-10 text-slate-200'>Biblioteca Digital</h2>
                <section className="">

                    <div className=" flex  md:gap-x-5 gap-y-5 pb-10 items-center justify-center">

                        <div className="flex shadow-2xl p-4 items-center bg-gradient-to-tr from-blue-700 to-green-600" >
                            <div className='  p-2'>
                                <img src={imgBook} alt="image book" className='rounded-lg' />

                            </div>
                            <form className="text-center max-w-[600px] mx-auto  p-14  rounded-e-xl">
                                <h3 className="sm:text-3xl text-2xl font-bold mb-5 text-slate-700">
                                    Repositorio digital de trabajos recepcionales y antologías del DECDP y MTAE
                                </h3>
                                <div className='mb-5'>
                                    <label htmlFor="email" className='font-medium text-slate-700 pb-2'>
                                        Ingresa tu correo:
                                    </label>
                                    <input
                                        id='email'
                                        type="text"
                                        placeholder="Ingresa tu correo "
                                        className="input-auth"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className='font-medium text-slate-700 pb-2'>
                                        Ingresa tu contraseña:
                                    </label>
                                    <input
                                        id='password'
                                        type="password"
                                        placeholder="Ingresa tu correo "
                                        className="input-auth"
                                    />
                                </div>
                                {/* boton */}

                                <div className='mt-5'>
                                    <Link to='/biblioteca' className="btn-action">
                                        Ingresar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DigitalLibrary