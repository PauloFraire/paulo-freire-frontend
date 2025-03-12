//AddBeca.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../../../config/clientAxios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddBeca = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [image, setImage] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdfs([...pdfs, ...Array.from(e.target.files)]);
  };

  const removePdf = (index) => {
    setPdfs(pdfs.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !image || pdfs.length === 0) {
      Swal.fire("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("requisitos", requisitos);
    formData.append("image", image);
    pdfs.forEach((pdf) => formData.append("pdfs", pdf));

    try {
      await clientAxios.post("/createbeca", formData, config);
      Swal.fire("Éxito", "Beca creada correctamente", "success");
      navigate("/admin/becas");
    } catch (error) {
      Swal.fire("Error", "Hubo un problema al crear la beca", "error");
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold">Crear Beca</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded"></textarea>
        </div>
        <div>
          <label>Requisitos:</label>
          <textarea value={requisitos} onChange={(e) => setRequisitos(e.target.value)} className="w-full p-2 border rounded"></textarea>
        </div>
        <div>
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label>PDFs:</label>
          <input type="file" accept=".pdf" multiple onChange={handlePdfChange} />
          {pdfs.map((pdf, index) => (
            <p key={index}>
              {pdf.name} <button type="button" onClick={() => removePdf(index)}>Eliminar</button>
            </p>
          ))}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};

export default AddBeca;
