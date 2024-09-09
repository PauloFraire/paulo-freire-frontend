import React from 'react'

const CardContact = ({ contactInfo }) => {
    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4 m-4'>
            {contactInfo.map((location, index) => (
                <div
                    key={index}
                    className='flex flex-col justify-center bg-white shadow-lg p-5 border-l-4 border-blue-900'
                >
                    <h2>{location.location}</h2>
                    <ul>
                        {location.personal.map((per, i) => (
                            <li key={i}>
                                <strong>{per.name}</strong>
                                <br />
                                <strong>Cel.:</strong> {per.phone}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div >

    )
}

export default CardContact