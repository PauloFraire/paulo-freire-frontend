import React from 'react'
import pdfAnniversary from '../../assets/pdf/historico-aniversario-20.pdf'
import { MdOutlineFileDownload } from 'react-icons/md'
import imgHistory from '../../assets/img/img14.jpeg'

const HistoryAnniversary = () => {
    return (
        <div className='bg-gradient-to-tr from-purple-200 to-pink-200'>

            <p className='text-2xl font-bold text-gray-500 text-center mb-2 uppercase '>
                Historia del CRESPF
            </p>
            <span className='text-green-700 block font-bold text-center my-3'> ¡ Gracias por ser parte de esta comunidad !</span>

            <div className=''>

                <div className='flex justify-center mb-2'>
                    <img src={imgHistory} alt="historia del aniversario" className='w-80 object-cover object-center rounded-md shadow' loading='lazy' />
                </div>

                <div className='flex justify-center items-center mb-2'>
                    <a href={pdfAnniversary} className='flex flex-col justify-center items-center font-semibold text-blue-700' target='_blank'>
                        <MdOutlineFileDownload className='text-center' />
                        Descargar
                    </a>
                </div>
                <div className='flex flex-col justify-center items-center mx-2'>

                    <p className='text-lg text-justify '>
                        Bosquejo histórico del Centro Regional de Educación Superior Paulo Freire: autor Dr. Reynaldo Ceballos Hernández, fundador y director académico del CRES.
                        <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HistoryAnniversary