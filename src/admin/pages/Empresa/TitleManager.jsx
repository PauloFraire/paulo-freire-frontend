import React, { useState, useEffect } from "react";
import axios from "../../../config/clientAxios"; // Ajusta la ruta según tu estructura de proyecto

const TitleManager = () => {
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Obtener el título actual al cargar el componente
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const { data } = await axios.get("/header-title");
        setTitle(data.title || ""); // Si no hay título, asigna un string vacío
      } catch (error) {
        console.error("Error al obtener el título:", error);
      }
    };
    fetchTitle();
  }, []);

  // Manejar alertas automáticas
  useEffect(() => {
    if (success || error) {
      const timeout = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timeout); // Limpia el timeout si el componente se desmonta
    }
  }, [success, error]);

  // Agregar o actualizar el título
  const handleSaveTitle = async () => {
    if (newTitle.length > 50) {
      setError("El título no puede tener más de 50 caracteres.");
      return;
    }
    if (newTitle.length < 10) {
      setError("El título debe tener al menos 10 caracteres.");
      return;
    }
    try {
      await axios.put("/header-title", { title: newTitle });
      setSuccess(
        title
          ? "Título actualizado correctamente."
          : "Título agregado correctamente."
      );
      setTitle(newTitle);
      setNewTitle("");
    } catch (error) {
      setError("Error al guardar el título.");
    }
  };

  // Eliminar el título
  const handleDeleteTitle = async () => {
    try {
      await axios.delete("/header-title");
      setTitle("");
      setSuccess("Título eliminado correctamente.");
    } catch (error) {
      setError("Error al eliminar el título.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Título del Sitio</h2>
      {title ? (
        <p className="text-gray-600 font-semibold mb-4 text-center break-words whitespace-normal">
          {title}
        </p>
      ) : (
        <p className="text-gray-400 italic mb-4 text-center">
          No hay título actualmente.
        </p>
      )}
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Escribe un nuevo título"
        className="border w-full p-2 rounded mb-2"
        maxLength="50" // Limita la longitud del texto ingresado
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <button
        onClick={handleSaveTitle}
        className="bg-green-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-green-600"
      >
        {title ? "Actualizar Título" : "Agregar Título"}
      </button>
      {title && (
        <button
          onClick={handleDeleteTitle}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-red-600"
        >
          Eliminar Título
        </button>
      )}
    </div>
  );
};

export default TitleManager;
