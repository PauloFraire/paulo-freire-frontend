import React, { useState, useEffect } from "react";
import clientAxios from "../../../config/clientAxios";

const Sociales = () => {
  const [socialLinks, setSocialLinks] = useState({
    id: "",
    facebook: "",
    twitter: "",
  });
  const [isEditable, setIsEditable] = useState({
    facebook: true,
    twitter: true,
  });
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
  const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error

  useEffect(() => {
    // Obtener enlaces de redes sociales actuales
    clientAxios
      .get("/social-links")
      .then((response) => {
        if (response.data) {
          setSocialLinks({ ...response.data, id: response.data._id });
          setIsEditable({
            facebook: response.data.facebook === "",
            twitter: response.data.twitter === "",
          });
        } else {
          console.error("No se encontraron enlaces de redes sociales");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los enlaces de redes sociales:", error);
      });
  }, []);

  const validateUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/; // Expresión regular para validar URLs
    return regex.test(url);
  };

  const handleChange = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
  };

  const handleSave = (platform) => {
    const url =
      platform === "facebook" ? socialLinks.facebook : socialLinks.twitter;

    // Validar URL antes de enviar
    if (!validateUrl(url)) {
      setErrorMessage(`La URL de ${platform} no es válida.`);
      setTimeout(() => setErrorMessage(""), 3000); // Ocultar mensaje después de 3 segundos
      return;
    }

    clientAxios
      .put("/social-links", { platform, url })
      .then((response) => {
        setSocialLinks(response.data);
        setSuccessMessage("Enlace actualizado correctamente."); // Mostrar mensaje de éxito
        setTimeout(() => setSuccessMessage(""), 3000); // Ocultar mensaje después de 3 segundos
      })
      .catch((error) => {
        console.error("Error al guardar el enlace:", error);
      });
  };

  const handleDelete = (platform) => {
    clientAxios
      .delete(`/social-links/${platform}`)
      .then((response) => {
        setSocialLinks((prevLinks) => ({ ...prevLinks, [platform]: "" }));
        setSuccessMessage("Enlace eliminado correctamente."); // Mostrar mensaje de éxito
        setTimeout(() => setSuccessMessage(""), 3000); // Ocultar mensaje después de 3 segundos
      })
      .catch((error) => {
        console.error("Error al eliminar el enlace:", error);
      });
  };

  return (
    <div className="space-y-6">
      {successMessage && (
        <div className="text-green-500 font-bold p-2">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="text-red-500 font-bold p-2">{errorMessage}</div>
      )}
      {/* Facebook */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="font-bold text-lg mb-2">Facebook</h2>
        <input
          type="text"
          name="facebook"
          value={socialLinks.facebook || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
          placeholder="Agregar enlace de Facebook"
        />
        <div className="flex justify-between">
          <button
            onClick={() => handleSave("facebook")} // Asegúrate de pasar la plataforma
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Guardar
          </button>
          <button
            onClick={() => handleDelete("facebook")} // Asegúrate de pasar la plataforma
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* Twitter */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="font-bold text-lg mb-2">Twitter</h2>
        <input
          type="text"
          name="twitter"
          value={socialLinks.twitter || ""}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
          placeholder="Agregar enlace de Twitter"
        />
        <div className="flex justify-between">
          <button
            onClick={() => handleSave("twitter")} // Asegúrate de pasar la plataforma
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Guardar
          </button>
          <button
            onClick={() => handleDelete("twitter")} // Asegúrate de pasar la plataforma
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sociales;
