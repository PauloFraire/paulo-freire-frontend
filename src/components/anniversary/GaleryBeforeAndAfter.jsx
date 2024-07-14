import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import imgBefore1 from '../../assets/img/before-crespf/1.jpeg';
import imgBefore2 from '../../assets/img/before-crespf/2.jpeg';
import imgBefore3 from '../../assets/img/before-crespf/3.jpeg';
import imgBefore4 from '../../assets/img/before-crespf/4.jpeg';
import imgBefore5 from '../../assets/img/before-crespf/5.jpeg';
import imgBefore6 from '../../assets/img/before-crespf/6.jpeg';
import imgBefore7 from '../../assets/img/before-crespf/7.jpeg';
import imgBefore8 from '../../assets/img/before-crespf/8.jpeg';
import imgBefore9 from '../../assets/img/before-crespf/9.jpeg';
import imgBefore10 from '../../assets/img/before-crespf/10.jpeg';
import imgBefore11 from '../../assets/img/before-crespf/11.jpeg';
import imgBefore12 from '../../assets/img/before-crespf/12.jpeg';


// import required modules
import { EffectCards } from 'swiper/modules';

const GaleryBeforeAndAfter = () => {
    return (
        <div className='flex justify-around gap-4 flex-col sm:flex-row items-center bg-gradient-to-tr from-purple-200 to-pink-200'>
            <div className=''>
                <p className='text-center mb-2 text-xl font-bold text-green-600'>Antes</p>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={imgBefore1} alt="imagen before 1" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore2} alt="imagen before 2" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore3} alt="imagen before 3" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore4} alt="imagen before 4" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore5} alt="imagen before 5" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore6} alt="imagen before 6" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore7} alt="imagen before 7" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore8} alt="imagen before 8" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore9} alt="imagen before 9" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore10} alt="imagen before 10" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore11} alt="imagen before 11" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore12} alt="imagen before 12" className='h-full object-cover object-center' /></SwiperSlide>

                </Swiper>
            </div>
            <div>
                <p className='text-center mb-2 text-xl font-bold text-purple-600'>Después</p>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={imgBefore1} alt="imagen before 1" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore2} alt="imagen before 2" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore3} alt="imagen before 3" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore4} alt="imagen before 4" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore5} alt="imagen before 5" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore6} alt="imagen before 6" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore7} alt="imagen before 7" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore8} alt="imagen before 8" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore9} alt="imagen before 9" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore10} alt="imagen before 10" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore11} alt="imagen before 11" className='h-full object-cover object-center' /></SwiperSlide>
                    <SwiperSlide><img src={imgBefore12} alt="imagen before 12" className='h-full object-cover object-center' /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default GaleryBeforeAndAfter