import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHome } from "react-icons/fi";
import clientAxios from '../../config/clientAxios';
import Spinner from '../Spinner';
import { toast } from 'react-hot-toast';

const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email.trim() || !message.trim()) {
            setLoading(false);
            return toast.error('Todos los campos son obligatorios');
        }

        try {
            const response = await clientAxios.post('/api/email', { email, message });
            setLoading(false);

            if (response.status === 200) {
                toast.success('Mensaje enviado correctamente');
            }

        } catch (error) {
            setLoading(false);
            toast.error('Ocurrió un error al enviar el mensaje');
        }
    }

    return (
        <div>
            <div className=" pb-16 container mx-auto flex justify-center">
                <div className="grid grid-cols-1 overflow-hidden  sm:grid-cols-2 md:grid-cols-2">
                    <div className="md:col-span-1 flex justify-center items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7870156061335!2d-96.99303821896235!3d19.593623320515885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f3be7c3af49%3A0x919fee000616836b!2sCentro%20Regional%20de%20Educaci%C3%B3n%20Superior%20Paulo%20Freire%20A.C.!5e0!3m2!1ses-419!2smx!4v1705433781568!5m2!1ses-419!2smx" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="md:col-span-1 flex-col gap-5 p-5 bg-gradient-to-tr from-blue-400 to-blue-800 text-slate-100 flex justify-center items-center ">
                        <div>
                            <div className="flex sm:text-3xl justify-center text-2xl font-bold mb-5 ">
                                <p className='tetx-center text-slate-100'> Contáctanos</p>
                            </div>
                            <h3 className="text-center ">
                                Escribe un Mensaje y nos pondremos en contacto contigo.
                                <span className='block'>centrodeeducacionsuperiorpaulo@gmail.com</span>
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
                                            className="input-auth text-slate-500"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-5'>
                                        {   /* text area mensaje  */}
                                        <textarea
                                            name="mensaje"
                                            id="mensaje"

                                            placeholder="Escribe tu mensaje"
                                            className="input-auth text-slate-500"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className='w-full flex justify-end mt-5'>
                                        {
                                            loading ? <Spinner /> : <button
                                                onClick={handleSubmit}
                                                className="btn-action"
                                            >
                                                Enviar
                                                <FiArrowRight className='ml-2' />
                                            </button>

                                        }
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