import React, { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import { IoIosEyeOff } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import Spinner from '../../components/Spinner'
import { toast } from 'react-hot-toast';
import clientAxios from '../../config/clientAxios';

const Login = () => {


    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //fetch to backend

        if (user.email.trim() === '' || user.password.trim() === '') {
            toast.error('No puede haber campos vacios')
            return
        }
        setLoading(true)
        try {
            const response = await clientAxios.post('/login', user);
            setLoading(false)
            console.log(response.data)

            if (response.status === 200) {
                localStorage.setItem('token', JSON.stringify(response.data.user))
                navigate('/admin/home')
            }

        } catch (error) {
            console.log(error)
            toast.error('Hubo un error')
            setLoading(false);
        }
    }


    const updateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300 my-16  from-sky-800 to-blue-100">

            <h1 className="text-4xl font-bold text-center text-slate-700">
                Iniciar Sesión
            </h1>
            <p className="text-slate-500 font-bold">

            </p>

            {/* <div className="my-5 flex gap-x-2 sm:flex-row flex-col">
                <button className="btn-auth">
                    <FcGoogle className='w-6 h-6' /> <span>Continua con Google</span>
                </button>
                <button className="btn-auth">
                    <FaFacebook className="w-6 h-6 text-blue-700" /><span>Continua con Facebook</span>
                </button>
            </div> */}

            <form
                onSubmit={handleSubmit}
                className="my-5"
            >
                <div className="flex flex-col space-y-5">
                    <div >
                        <label htmlFor="email" className="font-medium text-slate-700 pb-2">
                            Correo:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='input-auth'
                            placeholder="Ingrese su Email"
                            defaultValue={user.email}
                            onChange={updateState}
                        />
                    </div>
                    <div >
                        <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password" className='input-auth'
                                placeholder="Ingrese su Contraseña"
                                defaultValue={user.password}
                                onChange={updateState}
                            />
                            <IoIosEyeOff
                                className={`absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110 ${showPassword ? 'text-blue-600' : 'text-slate-500'}`}
                                onClick={togglePassword}
                            />

                        </div>
                    </div>

                    {/* o inicie sesion con */}

                    <div className='flex items-center justify-center'>
                        {
                            // Widget()
                            // < Turnstile siteKey={import.meta.env.VITE_TURNSTILE} />
                        }
                    </div>

                    <div className="flex flex-row justify-between">
                        <div>
                            <label htmlFor="remember" className="">
                                <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-blue-600" />
                                Recordar contraseña
                            </label>
                        </div>
                        <div>
                            <Link to='/olvide-password' className="font-medium text-blue-600">Recuperar Contraseña?</Link>
                        </div>
                    </div>
                    {
                        !loading ?
                            <button className="btn-action">
                                <IoLogIn className="w-6 h-6" />
                                <span>Login</span>
                            </button> :
                            <Spinner />
                    }

                </div>
            </form>


        </div>

    )
}

export default Login