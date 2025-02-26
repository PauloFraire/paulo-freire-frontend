import React, { useState, useEffect } from 'react'
import clientAxios from '../../../config/clientAxios';
import Spinner from '../../../components/Spinner';
import { toast } from 'react-hot-toast'
import { IoIosEyeOff } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';

const AddUser = () => {

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    });

    const navigate = useNavigate();

    const [password2, setPassword2] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('id');

    useEffect(() => {
        if (userId) {
            const getUser = async () => {
                try {
                    const response = await clientAxios.get(`/user/${userId}`);
                    const userData = response.data;
                    setUser({
                        name: userData.name,
                        lastName: userData.lastName,
                        email: userData.email,
                        password: '',
                        role: userData.role
                    });
                } catch (error) {
                    console.log(error);
                    toast.error('Error al cargar los datos del usuario');
                }
            };
            getUser();
        }
    }, [userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            // Validar campos requeridos
            const requiredFields = userId 
                ? [user.name, user.lastName, user.email, user.role]
                : [user.name, user.lastName, user.email, user.password, user.role, password2];

            if (requiredFields.some(field => !field?.trim())) {
                toast.error('Todos los campos son obligatorios');
                setLoading(false);
                return;
            }

            if (!userId) {
                if (user.password !== password2) {
                    toast.error('Las contraseñas no coinciden');
                    setLoading(false);
                    return;
                }

                if (user.password.length < 8) {
                    toast.error('La contraseña debe tener al menos 8 caracteres');
                    setLoading(false);
                    return;
                }
            }

            const response = userId
                ? await clientAxios.put(`/user/${userId}`, user)
                : await clientAxios.post('/user', user);

            if (response.status === 200) {
                setLoading(false);
                toast.success(userId ? 'Usuario actualizado correctamente' : 'Usuario agregado correctamente');

                setTimeout(() => {
                    navigate('/admin/users');
                }, 1500);
            }

        } catch (error) {
            setLoading(false);
            toast.error('Hubo un error al agregar el usuario');
            console.log(error);
        }
    }

    return (
        <section className="container mx-auto">

            <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">
                {userId ? 'Editar Usuario' : 'Agregar Usuario'}
            </h1>

            <div className=' max-w-5xl mx-auto p-4 mt-10 shadow-lg'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4 justify-between'>
                        <div className='flex gap-2'>
                            <div className='w-full'>
                                <label htmlFor="name" className="font-semibold text-slate-700 pb-2">
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className='input-auth'
                                    placeholder="Ej. Adan"
                                    defaultValue={user.name}
                                    onChange={e => setUser({ ...user, name: e.target.value })}
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="lastName" className="font-semibold text-slate-700 pb-2">
                                    Apellido:
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className='input-auth'
                                    placeholder="Ej. Lopez Martinez"
                                    defaultValue={user.lastName}
                                    onChange={e => setUser({ ...user, lastName: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='w-full'>
                                <label htmlFor="email" className="font-semibold text-slate-700 pb-2">
                                    Correo:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className='input-auth'
                                    placeholder="Ej. correo@correo.com"
                                    defaultValue={user.email}
                                    onChange={e => setUser({ ...user, email: e.target.value })}
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="rol" className="font-semibold text-slate-700 pb-2">
                                    Rol:
                                </label>
                                <select
                                    name="rol"
                                    id="rol"
                                    className='input-auth'
                                    defaultValue={user.role}
                                    onChange={e => setUser({ ...user, role: e.target.value })}
                                >
                                    <option value="">--Seleccione un Rol</option>
                                    <option value="0">Estudiante</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Editor</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='w-full'>
                                <label htmlFor="password" className="font-semibold text-slate-700 pb-2">
                                    Contraseña:
                                </label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        id="password" className='input-auth'
                                        placeholder="Ingrese su Contraseña"
                                        defaultValue={user.password}
                                        onChange={e => setUser({ ...user, password: e.target.value })}
                                    />
                                    <IoIosEyeOff
                                        className={`absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110 ${showPassword ? 'text-blue-600' : 'text-slate-500'}`}
                                        onClick={togglePassword}
                                    />

                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="password2" className="font-semibold text-slate-700 pb-2">
                                    Repetir Contraseña:
                                </label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password2"
                                        id="password2" className='input-auth'
                                        placeholder="Ingrese su Contraseña"
                                        defaultValue={password2}
                                        onChange={e => setPassword2(e.target.value)}
                                    />
                                    <IoIosEyeOff
                                        className={`absolute top-1/2 right-3 transform -translate-y-1/3 hover:cursor-pointer hover:scale-110 ${showPassword ? 'text-blue-600' : 'text-slate-500'}`}
                                        onClick={togglePassword}
                                    />

                                </div>
                            </div>

                        </div>

                        {
                            loading ? <Spinner /> : (
                                <button
                                    type="submit"
                                    className="btn-action"
                                >
                                    {userId ? 'Actualizar Usuario' : 'Agregar Usuario'}
                                </button>
                            )
                        }
                    </div>

                </form>
            </div>

        </section>
    )
}

export default AddUser
