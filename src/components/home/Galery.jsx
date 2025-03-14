import React, { useEffect, useRef, useState } from 'react';
import { imgGalery } from '../../data/Data';
import { imageCHC, imageDDOC, imageTP } from '../../data/DataGalery';
import CardGalery from './CardGalery';
import clientAxios from '../../config/clientAxios';
import Spinner from '../Spinner';

const Galery = () => {

    const [academyActivities, setAcademyActivities] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getAcademyActivities = async () => {
            setLoading(true);
            try {
                const response = await clientAxios.get('/academy-activities');
                setAcademyActivities(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }

        getAcademyActivities();

    }, []);

    return (
        <div className="pt-10 pb-10 space-y-8 bg-gray-100 justify-center">

            {
                loading ? <Spinner /> :

                    academyActivities.map((activity) => (
                        <CardGalery
                            key={activity._id}
                            id={activity._id}
                            category={activity.title}
                        />
                    ))
            }

        </div>

    )
}

export default Galery;