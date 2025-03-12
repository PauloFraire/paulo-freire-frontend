import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/navbar/Breadcrumbs";
import { FiCheck } from "react-icons/fi";
import clientAxios from "../config/clientAxios";

const CallsEducational = () => {
  const [becas, setBecas] = useState([]);
  const [loading, setLoading] = useState(true);
  const breadcrumbs = ["Convocatorias"];

  useEffect(() => {
    const fetchBecas = async () => {
      try {
        const response = await clientAxios.get("/getbecas");
        setBecas(response.data);
      } catch (error) {
        console.error("Error al obtener becas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBecas();
  }, []);

  if (loading) return <p className="text-center py-5">Cargando becas...</p>;

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="mx-auto">
        <h1 className="font-extrabold text-4xl text-center uppercase mb-10">
          Becas y Apoyos
        </h1>

        <div className="p-5">
          <p className="flex justify-center items-center mx-auto mb-4 text-lg leading-relaxed max-w-3xl text-center">
            El Centro Regional de Educación Superior “Paulo Freire” (CRESPF), apoya en gestionar becas estatales y federales como incentivo para estudiar posgrados con nosotros.
          </p>

          {becas.map((beca, index) => (
            <div
              key={beca._id}
              className={`pt-20 pb-16 p-4 ${index % 2 === 0 ? "bg-gradient-to-tr from-indigo-500 to-purple-600" : "bg-gradient-to-br from-pink-400 to-rose-600"}`}
            >
              <div className="flex flex-wrap gap-4">
                {index % 2 !== 0 && (
                  <div className="flex-1 basis-[20rem]">
                    <div className="relative">
                      <img
                        src={beca.imageUrl}
                        alt={beca.title}
                        className="rounded-lg w-full sm:h-full object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 basis-[18rem] text-white">
                  <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
                    {beca.title}
                  </h1>
                  <p className="mt-3">{beca.description}</p>

                  {/* Mostrar requisitos */}
                  {beca.requisitos && (
                    <div className="mt-4">
                      <h2 className="text-lg font-semibold">Requisitos:</h2>
                      <ul className="mt-2 list-disc ml-5">
                        {beca.requisitos.split("\n").map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    {beca.pdfs.map((pdf, i) => (
                      <div key={i} className="mt-2 flex items-center gap-x-2">
                        <div className="rounded-full p-2 text-orange-600 !bg-orange-400/20">
                          <FiCheck />
                        </div>
                        <p>{pdf.name}</p>
                      </div>
                    ))}
                  </div>
                  {beca.pdfs.length > 0 && (
                    <a
                      href={beca.pdfs[0].url}
                      className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Descargar Formato
                    </a>
                  )}
                </div>

                {index % 2 === 0 && (
                  <div className="flex-1 basis-[20rem]">
                    <div className="relative">
                      <img
                        src={beca.imageUrl}
                        alt={beca.title}
                        className="rounded-lg w-full sm:h-[400px] object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallsEducational;
