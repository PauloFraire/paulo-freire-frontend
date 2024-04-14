import React from "react";
// import { Link } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ path, link }) => {
    const location = useLocation();
    return (
        <li className="list-none cursor-pointer mr-8">
            <Link
                to={path}
                className={`${location.pathname === path ? "border-b-4 border-Teal" : ""}
                 hover:border-Teal f bg-Teal text-slate-100 bg-opacity-0 hover:bg-opacity-10 px-2 py-1  transition-all duration-300 `}
            >
                {link}
            </Link>
        </li>
    );
};

export default NavLink;
