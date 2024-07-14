import React from 'react';
import GaleryBeforeAndAfter from '../anniversary/GaleryBeforeAndAfter';
import HistoryAnniversary from '../anniversary/HistoryAnniversary';
import Invitations from '../anniversary/Invitations';

const Anniversary = () => {
    return (
        <section className=' '>
            <div className='max-w-[1400px] container mx-auto my-20 '>

                <h3 className='text-3xl font-extrabold text-blue-500 text-center py-4 uppercase '>
                    20 Aniversario 🎉🎉
                    <span className='text-blue-500 block'> ¡ Gracias por ser parte de esta comunidad ! </span>
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 w-full py-10 gap-8'>
                    <HistoryAnniversary />
                    <GaleryBeforeAndAfter />
                    <Invitations />
                </div>
            </div>

        </section>
    )
}

export default Anniversary;