import React from 'react';
import Galery from '../components/home/Galery';
import Breadcrumbs from '../components/navbar/Breadcrumbs';

const AcademyActivities = () => {

    const breadcrumbs = ['Actividades Academicas'];

    return (
        <div>

            <div className='flex m-10'>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            <h1 className="font-extrabold text-4xl text-center uppercase my-10 text-gray-700">Actividades Académicas</h1>
            <Galery />

        </div>
    )
}

export default AcademyActivities