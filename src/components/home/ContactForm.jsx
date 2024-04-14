import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHome } from "react-icons/fi";


const ContactForm = () => {
    return (
        <div>
            <div className="pt-10 pb-16 container mx-auto flex justify-center">
                <div className="grid grid-cols-1 overflow-hidden  sm:grid-cols-2 md:grid-cols-2">
                    <div className="md:col-span-1 flex justify-center items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7870156061335!2d-96.99303821896235!3d19.593623320515885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f3be7c3af49%3A0x919fee000616836b!2sCentro%20Regional%20de%20Educaci%C3%B3n%20Superior%20Paulo%20Freire%20A.C.!5e0!3m2!1ses-419!2smx!4v1705433781568!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="md:col-span-1 flex-col gap-5 p-5  bg-Teal text-slate-100 flex justify-center items-center ">
                        <div>
                            <div className="flex sm:text-3xl justify-center text-2xl font-bold mb-5 ">
                                <p className='tetx-center'> Contáctanos</p>
                            </div>
                            <h3 className="t ">
                                Escribe un Mensaje y nos pondremos en contacto contigo
                            </h3>

                            <div className="mt-5 flex-align-center gap-x-3">
                                <motion.form
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-5 "
                                >
                                    <div>

                                        <input
                                            type="text"
                                            placeholder="Ingresa tu correo "
                                            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-full"
                                        />
                                    </div>
                                    <div className='mt-5'>
                                        {   /* text area mensaje  */}
                                        <textarea
                                            name="mensaje"
                                            id="mensaje"

                                            placeholder="Escribe tu mensaje"
                                            className="sm:p-3 p-2 outline-none text-sm shadow-md w-full"
                                        ></textarea>
                                    </div>
                                    <div className='mt-5'>
                                        <button className="bg-sky-700 p-4 rounded-sm hover:bg-sky-800 cursor-pointer">
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </motion.form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactForm