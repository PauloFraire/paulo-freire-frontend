import CardBook from "../components/educational/CardBook";
import CardProject from "../components/educational/CardProject";
import tesisYoshimar from "../assets/pdf/14 - Yoshimar - Tesis Doctoral.pdf";
import tesisNelidad from "../assets/pdf/23 - Nélida - Tesis Doctoral.pdf";
import tesisVictor from "../assets/pdf/20 - Víctor Guadalupe - Tesis Doctoral.pdf";
import tesisBriceyda from "../assets/pdf/BRICEYDA_HERN_NDEZ.pdf"


const data = [
    {
        id: 1,
        title: "Yhosimar Tesis Doctoral",
        description: "NEARPOD, HERRAMIENTA DIGITAL PARA LA EVALUACIÓN 2.0, EDUCACIÓN A DISTANCIA DE LA COMPRENSIÓN LECTORA EN EDUCACIÓN PRIMARIA",
        pdf: tesisYoshimar
    },
    {
        id: 2,
        title: "Nelida Tesis Doctoral",
        description: "LA ENSEÑANZA DE LA LECTURA EN EDUCACIÓN PRIMARIA",
        pdf: tesisNelidad
    },
    {
        id: 3,
        title: "Victor Tesis Doctoral",
        description: "LA ENSEÑANZA DE LA LECTURA EN EDUCACIÓN PRIMARIA",
        pdf: tesisVictor
    },
    {
        id: 4,
        title: "Briceyda Tesis Doctoral",
        description: "LA ENSEÑANZA DE LA LECTURA EN EDUCACIÓN PRIMARIA",
        pdf: tesisBriceyda
    },
];

const Bibloteca = () => {
    return (
        <>
            <section className="">
                <h1 className="text-center capitalize text-3xl my-10 font-bold">
                    Bibloteca digital
                </h1>

                <div className="container mx-auto">
                    <div className="mx-5">
                        <div className="my-10">
                            <h2 className="text-center font-bold text-2xl text-slate-700 mb-5">
                                Tesis Doctorales.
                            </h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    data.map((item) => (
                                        <CardBook key={item.id} title={item.title} description={item.description} pdf={item.pdf} />
                                    ))
                                }
                            </div>

                        </div>
                        {/* <div className="my-10">
                            <h2 className="text-center font-bold text-2xl text-slate-700 mb-5">
                                Proyectos de desarrollo educativo.
                            </h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <CardProject />
                                <CardProject />
                                <CardProject />
                                <CardProject />

                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bibloteca;