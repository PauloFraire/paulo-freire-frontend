import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

// Definir el tipo para un deslinde
interface Deslinde {
  _id: string;
  title: string;
  content: string;
  versions: { version: string; createdAt: Date }[]; // Incluir versiones
}

const Deslindes: React.FC = () => {
  const [deslindes, setDeslindes] = useState<Deslinde[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedDeslinde, setSelectedDeslinde] = useState<Deslinde | null>(
    null
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [viewContentId, setViewContentId] = useState<string | null>(null); // Estado para manejar el contenido a mostrar

  // Efecto para cargar los deslindes al iniciar
  useEffect(() => {
    const fetchDeslindes = async () => {
      try {
        const response = await clientAxios.get("/deslindes");
        setDeslindes(response.data || []);
      } catch (err) {
        setError("Error al cargar los deslindes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeslindes();
  }, []);

  // Manejar el envío del formulario para agregar o editar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (selectedDeslinde) {
        // Editar deslinde existente
        const response = await clientAxios.put(
          `/deslindes/${selectedDeslinde._id}`,
          {
            title,
            content,
          }
        );
        setDeslindes((prevDeslindes) =>
          prevDeslindes.map((d) =>
            d._id === selectedDeslinde._id ? response.data : d
          )
        );
        setSuccessMessage("Deslinde actualizado correctamente.");
      } else {
        // Agregar nuevo deslinde
        const response = await clientAxios.post("/deslindes", {
          title,
          content,
        });

        setDeslindes((prevDeslindes) => [...prevDeslindes, response.data]);
        setSuccessMessage("Deslinde agregado correctamente.");
      }

      // Limpiar el formulario
      setTitle("");
      setContent("");
      setShowForm(false);
      setSelectedDeslinde(null);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al guardar el deslinde", err);
    }
  };

  // Manejar la eliminación de un deslinde
  const handleDelete = async (id: string) => {
    try {
      await clientAxios.delete(`/deslindes/${id}`);
      setDeslindes((prevDeslindes) =>
        prevDeslindes.filter((deslinde) => deslinde._id !== id)
      );
      setSuccessMessage("Deslinde eliminado correctamente.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error al eliminar el deslinde", err);
    }
  };

  // Manejar la edición de un deslinde
  const handleEdit = (deslinde: Deslinde) => {
    setTitle(deslinde.title);
    setContent(deslinde.content);
    setSelectedDeslinde(deslinde);
    setShowForm(true);
  };

  // Manejar la visualización del contenido completo
  const toggleViewContent = (id: string) => {
    setViewContentId(viewContentId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Gestión de Deslindes</h1>
      <p className="text-lg mb-8">
        Aquí puedes agregar, editar o eliminar los deslindes.
      </p>

      <div className="flex justify-center items-start min-h-screen bg-gray-100">
        <div className="w-full max-w-xl space-y-4 bg-white p-6 shadow rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Deslindes</h2>

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
                    ? "Actualizar Deslinde"
                    : "Guardar Deslinde"}
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
            <h3 className="text-lg font-bold mb-4">Deslindes existentes</h3>
            {loading ? (
              <p>Cargando...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ul className="space-y-2">
                {deslindes.map((deslinde) => (
                  <li
                    key={deslinde._id}
                    className="border p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold">{deslinde.title}</h4>
                      <p className="text-sm text-gray-600">
                        Versión:{" "}
                        {
                          deslinde.versions[deslinde.versions.length - 1]
                            .version
                        }{" "}
                      </p>
                      {viewContentId === deslinde._id && (
                        <p className="mt-2">{deslinde.content}</p>
                      )}
                    </div>
                    <div className="space-x-2">
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
                        onClick={() => handleEdit(deslinde)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        onClick={() => toggleViewContent(deslinde._id)}
                      >
                        {viewContentId === deslinde._id
                          ? "Ocultar Contenido"
                          : "Ver Contenido"}
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                        onClick={() => handleDelete(deslinde._id)}
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

export default Deslindes;
