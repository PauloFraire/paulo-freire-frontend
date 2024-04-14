import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import {
    HiUser,
    HiArrowSmRight,
    HiDocumentText,
    HiOutlineUserGroup,
    HiAnnotation,
    HiChartPie,
    HiOutlineArrowSmRight,
} from 'react-icons/hi';

const SideBar = () => {
    return (
        <>
            <Sidebar className='w-full md:w-56 shadow bg-gradient-to-tr from-yellow-500 to-orange-300'>
                <Sidebar.Items>
                    <Sidebar.ItemGroup className='flex flex-col gap-1'>

                        <Link to='/dashboard?tab=profile'>
                            <Sidebar.Item
                                // active={tab === 'profile'}
                                icon={HiUser}
                                // label={currentUser.isAdmin ? 'Admin' : 'User'}
                                labelColor='dark'
                                as='div'
                            >
                                Inicio
                            </Sidebar.Item>
                        </Link>


                        <Sidebar.Item
                            icon={HiDocumentText}
                            as='div'
                        >
                            Documents
                        </Sidebar.Item>

                        <Sidebar.Item
                            icon={HiOutlineArrowSmRight}
                            className='cursor-pointer'
                        // onClick={handleSignout}
                        >
                            Cerrar Sesión
                        </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar >
        </>
    )
}

export default SideBar