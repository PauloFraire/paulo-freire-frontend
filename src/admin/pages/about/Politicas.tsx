import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

// Definir el tipo para un deslinde
interface Deslinde {
  _id: string;
  title: string;
  content: string;
  version: string;
  isActive?: boolean;
  baseVersion?: string; // Indicar la versión base del deslinde.
  createdAt: string;
}

const Politicas: React.FC = () => {
  const [Politicas, setPoliticas] = useState<Deslinde[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedDeslinde, setSelectedDeslinde] = useState<Deslinde | null>(
    null
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [viewContentId, setViewContentId] = useState<string | null>(null);
  const [selectedVigente, setSelectedVigente] = useState<string | null>(null);

  // Efecto para cargar los Politicas al iniciar
  useEffect(() => {
    const fetchPoliticas = async () => {
      try {
        const response = await clientAxios.get("/Politicas");
        setPoliticas(response.data || []);
        const vigente = response.data.find((d: Deslinde) => d.isActive);
        setSelectedVigente(vigente?._id || null);
      } catch (err) {
        setError("Error al cargar los Politicas");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPoliticas();
  }, []);

  // Manejar el envío del formulario para agregar o actualizar un deslinde
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response;
      if (selectedDeslinde) {
        response = await clientAxios.put(`/Politicas/${selectedDeslinde._id}`, {
          title,
          content,
        });
      } else {
        response = await clientAxios.post("/Politicas", { title, content });
      }

      const newDeslinde = response.data;

      // Actualizamos todos los Politicas, asegurándonos de que solo el nuevo tenga `isActive: true`
      setPoliticas((prevPoliticas) =>
        prevPoliticas
          .map((deslinde) =>
            deslinde._id === newDeslinde._id
              ? { ...deslinde, isActive: true }
              : { ...deslinde, isActive: false }
          )
          .concat(newDeslinde)
      );

      setSuccessMessage(
        selectedDeslinde
          ? "Nueva versión del deslinde creada."
          : "Deslinde agregado correctamente."
      );

      setTitle("");
      setContent("");
      setShowForm(false);
      setSelectedDeslinde(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error al guardar el deslinde", err);
    }
  };

  // Manejar la eliminación de un deslinde
  const handleDelete = async (id: string) => {
    try {
      await clientAxios.delete(`/Politicas/${id}`);
      setPoliticas((prevPoliticas) =>
        prevPoliticas.filter((deslinde) => deslinde._id !== id)
      );
      setSuccessMessage("Deslinde eliminado correctamente.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error al eliminar el deslinde", err);
    }
  };

  // Manejar la edición de un deslinde (para crear una nueva versión)
  const handleEdit = (deslinde: Deslinde) => {
    setTitle(deslinde.title);
    setContent(deslinde.content);
    setSelectedDeslinde(deslinde);
    setShowForm(true);
  };

  // Manejar la selección del deslinde vigente
  const handleSetVigente = async (id: string) => {
    try {
      await clientAxios.put(`/Politicas/vigente/${id}`);

      // Actualizamos el estado local de los Politicas
      setPoliticas((prevPoliticas) =>
        prevPoliticas.map((deslinde) =>
          deslinde._id === id
            ? { ...deslinde, isActive: true }
            : { ...deslinde, isActive: false }
        )
      );

      setSelectedVigente(id);
    } catch (err) {
      console.error("Error al establecer como vigente", err);
    }
  };

  // Mostrar/ocultar contenido completo
  const toggleViewContent = (id: string) => {
    setViewContentId(viewContentId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Gestión de Politicas</h1>

      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="w-full max-w-xl space-y-4 bg-white p-6 shadow rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Politicas</h2>

          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => {
                setShowForm(!showForm);
                setSelectedDeslinde(null);
                setTitle("");
                setContent("");
              }}
            >
              {showForm ? "Ocultar Formulario" : "Agregar Deslinde"}
            </button>
          </div>

          {successMessage && (
            <p className="text-green-500 font-bold text-center">
              {successMessage}
            </p>
          )}

          {showForm && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Título</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Contenido</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  required
                  className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                  {selectedDeslinde
                    ? "Crear Nueva Versión"
                    : "Guardar Deslinde"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}

          <div className="space-y-4">
            {loading ? (
              <p>Cargando...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ul className="space-y-4">
                {Politicas.map((deslinde) => (
                  <li
                    key={deslinde._id}
                    className="p-4 border rounded-md shadow-md bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {deslinde.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Versión: {deslinde.version}{" "}
                          {deslinde.baseVersion &&
                            `(Basada en: ${deslinde.baseVersion})`}
                        </p>
                        <p className="text-sm text-gray-600">
                          Creado el:{" "}
                          {new Date(deslinde.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(deslinde)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                        >
                          Nueva Versión
                        </button>
                        <button
                          onClick={() => handleDelete(deslinde._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => toggleViewContent(deslinde._id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                          Ver {viewContentId === deslinde._id ? "Menos" : "Más"}
                        </button>
                      </div>
                    </div>
                    {viewContentId === deslinde._id && (
                      <div className="mt-4">
                        <p className="text-gray-700 break-words whitespace-normal">
                          {deslinde.content}
                        </p>
                      </div>
                    )}
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => handleSetVigente(deslinde._id)}
                        className={`${
                          deslinde.isActive ? "bg-green-500" : "bg-blue-500"
                        } text-white px-4 py-2 rounded-md`}
                      >
                        {deslinde.isActive
                          ? "Vigente"
                          : "Establecer como Vigente"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Politicas;
