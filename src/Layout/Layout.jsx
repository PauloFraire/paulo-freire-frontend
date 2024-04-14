import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgChat from '../assets/img/chat.png'

const Layout = () => {

  //scroll al inicio de la pagina

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div className='fixed bottom-9 right-4 '>
        <img src={imgChat} alt="" width={35} height={35} />
      </div>
      <div className='section animate__animated animate__fadeIn'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout