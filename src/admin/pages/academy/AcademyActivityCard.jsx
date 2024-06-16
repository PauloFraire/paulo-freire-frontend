import React, { useState } from 'react'
import AllImages from './AllImages';
import { IoIosAddCircle } from "react-icons/io";
import clientAxios from '../../../config/clientAxios';
import toast from 'react-hot-toast';

const AcademyActivityCard = ({ activity }) => {

    const { _id } = activity;
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUploadImage = async (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        formData.append('description', 'imagen de actividad');
        formData.append('id', _id);

        try {
            const response = await clientAxios.post('/image-activity', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false);

            if (response.status === 200) {
                toast.success('Imagen subida correctamente');
                // window.location.reload();
            }
            console.log(response);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


    return (
        <div className="relative  m-4 bg-white p-4 shadow-lg">
            <h3 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold">
                {activity.title}
            </h3>
            <p>{_id}</p>
            <div className="relative flex flex-col space-y-2">
                <div className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12 bg-Teal">
                    <IoIosAddCircle className="text-2xl" />
                    <span>Subir Imagen</span>
                </div>
                <input
                    onChange={handleUploadImage}
                    type="file"
                    name="image"
                    accept=".jpg, .jpeg, .png, .gif, .bmp , .svg .tif, .tiff|image/*"
                    className="absolute z-10 opacity-0 cursor-pointer w-full h-full top-0 left-0"
                />
            </div>

            <AllImages
                loading={loading}
                id={_id}
            />
        </div>
    )
}

export default AcademyActivityCard