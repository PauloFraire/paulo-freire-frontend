import React, { useState, useEffect } from 'react';
import clientAxios from '../../../config/clientAxios';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Spinner from '../../../components/Spinner';

export default function ContextoContemporaneoAdmin() {
  const { token } = useAuth();
  const [contextos, setContextos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    mainSection: '',
    author: '',
    article: '',
    articleDescription: '',

    mainLinkAutor: '',
    mainLink: '',
    secondaryLinks: [{ name: '', url: '' }],
    pdfs: ['']
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchContextos();
  }, []);

  const fetchContextos = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };
      const response = await clientAxios.get('/contexto-contemporaneo', config);
      const contextosData = Array.isArray(response.data) ? response.data : [];
      setContextos(contextosData);
      
      if (contextosData.length > 0) {
        const firstContext = contextosData[0];
        setFormData({
          title: firstContext.title || '',
          mainSection: firstContext.mainSection || '',
          author: firstContext.author || '',
          article: firstContext.article || '',
          articleDescription: firstContext.articleDescription || '',

          mainLinkAutor: firstContext.mainLinkAutor || '',
          mainLink: firstContext.mainLink || '',
          secondaryLinks: firstContext.secondaryLinks?.length ? firstContext.secondaryLinks : [{ name: '', url: '' }],
          pdfs: firstContext.pdfs?.length ? firstContext.pdfs : ['']
        });
        setEditingId(firstContext._id);
      }
    } catch (error) {
      console.error('Error fetching contextos:', error);
      toast.error('Error al cargar los contextos');
      setContextos([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (index, field, value) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'secondaryLinks' ? [...prev[field], { name: '', url: '' }] : [...prev[field], '']
    }));
  };

  const removeArrayField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      let response;
      if (editingId) {
        response = await clientAxios.put(`/contexto-contemporaneo/${editingId}`, formData, config);
      } else {
        response = await clientAxios.post('/contexto-contemporaneo', formData, config);
      }
      
      if (response.status === 200 || response.status === 201) {
        toast.success(editingId ? 'Contexto actualizado exitosamente' : 'Contexto creado exitosamente');
        await fetchContextos();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.msg || 
                          error.message || 
                          'Error desconocido al procesar la solicitud';

      toast.error(`Error al ${editingId ? 'actualizar' : 'crear'} el contexto: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4 -ml-1 bg-gray-50 mt-5">
      <h2 className="text-center text-3xl font-bold text-slate-600">Análisis Educativo Contemporáneo</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block mb-2 text-xl font-medium text-gray-700">Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-xl font-medium text-gray-700">Sección Principal:</label>
          <input
            type="text"
            name="mainSection"
            value={formData.mainSection}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-xl font-medium text-gray-700">Autor:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-tr from-green-300 to-red-300 via-yellow-300 shadow-lg w-full h-34">
        <label className="block mb-2 text-xl font-medium text-gray-700">Titulo del Articulo:</label>
          <input
            name="article"
            value={formData.article}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <label className="block mb-2 text-xl font-medium text-gray-700 mt-5">Descripción del Artículo:</label>
          <input
            type="text"
            name="articleDescription"
            value={formData.articleDescription}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />


          <label className="block mb-2 text-xl font-medium text-gray-700 mt-5">Créditos para el Autor:</label>
          <input
            type="text"
            name="mainLinkAutor"
            value={formData.mainLinkAutor}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <label className="block mb-2 text-xl font-medium text-gray-700 mt-5">Enlace Principal:</label>
          <input
            type="url"
            name="mainLink"
            value={formData.mainLink}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-xl font-medium text-gray-700">Enlaces Secundarios:</label>
          {formData.secondaryLinks.map((link, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Nombre del enlace"
                value={link.name}
                onChange={(e) => handleArrayInputChange(index, 'secondaryLinks', { ...formData.secondaryLinks[index], name: e.target.value })}
                className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="url"
                placeholder="URL del enlace"
                value={link.url}
                onChange={(e) => handleArrayInputChange(index, 'secondaryLinks', { ...formData.secondaryLinks[index], url: e.target.value })}
                className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeArrayField('secondaryLinks', index)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('secondaryLinks')}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
          >
            <FaPlus /> Agregar enlace
          </button>
        </div>

        <div>
          <label className="block mb-2 text-xl font-medium text-gray-700">PDFs:</label>
          {formData.pdfs.map((pdf, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={pdf}
                onChange={(e) => handleArrayInputChange(index, 'pdfs', e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeArrayField('pdfs', index)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('pdfs')}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
          >
            <FaPlus /> Agregar PDF
          </button>
        </div>

        {!loading ? (
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            <FaEdit /> Actualizar Contexto
          </button>
        ) : (
          <Spinner />
        )}
      </form>
    </div>
  );
}
