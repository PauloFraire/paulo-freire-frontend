import CardBook from "../components/educational/CardBook";
import CardProject from "../components/educational/CardProject";

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
                            <h2 className="text-center font-bold text-2xl text-slate-700">
                                Tesis Doctorales.
                            </h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <CardBook />
                                <CardBook />
                                <CardBook />
                                <CardBook />
                            </div>

                        </div>
                        <div className="my-10">
                            <h2 className="text-center font-bold text-2xl text-slate-700">
                                Proyectos de desarrollo educativo.
                            </h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <CardProject />
                                <CardProject />
                                <CardProject />
                                <CardProject />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bibloteca;