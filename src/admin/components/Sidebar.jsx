import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaNewspaper, FaAngleDoubleDown, FaCog, FaBook } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { BiHomeAlt, BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom, SiInstructure } from "react-icons/si";
import { GiThink } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";
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
    label: "Actividades Académicas",
  },
  {
    to: "/admin/contexto-contemporaneo-admin",
    icon: <GiThink className="text-2xl" />,
    label: "Contexto Contemporáneo",
  },
  {
    to: "/admin/users",
    icon: <SiGoogleclassroom className="text-2xl" />,
    label: "Usuarios",
  },
  {
    to: "/admin/ofertaeducativa",
    icon: <SiInstructure className="text-2xl" />,
    label: "Oferta Educativa",
  },
  {
    to: "/admin/becas",
    icon: <AiFillDollarCircle className="text-2xl" />,
    label: "Becas",
  },

  {
    to: "/admin/about",
    icon: <FaBook className="text-2xl" />,
    label: "Acerca de",
    subItems: [
      { to: "/admin/about/deslinde", label: "Deslinde legal" },
      { to: "/admin/about/terminos", label: "Términos y condiciones" },
      { to: "/admin/about/politicas", label: "Políticas de privacidad" },
    ],
  },
  {
    to: "/admin/configempresa",
    icon: <FaCog className="text-2xl" />,
    label: "Configuración datos de la empresa",
  },
];

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={`${
        open ? "w-72 overflow-y-auto" : "w-[90px] overflow-auto"
      } p-5 md:block hidden pt-8 relative duration-300 shadow-xl bg-slate-200`}
    >
      <div className="flex gap-x-4 items-center">
        <div
          onClick={() => setOpen(!open)}
          className={`cursor-pointer h-6 w-6 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        >
          <TiThMenuOutline className="h-6 w-6" />
        </div>
        <h1
          onClick={() => setOpen(!open)}
          className={`text-slate-700 cursor-pointer font-bold origin-left duration-200 ${
            !open && "scale-0"
          }`}
        >
          Administrador
        </h1>
      </div>

      <ul className="pt-6">
        <p
          className={`text-gray-600 ${
            !open && "hidden"
          } text-sm text-center mb-2`}
        >
          Menu
        </p>
        {adminNavItems.map((item, index) => (
          <li key={index} className="space-y-2">
            {item.subItems ? (
              <div className="flex items-center">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-2 w-full ${
                      isActive ? "bg-red-500 text-white" : "text-[#413f44]"
                    } duration-150 rounded-md p-2 cursor-pointer hover:bg-Teal hover:text-white font-bold text-sm`
                  }
                  to={item.to}
                >
                  {item.icon}
                  <span
                    className={`${
                      !open ? "hidden" : "block"
                    } duration-200 flex-1`}
                  >
                    {item.label}
                  </span>
                  {open && (
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Evita que se active la navegación
                        setAboutOpen(!aboutOpen);
                      }}
                      className="p-2 focus:outline-none"
                    >
                      <FaAngleDoubleDown
                        className={`text-2xl transition-transform ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </NavLink>
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive ? "bg-red-500 text-white" : "text-[#413f44]"
                  } duration-150 rounded-md p-2 cursor-pointer hover:bg-Teal hover:text-white font-bold text-sm`
                }
                to={item.to}
              >
                {item.icon}
                <span className={`${!open ? "hidden" : "block"} duration-200`}>
                  {item.label}
                </span>
              </NavLink>
            )}

            {/* Submenú de "Acerca de" solo se muestra si la barra está abierta */}
            {item.subItems && aboutOpen && open && (
              <ul className="ml-6">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="space-y-2">
                    <NavLink
                      className={({ isActive }) =>
                        `flex items-center gap-2 ${
                          isActive ? "bg-red-500 text-white" : "text-[#413f44]"
                        } duration-150 rounded-md p-2 cursor-pointer hover:bg-Teal hover:text-white font-bold text-sm`
                      }
                      to={subItem.to}
                    >
                      <span
                        className={`${!open ? "hidden" : "block"} duration-200`}
                      >
                        {subItem.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="space-y-2">
          <button
            className="flex items-center gap-2 duration-150 rounded-md p-2 cursor-pointer hover:bg-Teal hover:text-white font-bold text-sm"
            onClick={handleSubmit}
          >
            <TbLogin className="text-2xl" />
            {open && <span className="duration-200">Cerrar sesión</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
