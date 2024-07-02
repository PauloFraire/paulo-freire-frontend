import React, { useEffect, useState } from 'react'
import clientAxios from '../../../config/clientAxios'
import { Link } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';


const AdminUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await clientAxios.get('/user');
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, [])


    const roleDefault = (role) => {
        switch (role) {
            case 1:
                return 'Editor';
            case 2:
                return 'Bibloteca';
            default:
                return 'Administrador';
        }
    }

    return (
        <section className="container mx-auto bg-slate-50">
            <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">Administra Los Usuarios</h1>

            {/* Link agregar nueva imagen */}

            <p className="text-center  my-4 mx-2">
                Aqui podras administrar los usuarios de la pagina web
            </p>

            <div className="flex my-2 mx-10">
                <div className="p-2">
                    <Link to='/admin/add-user' className="btn-action p-2">
                        <IoIosAddCircle className="text-2xl" />
                        Agregar Usuario
                    </Link>
                </div>
            </div>

            <div className="">
                <div className="col-span-1 overflow-auto bg-slate-50 shadow-lg p-4">
                    <table className="table-auto border w-full my-2">
                        <thead>
                            <tr>
                                <th className="px-2 py-2 border text-gray-600">No.</th>
                                <th className="px-2 py-2 border text-gray-600">Nombre</th>
                                <th scope="col" className="px-2 py-2 border text-gray-600">Correo</th>
                                <th className="px-2 py-2 border text-gray-600">Rol</th>
                                {/* <th className="px-2 py-2 border text-gray-600">Acciones</th>
                                <th scope="col" className="px-2 py-2 border text-gray-600">Ver</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-sm text-gray-600 mt-2">No hay Usuarios</td>
                                    </tr>
                                ) : (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td className="px-2 py-2 border text-center">
                                                {index + 1}
                                            </td>
                                            <td className="px-2 py-2 border text-center">
                                                {user.name} {user.lastName}
                                            </td>
                                            <td className="px-2 py-2 border text-center">
                                                {user.email}
                                            </td>
                                            <td className="px-2 py-2 border text-center">
                                                {
                                                    roleDefault(user.role)
                                                }
                                            </td>
                                            {/* <td className="px-2 py-2 border">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link to={`/admin/edit-news/${user._id}`} className="">
                                                        <TiEdit className="text-2xl text-blue-600" />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(user._id)}
                                                        className="hover:scale-105 transition-all ease-in-out duration-300"
                                                    >
                                                        <RiDeleteBin6Line className="text-2xl text-red-600" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-2 py-2 border text-center">
                                                <Link to={`/new-item/${user._id}`} className="btn-action p-2">
                                                    Ver
                                                </Link>
                                            </td> */}
                                        </tr>
                                    )))

                            }
                        </tbody>
                    </table>
                    <div className="text-sm text-gray-600 mt-2">

                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdminUsers