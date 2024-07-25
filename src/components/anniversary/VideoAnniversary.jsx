import React from 'react';
import videoDrMarcelo from '../../assets/video/welcome-dr-marcelo.mp4';
import videoDrReynaldo from '../../assets/video/welcome-dr-reynaldo.mp4';

const VideoAnniversary = () => {
    return (
        <div className='max-w-[1400px] container mx-auto  bg-gradient-to-tr from-green-200 to-cyan-200 p-2 flex justify-center'>
            <div className='grid justify-center items-center mx-auto  grid-cols-1  gap-2 '>
                <div className='flex justify-center'>
                    <video className='w-2/3' controls >
                        <source src={videoDrMarcelo} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='flex justify-center'>
                    <video className='w-2/3' controls >
                        <source src={videoDrReynaldo} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default VideoAnniversary