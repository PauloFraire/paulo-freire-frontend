import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavLinks = ({ path, link, setToggle }) => {
    return (
        <div>
            <li className="list-none cursor-pointer mr-8 text-center">
                <Link
                    to={path}
                    className="font-bold text-center hover:text-gray-900 transition-all duration-300 text-slate-100"
                    onClick={() => setToggle(false)}
                >
                    {link}
                </Link>
            </li>
        </div>
    )
}

export default MobileNavLinks