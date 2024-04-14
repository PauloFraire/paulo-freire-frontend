import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../../assets/img1.png";
import { motion } from 'framer-motion';
import { news } from '../../data/Data'
import { FiArrowRight } from "react-icons/fi";


const News = () => {

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className='flex flex-col  mt-10 px-5 py-10 bg-news'>
            <h2 className=' text-4xl md:text-5xl sm:text-2xl text-slate-200 text-center uppercase mb-10'>Noticias</h2>
            <section className="">

                <div className=" grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
                    {
                        news.map(({ id, titulo, img, descripcion, date, path }) => (
                            <div
                                className={` overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-slate-200 bg-clip-border border-8 border-solid border-white`}
                            >
                                <div >
                                    <img
                                        src={img} alt="title" className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                                    />
                                </div>
                                <div className="p-5">
                                    <div >
                                        <h2 className=" text-center font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                                            {titulo}
                                        </h2>
                                        <p className="text-dark-light mt-3 text-sm md:text-lg">
                                            {descripcion}
                                        </p>
                                    </div>
                                    <div className="flex justify-between flex-nowrap items-center mt-6">
                                        <div className="flex items-center gap-x-2 md:gap-x-2.5">
                                            <div className="flex flex-col">
                                                <h4 className="font-bold  text-dark-soft text-sm md:text-base">
                                                    {date}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-2 flex text-center items-center justify-center'>
                                        <Link
                                            to={path}
                                            className="w-full gap-x-1 items-center mt-5 lg:mt-0 text-center border-2  px-6 py-2 rounded-md font-semibold bg-Teal text-white hover:bg-green-900"
                                        >
                                            Leer más
                                        </Link>
                                    </div>


                                </div>
                            </div>

                        ))
                    }
                </div>

                <div className="flex justify-center mt-10">
                    {/* <Link className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold "
                        to="/"
                    >
                        Ver más
                    </Link> */}
                </div>
            </section>
        </div>
    )
}

export default News