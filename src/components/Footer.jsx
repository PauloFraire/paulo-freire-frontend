import React from 'react';
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { logos } from '../data/Data';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            transition={{ duration: 1 }}
            className="border-t-2 border-slate-500 bg-[#201E1E] p-5"
        >
            <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white font-semibold">
                <div className='flex flex-col justify-center items-center'>
                    <p className="font-bold mb-6 text-center">CENTRO REGIONAL DE EDUCACIÓN SUPERIOR PAULO FREIRE</p>
                    <img
                        src={logo}
                        alt="logo"
                        className="h-36 w-40"
                    />
                </div>
                <div>
                    <div className="font-bold mb-6">Inicio</div>
                    <div className="flex flex-col gap-4">
                        <a href="#quienes-somos" className="text-sm hover:underline">
                            ¿Quiénes Somos?
                        </a>
                        <a href="#mision" className="text-sm hover:underline">
                            {" "}
                            Misión
                        </a>
                        <a href="#vision" className="text-sm hover:underline">
                            Visión
                        </a>
                        <a href="#valores" className="text-sm hover:underline">
                            Valores Institucionales
                        </a>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Organización</div>
                    <div className="flex flex-col gap-4">
                        <Link to={`/organization`} className="text-sm hover:underline">
                            Directorio
                        </Link>
                        <Link to={`/organization`} className="text-sm hover:underline">
                            Organigrama
                        </Link>

                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Oferta Educativa</div>
                    <div className="flex flex-col gap-4">
                        <Link to={`/educational-offer`} className="text-sm hover:underline">
                            Maestría en Tecnologías Aplicadas a la Educación
                        </Link>
                        <Link to={`/educational-offer`} className="text-sm hover:underline">
                            Doctorado en Educación y Cultura Digital Pedagógica
                        </Link>

                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Siguenos</div>
                    <div className="text-sm mb-4">centrodeeducacionsuperiorpaulo@gmail.com</div>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/profile.php?id=61561008735948" className="hover:scale-110 text-xl" target='_blank'>
                            <BsFacebook />
                        </a>
                        <a href="" className="hover:scale-110 text-xl">
                            <BsInstagram />
                        </a>
                        <a href="https://x.com/centropaulofrei" className="hover:scale-110 text-xl" target='_blank'>
                            <BsTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <p className="font-bold text-center text-white">
                Todos los derechos reservados 2024
            </p>
        </motion.div>
    )
}

export default Footer