import { Link, NavLink, Outlet } from "react-router-dom"
import SideBar from "./components/Sidebar"
import Header from "../components/Header"
import { logos } from "../data/Data"
import { useState } from "react"

import { Toaster } from "react-hot-toast"



const DashboardLayout = () => {

    return (
        <>
            <Header />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex gap-2">

                <SideBar />

                <div className="container mx-auto max-w-full overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout