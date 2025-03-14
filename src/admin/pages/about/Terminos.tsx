import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

// Definir el tipo para un Termino
interface Termino {
  _id: string;
  title: string;
  content: string;
  version: string;
  isActive?: boolean;
  baseVersion?: string; // Indicar la versión base del Termino.
  createdAt: string;
}

const Terminos: React.FC = () => {
  const [Terminos, setTerminos] = useState<Termino[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedTermino, setSelectedTermino] = useState<Termino | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [viewContentId, setViewContentId] = useState<string | null>(null);
  const [selectedVigente, setSelectedVigente] = useState<string | null>(null);

  // Efecto para cargar los Terminos al iniciar
  useEffect(() => {
    const fetchTerminos = async () => {
      try {
        const response = await clientAxios.get("/terminos");
        setTerminos(response.data || []);
        const vigente = response.data.find((t: Termino) => t.isActive);
        setSelectedVigente(vigente?._id || null);
      } catch (err) {
        setError("Error al cargar los Terminos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerminos();
  }, []);

  // Manejar el envío del formulario para agregar o actualizar un Termino
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response;
      if (selectedTermino) {
        response = await clientAxios.put(`/terminos/${selectedTermino._id}`, {
          title,
          content,
        });
      } else {
        response = await clientAxios.post("/terminos", { title, content });
      }

      const newTermino = response.data;

      // Actualizamos todos los Terminos, asegurándonos de que solo el nuevo tenga `isActive: true`
      setTerminos((prevTerminos) =>
        prevTerminos
          .map((termino) =>
            termino._id === newTermino._id
              ? { ...termino, isActive: true }
              : { ...termino, isActive: false }
          )
          .concat(newTermino)
      );

      setSuccessMessage(
        selectedTermino
          ? "Nueva versión del Termino creada."
          : "Termino agregado correctamente."
      );

      setTitle("");
      setContent("");
      setShowForm(false);
      setSelectedTermino(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error al guardar el Termino", err);
    }
  };

  // Manejar la eliminación de un Termino
  const handleDelete = async (id: string) => {
    try {
      await clientAxios.delete(`/terminos/${id}`);
      setTerminos((prevTerminos) =>
        prevTerminos.filter((termino) => termino._id !== id)
      );
      setSuccessMessage("Termino eliminado correctamente.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error al eliminar el Termino", err);
    }
  };

  // Manejar la edición de un Termino (para crear una nueva versión)
  const handleEdit = (termino: Termino) => {
    setTitle(termino.title);
    setContent(termino.content);
    setSelectedTermino(termino);
    setShowForm(true);
  };

  // Manejar la selección del Termino vigente
  const handleSetVigente = async (id: string) => {
    try {
      await clientAxios.put(`/terminos/vigente/${id}`);

      // Actualizamos el estado local de los Terminos
      setTerminos((prevTerminos) =>
        prevTerminos.map((termino) =>
          termino._id === id
            ? { ...termino, isActive: true }
            : { ...termino, isActive: false }
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
      <h1 className="text-3xl font-bold mb-4">Gestión de Terminos</h1>

      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="w-full max-w-xl space-y-4 bg-white p-6 shadow rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Terminos</h2>

          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => {
                setShowForm(!showForm);
                setSelectedTermino(null);
                setTitle("");
                setContent("");
              }}
            >
              {showForm ? "Ocultar Formulario" : "Agregar Termino"}
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
                  {selectedTermino ? "Crear Nueva Versión" : "Guardar Termino"}
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
                {Terminos.map((Termino) => (
                  <li
                    key={Termino._id}
                    className="p-4 border rounded-md shadow-md bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {Termino.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Versión: {Termino.version}{" "}
                          {Termino.baseVersion &&
                            `(Basada en: ${Termino.baseVersion})`}
                        </p>
                        <p className="text-sm text-gray-600">
                          Creado el:{" "}
                          {new Date(Termino.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(Termino)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                        >
                          Nueva Versión
                        </button>
                        <button
                          onClick={() => handleDelete(Termino._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => toggleViewContent(Termino._id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                          Ver {viewContentId === Termino._id ? "Menos" : "Más"}
                        </button>
                      </div>
                    </div>
                    {viewContentId === Termino._id && (
                      <div className="mt-4">
                        <p className="text-gray-700 break-words whitespace-normal">
                          {Termino.content}
                        </p>
                      </div>
                    )}
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => handleSetVigente(Termino._id)}
                        className={`${
                          Termino.isActive ? "bg-green-500" : "bg-blue-500"
                        } text-white px-4 py-2 rounded-md`}
                      >
                        {Termino.isActive
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

export default Terminos;
