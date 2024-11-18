import React, { useState, useEffect } from "react";
import axios from "../../../config/clientAxios";

const Slogan = () => {
  const [slogan, setSlogan] = useState("");
  const [newSlogan, setNewSlogan] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Obtener el slogan actual al cargar el componente
  useEffect(() => {
    const fetchSlogan = async () => {
      try {
        const { data } = await axios.get("/slogan");
        setSlogan(data.text || ""); // Si no hay slogan, asigna un string vacío
      } catch (error) {
        console.error("Error al obtener el eslogan:", error);
      }
    };
    fetchSlogan();
  }, []);
  // Manejar alertas automáticas
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);
  // Agregar o actualizar el eslogan
  const handleSaveSlogan = async () => {
    if (newSlogan.length > 100) {
      setError("El eslogan no puede tener más de 100 caracteres.");
      return;
    }
    try {
      if (!slogan) {
        await axios.put("/slogan", { text: newSlogan });
        setSuccess("Eslogan agregado correctamente.");
      } else {
        await axios.put("/slogan", { text: newSlogan });
        setSuccess("Eslogan actualizado correctamente.");
      }
      setSlogan(newSlogan);
      setNewSlogan("");
      setError("");
    } catch (error) {
      setError("Error al guardar el eslogan.");
    }
  };

  // Eliminar el eslogan
  const handleDeleteSlogan = async () => {
    try {
      await axios.delete("/slogan");
      setSlogan("");
      setSuccess("Eslogan eliminado correctamente.");
    } catch (error) {
      setError("Error al eliminar el eslogan.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        Eslogan de la Empresa
      </h2>
      {slogan ? (
        <p className="text-gray-600 font-semibold mb-4 text-center">{slogan}</p>
      ) : (
        <p className="text-gray-400 italic mb-4 text-center">
          No hay eslogan actualmente.
        </p>
      )}
      <input
        type="text"
        value={newSlogan}
        onChange={(e) => setNewSlogan(e.target.value)}
        placeholder="Escribe un nuevo eslogan"
        className="border w-full p-2 rounded mb-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <button
        onClick={handleSaveSlogan}
        className="bg-green-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-green-600"
      >
        {slogan ? "Actualizar Eslogan" : "Agregar Eslogan"}
      </button>
      {slogan && (
        <button
          onClick={handleDeleteSlogan}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-red-600"
        >
          Eliminar Eslogan
        </button>
      )}
    </div>
  );
};

export default Slogan;
