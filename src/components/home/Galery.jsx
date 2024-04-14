import React, { useRef, useState } from 'react';
import { imgGalery } from '../../data/Data';
import { imageCHC, imageDDOC, imageTP } from '../../data/DataGalery';
import CardGalery from './CardGalery';


const Galery = () => {

    const { id, } = imgGalery;

    const categoryContainer = useRef(null);
    const [isScroll, setIsscroll] = useState(false);
    const scrollContainer = (direction) => {
        direction === "right"
            ? (categoryContainer.current.scrollLeft += 200)
            : (categoryContainer.current.scrollLeft -= 200);
        categoryContainer.current.scrollLeft > 0
            ? setIsscroll(true)
            : setIsscroll(false);
    };

    return (
        <div className="pt-10 pb-10 space-y-8">
            <CardGalery
                imgGalery={imgGalery}
                category={"Diplomado Herramientas Digitales para la gestión de investigaciones educativas"}
            />


            <CardGalery
                imgGalery={imageCHC}
                category={"Congreso Internacional en modalidad híbrida Pedagogía 2023 en la Habana Cuba"}
            />
            <CardGalery
                imgGalery={imageDDOC}
                category={"Debates del Doctorado en Educación y Cultura Digital Pedagógica"}

            />
            <CardGalery
                imgGalery={imageTP}
                category={"Toma de protesta y entrega de grados académicos"}

            />
        </div>

    )
}

export default Galery;