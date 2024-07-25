import React from 'react'
import invitation from '../../assets/img/invitation.png';
import invitation2 from '../../assets/img/invitation2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


function Invitations() {
    return (
        <section className='max-w-[1400px] container mx-auto  bg-gradient-to-tr from-green-200 to-cyan-200 p-2'>

            <p className='text-2xl font-bold text-gray-500 text-center mb-2 uppercase '>
                Invitación al evento
            </p>

            <div className='flex justify-center'>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="swiper2"
                >

                    <SwiperSlide>
                        <img src={invitation} alt="Invitación 1" className='h-full' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={invitation2} alt="Invitación 2" className='h-full ' />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Invitations