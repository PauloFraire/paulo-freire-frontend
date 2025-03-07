import React from "react";

const CardOffer = ({ offer, index }) => {
  return (
    <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
      {/* Franja lateral izquierda alternando colores */}
      <div
        className={`${
          index % 2 === 0 ? "bg-amber-500" : "bg-sky-700"
        } w-1.5 flex-shrink-0`}
      />

      <div className="p-6 w-full flex flex-col">
        <div className="relative px-6 py-14 md:px-12">
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${offer.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
        </div>

        <h4 className="block my-5 text-center text-2xl font-semibold text-blue-gray-900 break-words">
          {offer.title}
        </h4>

        <p className="text-base font-light leading-relaxed text-inherit mb-5 break-words">
          {offer.description}
        </p>

        {/* Lista de PDFs */}
        <ul className="max-w-md space-y-1 text-gray-500 list-inside">
          {offer.pdfs.map((pdf, idx) => (
            <a
              key={idx}
              className="flex items-center truncate overflow-hidden"
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="break-words text-wrap">
                {pdf.name.replace(/\.pdf$/, "")}
              </span>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardOffer;
