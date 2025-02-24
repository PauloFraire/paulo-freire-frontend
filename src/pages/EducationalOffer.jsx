import React from 'react';
import Breadcrumbs from '../components/navbar/Breadcrumbs';
import CardOffer from '../components/educational/CardOffer';
import { maestrias } from '../data/Data';

const EducationalOffer = () => {

  const breadcrumbs = ['Oferta Educativa'];

  return (
    <section className='my-20 container mx-auto'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="container mx-auto mt-10">
        <h1 className="font-extrabold text-4xl text-center uppercase mb-10">Oferta Educativa</h1>

        <div
          className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4 mx-5 mt-5 '
        >
          <CardOffer maestria={maestrias[0]} />
          <CardOffer maestria={maestrias[1]} />
          <CardOffer maestria={maestrias[2]} />
        </div>
      </div>

    </section>
  )
}

export default EducationalOffer