import { Link, Outlet } from "react-router-dom"
import SideBar from "./components/Sidebar"
import Header from "../components/Header"
import { logos } from "../data/Data"


const DashboardLayout = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-between  items-center bg-Teal">
                    <Link className="text-xl  uppercase tracking-wide  justify-center " to={"/"}>
                        <img src={logos[0]} alt="Logo principal" className="h-20 w-auto" />
                    </Link>
                    <div className="text-xl w-full uppercase tracking-wide ml-2 justify-center">
                        <img src={logos[3]} alt="Logo principal" className="h-20" />
                    </div>
                </div>
            </div>
            <div className='min-h-screen flex flex-col md:flex-row'>

                <SideBar />

                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout