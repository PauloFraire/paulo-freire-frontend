import React, { useState, useEffect } from 'react'
import { CiLink } from "react-icons/ci";
import { FaExternalLinkSquareAlt, FaRegFilePdf } from "react-icons/fa";
import clientAxios from '../config/clientAxios';

const ContextContemporaneo = () => {
  const [contextData, setContextData] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contextResponse, pdfsResponse] = await Promise.all([
          clientAxios.get('/contexto-contemporaneo'),
          clientAxios.get('/pdfs-cc')
        ]);

        // /contexto-contemporaneo -> Array con 1 objeto
        setContextData(contextResponse.data[0]);
        // /pdfs-cc -> Array con varios objetos (tipo 0 o 1)
        setPdfs(pdfsResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  if (!contextData) return <div className="text-center p-4">No content available</div>;

  // Filtra los PDFs según su tipo
  const pdfsTipo1 = pdfs.filter(pdf => pdf.tipo === 1);
  const pdfsTipo0 = pdfs.filter(pdf => pdf.tipo === 0);

  return (
    <section className='md:container mx-auto my-10 p-2'>

      {/* -- TÍTULO PRINCIPAL -- */}
      <h1 className='text-center text-5xl font-extrabold uppercase text-slate-700 m-2'>
        {contextData.title}
      </h1>

      {/* -- FRASE PRINCIPAL (autor) -- */}
      <div className='container mx-auto max-w-4xl my-10'>
        <p className='text-center text-lg font-abold uppercase text-slate-700 mx-2'>
          {contextData.mainSection}
          <br />
          <span className='font-bold flex justify-center p-2 sm:justify-end'>
            {contextData.author}
          </span>
        </p>
      </div>

      <hr />

      {/* -- TARJETA PRINCIPAL -- */}
      <div className="flex justify-center my-10">
        <div className="p-6 rounded-lg bg-gradient-to-tr from-green-300 to-red-300 via-yellow-300 shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold">
            {contextData.article}
          </h1>
          <br />
          <p>{contextData.articleDescription}</p>
          <br />
          <a
            href={contextData.mainLink}
            className="inline-flex items-center justify-center text-base font-medium gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLink className="h-6 w-6" />
            <span className="w-full">{contextData.mainLinkAutor}</span>
            <FaExternalLinkSquareAlt className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* -- PDFs TIPO 1 (con imagen y título) -- */}
      {pdfsTipo1.length > 0 && (
        <div className='container mx-auto max-w-5xl my-10'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 grid-cols-1'>
            {pdfsTipo1.map(pdf => (
              <div
                key={pdf._id}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg
                           hover:bg-gray-300 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {/* Muestra la imagen si existe */}
                {pdf.imagen && (
                  <img
                    className="mb-2 w-full h-48 object-cover rounded"
                    src={pdf.imagen}
                    alt={pdf.nombre}
                  />
                )}
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {pdf.nombre}
                </h5>
                <p>
                    {pdf.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr />

      {/* -- LINKS SECUNDARIOS -- */}
      <div className='flex container mx-auto justify-center my-10'>
        <div className='grid md:grid-cols-2 max-w-5xl gap-2'>
          {contextData.secondaryLinks && contextData.secondaryLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="inline-flex items-center justify-center p-5 text-base font-mediu
                         rounded-lg bg-gray-200 hover:bg-gray-300 gap-2 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLink className="h-6 w-6 text-blue-400" />
              <span className="w-full">{link.name}</span>
              <FaExternalLinkSquareAlt className='h-6 w-6' />
            </a>
          ))}
        </div>
      </div>

      {/* -- PDFs TIPO 0 (los “normales” con degradados) -- */}
      {pdfsTipo0.length > 0 && (
        <div className='container mx-auto max-w-5xl my-10'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 grid-cols-1'>
            {pdfsTipo0.map((pdf, index) => {
              // Fondos degradados para cada tarjeta
              const backgrounds = [
                'bg-gradient-to-tr from-purple-300 to-blue-200',
                'bg-gradient-to-tr from-orange-300 to-yellow-200',
                'bg-gradient-to-tr from-pink-300 to-yellow-100',
                'bg-gradient-to-tr from-blue-300 to-sky-100',
                'bg-gradient-to-tr from-green-300 to-yellow-100',
                'bg-gradient-to-tr from-red-200 to-red-300'
              ];
              // Elige el fondo según el índice
              const cardStyle = backgrounds[index % backgrounds.length];

              return (
                <div key={pdf._id} className='flex'>
                  <a
                    href={pdf.archivo}
                    className={`block max-w-sm p-6 rounded-lg shadow hover:bg-gray-300 flex-grow
                                hover:scale-105 transition-all duration-300 ease-in-out ${cardStyle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaRegFilePdf className='text-center mx-auto text-red-600 my-2' />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {pdf.nombre}
                    </h5>
                    <p className="font-normal">
                        {pdf.descripcion}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* -- IMAGEN FINAL -- */}
      <div className='container mx-auto mt-10 max-w-5xl flex justify-center flex-col items-center'>
        <img
          className="h-auto max-w-lg rounded-lg object-cover object-center"
          src="https://assets.isu.pub/document-structure/221022193407-97668cb58b1c5b49c96732ab70a64e6c/v1/d3330072c89656bc5ad6e65908a5638e.jpeg"
          alt="image description"
        />
      </div>

    </section>
  );
};

export default ContextContemporaneo;
