import React from 'react';
import Breadcrumbs from '../components/navbar/Breadcrumbs';
import CardProfile from '../components/organization/CardProfile';
import CardContact from '../components/organization/CardContact';

import { authorities, contactInfo } from '../data/Data';
import { motion } from 'framer-motion';


const Organization = () => {

  const breadcrumbs = ['Organización'];

  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <div className='bg-white'>


      <div className='flex justify-center my-5'>

        <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
      </div>

      <div className=" max-w-6xl container mx-auto mt-10">


        <section className=''>

          <div
            className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4  mt-5'
          >

            <CardProfile profile={authorities[1]} />
            <CardProfile profile={authorities[0]} />
            <CardProfile profile={authorities[2]} />
            <CardProfile profile={authorities[3]} />
            <CardProfile profile={authorities[4]} />
            <CardProfile profile={authorities[5]} />
            <CardProfile profile={authorities[6]} />
          </div>

        </section>

        <div className='mt-10 '>
          <h2 className="font-semibold text-center text-2xl uppercase mb-10 text-slate-900 underline decoration-teal-800">Circulos de estudio zona norte de ver.</h2>

          <div className=''>
            <CardContact contactInfo={contactInfo} />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Organization