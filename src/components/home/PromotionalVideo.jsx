import React from 'react'
import videoPromotional from '../../assets/video/IA-paulo-freire.mp4'


const PromotionalVideo = () => {

    return (
        <section className='my-20'>
            <div className='container mx-auto max-w-7xl'>

                <h3 className='text-3xl font-extrabold text-green-700 text-center mb-2 uppercase '>
                    DIPLOMADO "Innovación escolar e inteligencia artificial generativa"
                    <span className='text-green-700 block'> ¡ Inscríbete ya  !</span>
                </h3>

                <div className='h-2 bg-yellow-400 my-4'></div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-2'>
                    <div className='flex justify-center items-center'>
                        <video className='w-full' controls >
                            <source src={videoPromotional} type='video/mp4' au />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='flex flex-col justify-center items-center'>

                        <p className='text-lg text-justify'>La educación se encuentra en un momento crucial de transformación.
                            La inteligencia artificial generativa (IA generativa) irrumpe en el
                            panorama educativo con un potencial sin precedentes para
                            revolucionar la forma en que enseñamos y aprendemos, pero también
                            como una peligrosa amenaza para la humanidad. Este diplomado
                            surge como respuesta a la necesidad imperiosa de formar a
                            educadores en el dominio de la IA generativa en el aula,
                            permitiéndoles innovar en sus prácticas docentes de manera creativa,
                            ética y efectiva.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromotionalVideo