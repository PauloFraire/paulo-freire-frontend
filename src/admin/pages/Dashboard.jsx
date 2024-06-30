import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AllImagesCustomsize from "../components/AllImagesCustomsize";
import clientAxios from "../../config/clientAxios";

const Dashboard = () => {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('token')
    console.log(token)

    const handleImage = async (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('img', file);
        try {
            const response = await clientAxios.post('/customsize', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    return (
        <>
            <section className="container mx-auto bg-slate-50">
                <h1 className="text-4xl font-bold text-center mt-10">Dashboard</h1>

                {/* Link agregar nueva imagen */}


                <p className="text-center  my-10 mx-2">
                    Administra la sección de noticias, la biblioteca, la oferta educativa, las actividades de la academia, las convocatorias y la organización.
                </p>


                <div className="m-4 grid grid-cols-1 md:grid-cols-4 row-gap-4 col-gap-4">
                    <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 border-indigo-200">
                        <div className="bg-indigo-200 p-2 cursor-pointer rounded-full">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <div className="text-2xl font-semibold">
                            {/* {data ? data.totalData.Users : 0} */} 16
                        </div>
                    </div>
                </div>


                <div className="relative  m-4 bg-white p-4 shadow-lg">
                    <h3 className="border-b-2 border-green-700 mb-4 pb-2 text-2xl font-semibold">
                        Customsize
                    </h3>
                    <p></p>
                    <div className="relative flex flex-col space-y-2">
                        <div className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12 bg-Teal">
                            <IoIosAddCircle className="text-2xl" />
                            <span>Subir Imagen</span>
                        </div>
                        <input
                            onChange={handleImage}
                            type="file"
                            name="image"
                            accept=".jpg, .jpeg, .png, .gif, .bmp , .svg .tif, .tiff|image/*"
                            className="absolute z-10 opacity-0 cursor-pointer w-full h-full top-0 left-0"
                        />
                    </div>

                    <AllImagesCustomsize loading={loading} />

                </div>



            </section>
        </>
    )
}

export default Dashboard