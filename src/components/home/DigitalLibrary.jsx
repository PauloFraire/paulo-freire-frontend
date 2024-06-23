import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgBook from "../../assets/imgBook.png";
import clientAxios from '../../config/clientAxios';
import Spinner from '../Spinner';
import { toast } from 'react-hot-toast'

const DigitalLibrary = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    //navegacion

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!email.trim() || !password.trim()) {
            toast.error('Debes llenar todos los campos')
            setLoading(false)
            return
        }

        try {
            const response = await clientAxios.post('/login', { email, password })

            setLoading(false)

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setTimeout(() => {
                    navigate('/biblioteca')
                }, 2000)
            }


        }
        catch (error) {
            toast.error('Error al iniciar sesión')
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className='news-section bg-gradient-to-br bg-blue-600'>

            <div className='flex flex-col mx-10  px-5 '>
                <h2 className='font-extrabold text-5xl text-center uppercase mb-10 text-slate-200'>Biblioteca Digital</h2>
                <section className="">

                    <div className=" flex  md:gap-x-5 gap-y-5 pb-10 items-center justify-center">

                        <div className="flex shadow-2xl p-4 items-center bg-gradient-to-tr bg-gray-200" >
                            <div className='  p-2'>
                                <img src={imgBook} alt="image book" className='rounded-lg' />

                            </div>
                            <form className=" max-w-[600px] mx-auto  p-10  rounded-e-xl" onSubmit={handleSubmit}>
                                <h3 className="sm:text-3xl text-2xl font-bold mb-5 text-slate-700 text-center">
                                    Repositorio digital de trabajos recepcionales y antologías del DECDP y MTAE
                                </h3>
                                <div className='space-y-2'>
                                    <label htmlFor="email" className='font-medium text-slate-700 pb-2'>
                                        Ingresa tu correo:
                                    </label>
                                    <input
                                        id='email'
                                        type="text"
                                        placeholder="Ingresa tu correo "
                                        className="input-auth"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor="password" className='font-medium text-slate-700 pb-2'>
                                        Ingresa tu contraseña:
                                    </label>
                                    <input
                                        id='password'
                                        type="password"
                                        placeholder="Ingresa tu correo "
                                        className="input-auth"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {/* boton */}

                                <div className='mt-5'>
                                    {
                                        loading ? (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1 }}
                                            >
                                                <Spinner />
                                            </motion.div>
                                        ) : (
                                            <button
                                                type='submit'
                                                className='btn-action'
                                            >
                                                Iniciar Sesión
                                            </button>
                                        )

                                    }
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