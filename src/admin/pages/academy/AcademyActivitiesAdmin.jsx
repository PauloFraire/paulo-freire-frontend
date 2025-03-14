import { useState, useEffect } from "react";
import clientAxios from '../../../config/clientAxios';
import Spinner from "../../../components/Spinner";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from 'react-hot-toast';
import AddAcademyModal from "./AddAcademyModal";
import AcademyActivityCard from "./AcademyActivityCard";
import useAuth from "../../../hooks/useAuth";
import EditAcademyActivityModal from "./EditAcademyActivityModal";

const AcademyActivitiesAdmin = () => {

    const [academyActivities, setAcademyActivities] = useState([]);
    const [open, setOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const { token } = useAuth();

    useEffect(() => {
        const getAcademyActivities = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const response = await clientAxios.get(`/academy-activities`, config);
                setAcademyActivities(response.data);
            } catch (error) {
                console.log(error);
                toast.error('Error al cargar las actividades');
            }
        }
        getAcademyActivities();
    }, [refreshKey, token])

    return (
        <>
            <section className="container mx-auto max-w-full ">
                <div className="my-10">
                    <h1 className="text-center text-3xl font-bold text-slate-600">Actividades Academicas</h1>
                </div>
                <div className="flex my-5 mx-10">
                    <div className="p-2">
                        <div
                            onClick={() => setOpen(!open)}
                            className="btn-action p-2"
                        >
                            <IoIosAddCircle className="text-2xl" />
                            Agregar Actividad
                        </div>
                    </div>
                </div>
                <AddAcademyModal
                    open={open}
                    setOpen={setOpen}
                />

                {
                    academyActivities.length > 0 ? academyActivities.map((activity, index) => (
                        <AcademyActivityCard
                            key={index}
                            activity={activity}
                            setRefreshKey={setRefreshKey}
                        />
                    )) : <Spinner />
                }
            </section>
        </>
    )
}

export default AcademyActivitiesAdmin