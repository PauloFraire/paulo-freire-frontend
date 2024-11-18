import React, { useState, useEffect } from "react";
import axios from "../../../config/clientAxios";

const Logo = () => {
  const [logoUrl, setLogoUrl] = useState("");
  const [newLogo, setNewLogo] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const MAX_FILE_SIZE_MB = 2; // Tamaño máximo en MB
  const ALLOWED_FORMATS = ["image/jpeg", "image/png"]; // Formatos permitidos

  // Obtener el logo actual al cargar el componente
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const { data } = await axios.get("/logo");
        setLogoUrl(data.url || "");
      } catch (error) {
        console.error("Error al obtener el logo:", error);
      }
    };
    fetchLogo();
  }, []);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  // Validar archivo
  const validateFile = (file) => {
    if (!ALLOWED_FORMATS.includes(file.type)) {
      setError("Formato no válido. Solo se permiten imágenes JPEG o PNG.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(`El archivo debe ser menor a ${MAX_FILE_SIZE_MB} MB.`);
      return false;
    }
    return true;
  };

  // Subir o actualizar el logo
  const handleSaveLogo = async (e) => {
    e.preventDefault();
    if (!newLogo) {
      setError("Por favor, selecciona una imagen.");
      return;
    }

    if (!validateFile(newLogo)) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("logo", newLogo);

    try {
      await axios.post("/logo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Logo subido correctamente.");
      setLogoUrl(URL.createObjectURL(newLogo));
      setNewLogo(null);
    } catch (error) {
      setError("Error al subir el logo.");
    } finally {
      setIsUploading(false);
    }
  };

  // Eliminar el logo
  const handleDeleteLogo = async () => {
    try {
      await axios.delete("/logo");
      setLogoUrl("");
      setSuccess("Logo eliminado correctamente.");
    } catch (error) {
      setError("Error al eliminar el logo.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Logo de la Empresa</h2>
      {logoUrl ? (
        <div className="flex justify-center items-center mb-4">
          <img src={logoUrl} alt="Logo" className="w-32 h-32 object-contain" />
        </div>
      ) : (
        <p className="text-gray-400 italic mb-4 text-center">
          No hay logo actualmente.
        </p>
      )}
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => setNewLogo(e.target.files[0])}
        className="border w-full p-2 rounded mb-2"
        disabled={isUploading}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      {isUploading && <p className="text-blue-500 text-sm">Subiendo...</p>}
      <button
        onClick={handleSaveLogo}
        className={`bg-green-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-green-600 ${
          isUploading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isUploading}
      >
        {logoUrl ? "Actualizar Logo" : "Subir Imagen"}
      </button>
      {logoUrl && (
        <button
          onClick={handleDeleteLogo}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-red-600"
        >
          Eliminar Logo
        </button>
      )}
    </div>
  );
};

export default Logo;
