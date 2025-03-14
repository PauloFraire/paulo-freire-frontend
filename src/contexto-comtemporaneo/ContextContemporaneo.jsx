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

            <div className='flex container mx-auto justify-center my-10 '>
                <div className='grid md:grid-cols-2 max-w-5xl gap-2'>
                    <a href="http://scielo.sld.cu/scielo.php?pid=S1992-82382019000100019&script=sci_arttext" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white gap-2 shadow-sm ">
                        <CiLink className='h-6 w-6 text-blue-400' />
                        <span className="w-full">Los modelos pedagógicos contemporáneos y su influencia en el modo de actuación profesional pedagógico</span>
                        <FaExternalLinkSquareAlt className='h-6 w-6' />
                    </a>
                    {/*  */}
                    <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=5758752" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white gap-2 shadow-sm">
                        <CiLink className='h-6 w-6 text-green-400' />
                        <span className="w-full">Actual vigencia de los modelos pedagógicos en el contexto educativo</span>
                        <FaExternalLinkSquareAlt className='h-6 w-6' />
                    </a>
                    {/*  */}
                    <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=7169074" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white gap-2 shadow-sm">
                        <CiLink className='h-6 w-6 text-red-400' />
                        <span className="w-full">Correlación de los modelos pedagógicos y el currículo en el contexto educativo</span>
                        <FaExternalLinkSquareAlt className='h-6 w-6' />
                    </a>
                    {/*  */}
                    <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=7169074" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white gap-2 shadow-sm">
                        <CiLink className='h-6 w-6 text-purple-400' />
                        <span className="w-full">El sujeto informacional en el contexto contemporáneo. Un análisis desde la epistemología de la identidad comunitariainformaciona</span>
                        <FaExternalLinkSquareAlt className='h-6 w-6' />
                    </a>
                    {/*  */}
                    <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=7169074" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white  shadow-sm">
                        <CiLink className='h-16 w-16 text-purple-400' />
                        <div>
                            <p className="w-full">La Jornada Veracruz -
                                La Escuela Infinita </p>
                            <p>
                                En su reciente artículo, Marcelo Ramírez reflexiona sobre el concepto de "La escuela infinita," analizando cómo la educación puede y debe evolucionar en un mundo en constante cambio, desafiando los límites tradicionales del aprendizaje.
                            </p>
                        </div>
                        <FaExternalLinkSquareAlt className='h-16 w-16' />
                    </a>
                    {/*  */}
                </div>
            </div>


            <div className='container mx-auto max-w-5xl'>

                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 grid-cols-1'>
                    <div className='flex'>
                        <a href={pdf1} className="block max-w-sm p-6 bg-gradient-to-tr from-purple-300 to-blue-200 rounded-lg shadow hover:bg-gray-100 flex-grow hover:scale-105 transition-all duration-300 ease-in-out ">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2' />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comunidades de aprendizaje_práctica educativa de aprendizaje dialógico para la sociedad de la información.pdf</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Esta es una tesis teórica que se incluye en el área de estudio de Pedagogía y Social.
                            </p>
                        </a>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <a href={pdf2} className="block max-w-sm p-6 bg-gradient-to-tr from-orange-300 to-yellow-200 border rounded-lg shadow hover:bg-gray-100 flex-grow hover:scale-105 transition-all duration-300 ease-in-out ">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2' />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Educación y globalización_una visión crítica.pdf</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Este artículo aborda un tema de total vigencia para la educación: las relaciones existentes entre educación y globalización desde una visión crítica.</p>
                        </a>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <a href={pdf3} className="block max-w-sm p-6 bg-gradient-to-tr from-pink-300 to-yellow-100 border rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out ">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2' />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Geopolítica_origen del concepto y su evolución.pdf</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Este trabajo tiene por objetivo destacar algunos momentos del desarrollo
                                del concepto “Geopolítica” que permitan identificar su perfil epistemológico
                                .</p>
                        </a>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <a href={pdf4} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 bg-gradient-to-tr from-blue-300 to-sky-100 hover:scale-105 transition-all duration-300 ease-in-out ">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2' />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">La investigación cualitativa en educacion_necesidad y reto para los modelos pedagogicos contemporaneos.pdf</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">En el presente artículo se plantean los presupuestos básicos, los objetivos e interrogantes de la
                                investigación cualitativa.</p>
                        </a>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <a href={pdf5} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  bg-gradient-to-tr from-green-300 to-yellow-100 flex-grow hover:scale-105 transition-all duration-300 ease-in-out ">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 ' />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modelo didáctico alternativo para transformar la Educación.pdf</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Este artículo presenta un modelo didáctico renovador, que pretende
                                transformar la educación: el "Modelo de Investigación en la Escuela", asumido en el proyecto curricular
                                "Investigación y Renovación Escolar".
                            </p>
                        </a>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <a href={pdf6} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  bg-gradient-to-tr from-red-200 to-red-300 flex-grow hover:scale-105 transition-all duration-300 ease-in-out ">
                            <FaRegFilePdf className='text-center mx-auto text-red-600 my-2 ' />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Líneas de mensaje para Diplomado Innovación escolar e inteligencia artificial generativa. Claves para </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Innovación escolar e inteligencia artificial generativa: Claves para su aplicación en el marco de la nueva escuela mexicana.
                            </p>
                        </a>
                    </div>
                    {/*  */}
                </div>

            </div>

            <div className='container mx-auto mt-10 max-w-5xl flex justify-center flex-col items-center'>
                <img className="h-auto max-w-lg rounded-lg object-cover object-center" src="https://assets.isu.pub/document-structure/221022193407-97668cb58b1c5b49c96732ab70a64e6c/v1/d3330072c89656bc5ad6e65908a5638e.jpeg" alt="image description" />


            </div>


        </section >
    )
}
