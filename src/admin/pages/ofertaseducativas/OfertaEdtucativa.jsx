import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import clientAxios from "../../../config/clientAxios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AdminEducationalOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const getOffers = async () => {
      try {
        const response = await clientAxios.get("/getoffter", config);
        setOffers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getOffers();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar la oferta educativa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await clientAxios.delete(`/offterdelete/${id}`, config);
          setOffers(offers.filter((offer) => offer._id !== id));
          Swal.fire(
            "Eliminado!",
            "La oferta educativa ha sido eliminada",
            "success"
          );
        } catch (error) {
          console.error(error);
          Swal.fire(
            "Error",
            "No se pudo eliminar la oferta educativa",
            "error"
          );
        }
      }
    });
  };

  return (
    <section className="container mx-auto bg-slate-50 p-4">
      <h1 className="text-center text-3xl font-bold text-slate-600 mt-10">
        Administrar Ofertas Educativas
      </h1>
      <p className="text-center my-4 mx-2">
        Aquí puedes gestionar las ofertas educativas de la página web
      </p>
      <div className="flex my-2 mx-10">
        <div className="p-2">
          <Link to="/admin/add-oferta" className="btn-action p-2">
            <IoIosAddCircle className="text-2xl" />
            Agregar oferta educativa
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto border w-full my-2 text-sm md:text-base">
          <thead>
            <tr>
              <th className="px-4 py-2 border text-gray-600">No.</th>
              <th className="px-4 py-2 border text-gray-600">Título</th>
              <th className="px-4 py-2 border text-gray-600">Descripción</th>
              <th className="px-4 py-2 border text-gray-600">Imagen</th>
              <th className="px-4 py-2 border text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Cargando...
                </td>
              </tr>
            ) : offers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No hay ofertas educativas
                </td>
              </tr>
            ) : (
              offers.map((offer, index) => (
                <tr key={offer._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border text-center">
                    {offer.title}
                  </td>
                  <td className="px-4 py-2 border text-center whitespace-normal break-words max-w-md">
                    {offer.description}
                  </td>

                  <td className="px-4 py-2 border flex items-center justify-center">
                    <img
                      src={offer.imageUrl}
                      alt={offer.title}
                      className="w-24 h-24 object-cover "
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="flex items-center justify-center gap-2">
                      <Link to={`/admin/edit-oferta/${offer._id}`}>
                        <TiEdit className="text-2xl text-blue-600" />
                      </Link>
                      <button onClick={() => handleDelete(offer._id)}>
                        <RiDeleteBin6Line className="text-2xl text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminEducationalOffers;
