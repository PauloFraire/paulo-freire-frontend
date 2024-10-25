import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

// Definir el tipo para un término
interface Termino {
  _id: string;
  title: string;
  content: string;
  versions: { version: string; createdAt: Date }[];
  isActive?: boolean;
}

const Terminos: React.FC = () => {
  const [terminos, setTerminos] = useState<Termino[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedTermino, setSelectedTermino] = useState<Termino | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [viewContentId, setViewContentId] = useState<string | null>(null);
  const [selectedVigente, setSelectedVigente] = useState<string | null>(null);

  // Efecto para cargar los términos al inicio
  useEffect(() => {
    const fetchTerminos = async () => {
      try {
        const response = await clientAxios.get("/terminos");
        setTerminos(response.data || []);
        const vigente = response.data.find((t: Termino) => t.isActive);
        setSelectedVigente(vigente?._id || null);
      } catch (err) {
        setError("Error al cargar los términos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerminos();
  }, []);

  // Manejar el envío del formulario para agregar o editar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (selectedTermino) {
        const response = await clientAxios.put(
          `/terminos/${selectedTermino._id}`,
          { title, content }
        );
        setTerminos((prevTerminos) =>
          prevTerminos.map((t) =>
            t._id === selectedTermino._id ? response.data : t
          )
        );
        setSuccessMessage("Término actualizado correctamente.");
      } else {
        const response = await clientAxios.post("/terminos", {
          title,
          content,
        });
        setTerminos((prevTerminos) => [...prevTerminos, response.data]);
        setSuccessMessage("Término agregado correctamente.");
      }

      setTitle("");
      setContent("");
      setShowForm(false);
      setSelectedTermino(null);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al guardar el término", err);
    }
  };

  // Manejar la eliminación de un término
  const handleDelete = async (id: string) => {
    try {
      await clientAxios.delete(`/terminos/${id}`);
      setTerminos((prevTerminos) =>
        prevTerminos.filter((termino) => termino._id !== id)
      );
      setSuccessMessage("Término eliminado correctamente.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al eliminar el término", err);
    }
  };

  // Manejar la edición de un término
  const handleEdit = (termino: Termino) => {
    setTitle(termino.title);
    setContent(termino.content);
    setSelectedTermino(termino);
    setShowForm(true);
  };

  // Manejar la selección del término vigente
  const handleSetVigente = async (id: string) => {
    try {
      await clientAxios.put(`/terminos/vigente/${id}`);
      setSelectedVigente(id);
    } catch (err) {
      console.error(err);
    }
  };

  // Manejar la visualización del contenido completo
  const toggleViewContent = (id: string) => {
    setViewContentId(viewContentId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Gestión de Términos y Condiciones
      </h1>
      <p className="text-lg mb-8">
        Aquí puedes agregar, editar o eliminar los términos de servicio.
      </p>

      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="w-full max-w-xl space-y-4 bg-white p-6 shadow rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Términos de Servicio
          </h2>

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
              {showForm ? "Ocultar Formulario" : "Agregar Término"}
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
                  {selectedTermino ? "Actualizar Término" : "Guardar Término"}
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  onClick={() => setShowForm(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}

          <div>
            <h3 className="text-lg font-bold mb-4">Términos existentes</h3>
            {loading ? (
              <p>Cargando...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ul className="space-y-2">
                {terminos.map((termino) => (
                  <li
                    key={termino._id}
                    className="border p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold">{termino.title}</h4>
                      <p className="text-sm text-gray-600">
                        Versión:{" "}
                        {termino.versions[termino.versions.length - 1].version}
                      </p>
                      {viewContentId === termino._id && (
                        <p className="mt-2">{termino.content}</p>
                      )}
                    </div>
                    <div className="space-x-2">
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                        onClick={() => handleEdit(termino)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        onClick={() => toggleViewContent(termino._id)}
                      >
                        {viewContentId === termino._id
                          ? "Ocultar Contenido"
                          : "Ver Contenido"}
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                        onClick={() => handleDelete(termino._id)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-200"
                        onClick={() => handleSetVigente(termino._id)}
                        disabled={selectedVigente === termino._id}
                      >
                        {selectedVigente === termino._id
                          ? "Vigente"
                          : "Hacer Vigente"}
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
