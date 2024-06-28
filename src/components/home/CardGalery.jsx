import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import clientAxios from '../../config/clientAxios';

const CardGalery = ({ id, category }) => {


    const categoryContainer = useRef(null);
    const [isScroll, setIsscroll] = useState(false);
    const [imageActivity, setImageActivity] = useState([]);


    const scrollContainer = (direction) => {
        direction === "right"
            ? (categoryContainer.current.scrollLeft += 200)
            : (categoryContainer.current.scrollLeft -= 200);
        categoryContainer.current.scrollLeft > 0
            ? setIsscroll(true)
            : setIsscroll(false);
    };

    useEffect(() => {

        const getAcademyActivities = async () => {
            try {
                const response = await clientAxios.get(`/image-activity/${id}`);
                setImageActivity(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getAcademyActivities();

    }, []);

    return (

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-4">
            <div className="md:col-span-1 flex justify-center items-center ">
                <h1 className="ml-5 text-2xl  text-center p-2 font-extrabold text-blue-900  md:text-2xl lg:text-4xl ">
                    {category}
                </h1>

                {/* <button className="mt-4 btn btn-primary">all categories</button> */}
            </div>
            <div className="md:col-span-3 ">
                <div className="justify-end flex items-center  gap-x-3">
                    <button
                        className={`bg-blue-500 rounded-sm shadow !p-2 ${!isScroll && "opacity-50 cursor-not-allowed"
                            }`}
                        onClick={() => scrollContainer("left")}
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className="bg-blue-500 rounded-sm shadow !p-2"
                        onClick={() => scrollContainer("right")}
                    >
                        <FiChevronRight />
                    </button>
                </div>

                <div
                    className="gap-3 mt-4 overflow-auto flex items-center scroll-smooth hide-scrollbar"
                    ref={categoryContainer}
                >
                    {imageActivity.map(({ _id, url }) => (
                        <div
                            key={_id}
                            className="relative flex-shrink-0 w-[300px] group rounded-lg overflow-hidden"
                        >
                            <div className="overflow-hidden rounded-lg hover:opacity-50">
                                <Link className="!opacity-100">
                                    <img
                                        src={url}
                                        alt={_id}
                                        className="w-full  h-[300px] object-cover group-hover:scale-125 transition-a"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default CardGalery;