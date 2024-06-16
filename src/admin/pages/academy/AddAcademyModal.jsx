import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import Spinner from '../../../components/Spinner';
import { toast } from 'react-hot-toast';
import clientAxios from '../../../config/clientAxios';
import { useNavigate } from 'react-router-dom';
import { FaSave } from "react-icons/fa";

const AddAcademyModal = ({ open, setOpen }) => {

    const navigate = useNavigate();

    const [academyActivity, setAcademyActivity] = useState({
        title: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);

    console.log(academyActivity)

    const handleChangeState = (e) => {
        setAcademyActivity({ ...academyActivity, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (academyActivity.title.trim() === '' || academyActivity.description.trim() === '') {
            toast.error('No puede haber campos vacios');
            setLoading(false);
            return;
        }

        try {
            const response = await clientAxios.post(`/academy-activities`, academyActivity);
            console.log(response);
            setLoading(false);
            if (response.status === 200) {
                toast.success('Agregado Correctamente');
                setAcademyActivity({
                    title: '',
                    description: ''
                });
                setTimeout(() => {
                    setOpen(!open);
                    navigate('/admin/home')
                }, 2000);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <div className={`${open ? '' : 'hidden'} fixed top-0 left-0 z-30 w-full h-full bg-black  bg-opacity-85`}>
            <div className={`${open ? '' : 'hidden'} fixed inset-0 m-4  flex items-center z-30 justify-center `}>
                <div className='relative bg-white w-12/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8 '>
                    <div className='flex items-center justify-between w-full pt-4' action="">
                        <h3 className='font-bold'>Agregar una Actividad Academica</h3>
                        <div
                            onClick={() => setOpen(!open)}
                            className='cursor-pointer text-gray-100 py-2 px-2 rounded-full'
                        >
                            <IoMdCloseCircle className='w-8 h-8 text-red-500 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' />
                        </div>
                    </div>
                    <form className='w-full bg-white' onSubmit={handleSubmit}>
                        <div className='flex flex-col space-y-4'>
                            <div >
                                <label htmlFor="title" className="font-bold text-slate-700 mb-2">
                                    Titulo:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className='input-auth'
                                    placeholder="EJ. Diplomado en Herramientas"
                                    value={academyActivity.title}
                                    onChange={handleChangeState}
                                />
                            </div>
                            <div >
                                <label htmlFor="description" className="font-bold text-slate-700 mb-2">
                                    Descripción:
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    className='input-auth'
                                    placeholder="Ej. Imagenes de la actividad"
                                    value={academyActivity.description}
                                    onChange={handleChangeState}
                                />
                            </div>
                        </div>


                        {
                            !loading ?
                                <button className="btn-action">
                                    <FaSave className="w-6 h-6" />
                                    <span>Agregar</span>
                                </button> :
                                <Spinner />
                        }
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddAcademyModal