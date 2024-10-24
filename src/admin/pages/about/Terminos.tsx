import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

// Definir el tipo para un terminos
interface terminos {
  _id: string;
  title: string;
  content: string;
  versions: { version: string; createdAt: Date }[]; // Cambiado para incluir versiones
}

const terminos: React.FC = () => {
  const [terminos, setterminos] = useState<terminos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedterminos, setSelectedterminos] = useState<terminos | null>(
    null
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [viewContentId, setViewContentId] = useState<string | null>(null);

  // Efecto para cargar los terminos al iniciar
  useEffect(() => {
    const fetchterminos = async () => {
      try {
        const response = await clientAxios.get("/terminos"); // Asegúrate de que la URL sea correcta
        setterminos(response.data || []);
      } catch (err) {
        setError("Error al cargar los terminos");
        console.error("Error al cargar los terminos:", err); // Detalles del error
      } finally {
        setLoading(false);
      }
    };

    fetchterminos();
  }, []);

  // Manejar el envío del formulario para agregar o editar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (selectedterminos) {
        // Editar terminos existente
        const response = await clientAxios.put(
          `/terminos/${selectedterminos._id}`,
          {
            title,
            content,
          }
        );
        setterminos((prevterminos) =>
          prevterminos.map((i) =>
            i._id === selectedterminos._id ? response.data : i
          )
        );
        setSuccessMessage("terminos actualizado correctamente.");
      } else {
        // Agregar nuevo terminos
        const response = await clientAxios.post("/terminos", {
          title,
          content,
        });

        setterminos((prevterminos) => [...prevterminos, response.data]);
        setSuccessMessage("terminos agregado correctamente.");
      }

      // Limpiar el formulario
      setTitle("");
      setContent("");
      setShowForm(false);
      setSelectedterminos(null);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al guardar el terminos", err);
    }
  };

  // Manejar la eliminación de un terminos
  const handleDelete = async (id: string) => {
    try {
      await clientAxios.delete(`/terminos/${id}`);
      setterminos((prevterminos) =>
        prevterminos.filter((terminos) => terminos._id !== id)
      );
      setSuccessMessage("terminos eliminado correctamente.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al eliminar el terminos", err);
    }
  };

  // Manejar la edición de un terminos
  const handleEdit = (terminos: terminos) => {
    setTitle(terminos.title);
    setContent(terminos.content);
    setSelectedterminos(terminos);
    setShowForm(true);
  };

  // Manejar la visualización del contenido completo
  const toggleViewContent = (id: string) => {
    setViewContentId(viewContentId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Gestión de terminos</h1>
      <p className="text-lg mb-8">
        Aquí puedes agregar, editar o eliminar los terminos.
      </p>

      <div className="flex justify-center terminos-start min-h-screen bg-gray-100">
        <div className="w-full max-w-xl space-y-4 bg-white p-6 shadow rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">terminos</h2>

          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => {
                setShowForm(!showForm);
                setSelectedterminos(null);
                setTitle("");
                setContent("");
              }}
            >
              {showForm ? "Ocultar Formulario" : "Agregar terminos"}
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
                  {selectedterminos
                    ? "Actualizar terminos"
                    : "Guardar terminos"}
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
            <h3 className="text-lg font-bold mb-4">terminos existentes</h3>
            {loading ? (
              <p>Cargando...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ul className="space-y-2">
                {terminos.map((terminos) => (
                  <li
                    key={terminos._id}
                    className="border p-4 rounded-md flex justify-between terminos-center"
                  >
                    <div>
                      <h4 className="font-bold">{terminos.title}</h4>
                      <p className="text-sm text-gray-600">
                        Versión:{" "}
                        {
                          terminos.versions[terminos.versions.length - 1]
                            .version
                        }{" "}
                      </p>
                      {viewContentId === terminos._id && (
                        <p className="mt-2">{terminos.content}</p>
                      )}
                    </div>
                    <div className="space-x-2">
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                        onClick={() => handleEdit(terminos)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        onClick={() => toggleViewContent(terminos._id)}
                      >
                        {viewContentId === terminos._id
                          ? "Ocultar Contenido"
                          : "Ver Contenido"}
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                        onClick={() => handleDelete(terminos._id)}
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

export default terminos;
