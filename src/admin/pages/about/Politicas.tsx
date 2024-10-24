import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

// Definir el tipo para una política
interface Politica {
  _id: string;
  title: string;
  content: string;
  versions: { version: string; createdAt: Date }[]; // Cambiado para incluir versiones
}

const Politicas: React.FC = () => {
  const [politicas, setPoliticas] = useState<Politica[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedPolitica, setSelectedPolitica] = useState<Politica | null>(
    null
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [viewContentId, setViewContentId] = useState<string | null>(null); // Nuevo estado para manejar el contenido a mostrar

  // Efecto para cargar las políticas al iniciar
  useEffect(() => {
    const fetchPoliticas = async () => {
      try {
        const response = await clientAxios.get("/politicas");
        setPoliticas(response.data || []);
      } catch (err) {
        setError("Error al cargar las políticas");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPoliticas();
  }, []);

  // Manejar el envío del formulario para agregar o editar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (selectedPolitica) {
        // Editar política existente
        const response = await clientAxios.put(
          `/politicas/${selectedPolitica._id}`,
          {
            title,
            content,
          }
        );
        setPoliticas((prevPoliticas) =>
          prevPoliticas.map((p) =>
            p._id === selectedPolitica._id ? response.data : p
          )
        );
        setSuccessMessage("Política actualizada correctamente.");
      } else {
        // Agregar nueva política
        const response = await clientAxios.post("/politicas", {
          title,
          content,
        });

        setPoliticas((prevPoliticas) => [...prevPoliticas, response.data]);
        setSuccessMessage("Política agregada correctamente.");
      }

      // Limpiar el formulario
      setTitle("");
      setContent("");
      setShowForm(false);
      setSelectedPolitica(null);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al guardar la política", err);
    }
  };

  // Manejar la eliminación de una política
  const handleDelete = async (id: string) => {
    try {
      await clientAxios.delete(`/politicas/${id}`);
      setPoliticas((prevPoliticas) =>
        prevPoliticas.filter((politica) => politica._id !== id)
      );
      setSuccessMessage("Política eliminada correctamente.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al eliminar la política", err);
    }
  };

  // Manejar la edición de una política
  const handleEdit = (politica: Politica) => {
    setTitle(politica.title);
    setContent(politica.content);
    setSelectedPolitica(politica);
    setShowForm(true);
  };

  // Manejar la visualización del contenido completo
  const toggleViewContent = (id: string) => {
    setViewContentId(viewContentId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Gestión de Políticas</h1>
      <p className="text-lg mb-8">
        Aquí puedes agregar, editar o eliminar las políticas de privacidad.
      </p>

      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="w-full max-w-xl space-y-4 bg-white p-6 shadow rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Políticas y Privacidad
          </h2>

          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => {
                setShowForm(!showForm);
                setSelectedPolitica(null);
                setTitle("");
                setContent("");
              }}
            >
              {showForm ? "Ocultar Formulario" : "Agregar Política"}
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
                  {selectedPolitica
                    ? "Actualizar Política"
                    : "Guardar Política"}
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
            <h3 className="text-lg font-bold mb-4">Políticas existentes</h3>
            {loading ? (
              <p>Cargando...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ul className="space-y-2">
                {politicas.map((politica) => (
                  <li
                    key={politica._id}
                    className="border p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold">{politica.title}</h4>
                      <p className="text-sm text-gray-600">
                        Versión:{" "}
                        {
                          politica.versions[politica.versions.length - 1]
                            .version
                        }{" "}
                        {/* Mostrando la última versión */}
                      </p>
                      {viewContentId === politica._id && (
                        <p className="mt-2">{politica.content}</p> // Mostrar contenido completo
                      )}
                    </div>
                    <div className="space-x-2">
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                        onClick={() => handleEdit(politica)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        onClick={() => toggleViewContent(politica._id)}
                      >
                        {viewContentId === politica._id
                          ? "Ocultar Contenido"
                          : "Ver Contenido"}
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                        onClick={() => handleDelete(politica._id)}
                      >
                        Eliminar
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
