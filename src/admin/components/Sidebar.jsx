import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaNewspaper } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { BiHomeAlt, BiLogInCircle, BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom, SiInstructure } from "react-icons/si"
import { TbLogin } from "react-icons/tb";

const adminNavItems = [
    {
        to: "/admin/home",
        icon: <BiHomeAlt className="text-2xl" />,
        label: "Inicio",
    },
    {
        to: "/admin/news",
        icon: <FaNewspaper className="text-2xl" />,
        label: "Noticias",
    },
    {
        to: "/admin/academy-activities",
        icon: <BiSelectMultiple className="text-2xl" />,
        label: "Actividades Academicas",
    },
    {
        to: "/admin/users",
        icon: <SiGoogleclassroom className="text-2xl" />,
        label: "Usuarios",
    },
    {
        to: "/admin/admin-",
        icon: <SiInstructure className="text-2xl" />,
        label: "Oferta Educativa",
    },

]


const SideBar = () => {

    const [open, setOpen] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <div className={`${open ? 'w-72 overflow-y-auto' : 'w-[90px] overflow-auto'}  p-5 md:block hidden pt-8 relative duration-300 shadow-xl bg-slate-200   `}>

                <div className="flex gap-x-4 items-center">
                    <div
                        onClick={() => setOpen(!open)}
                        className={`cursor-pointer h-6 w-6 duration-500 ${open && "rotate-[360deg]"}`}
                    >
                        <TiThMenuOutline className="h-6 w-6" />
                    </div>
                    <h1
                        onClick={() => setOpen(!open)}
                        className={`text-slate-700 cursor-pointer font-bold origin-left duration-200 ${!open && 'scale-0'}`}
                    >Administrador</h1>
                </div>

                {/* NavLinks */}

                <ul className="pt-6">
                    <p className={`ml-3 text-gray-600 ${!open && 'hidden'} text-sm text-center mb-2`}>Menu</p>
                    {
                        adminNavItems.map((item, index) => (
                            <li key={index} className="space-y-2">
                                <NavLink className={({ isActive }) => `flex ${isActive ? 'bg-red-500 text-white' : 'text-[#413f44]'} duration-150 rounded-md p-2 cursor-pointer  hover:bg-Teal hover:text-white font-bold text-sm items-center gap-2 `} to={item.to}>
                                    {item.icon}
                                    <span className={`${!open && 'hidden'}  duration-200`}>{item.label}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className='space-y-2'>
                        <button
                            className=' duration-150 rounded-md p-2 cursor-pointer  hover:bg-Teal hover:text-white font-bold text-sm items-center gap-2 flex'
                            onClick={handleSubmit}
                        >
                            <TbLogin className="text-2xl" />
                            Cerrar sesión
                        </button>
                    </li>
                </ul>


            </div>
        </>
    )
}

export default SideBar