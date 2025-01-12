import CardCategoria from "./CardCategory";
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Catalogo = ({ id }) => {

    const Roupas = [
        { titulo: "Conjunto Langeries", tituloId: "conj-langeries", bgColor: "bg-silver", spanCols: "col-span-2", spanRows: "row-span-1" },
        { titulo: "Shorts Masculinos", tituloId: "shorts-masc", bgColor: "bg-bown", spanCols: "col-span-1", spanRows: "row-span-1" },
        { titulo: "Peças íntimas", tituloId: "pecas-intimas", bgColor: "bg-green", spanCols: "col-span-1", spanRows: "row-span-1" },
        { titulo: "Pijamas", tituloId: "pijamas", bgColor: "bg-rose", spanCols: "col-span-2", spanRows: "row-span-1" },
    ];

    const Bijuterias = [
        { titulo: "Aços e folheados", tituloId: "acos-e-folheados", bgColor: "bg-blue", spanCols: "col-span-2", spanRows: "row-span-1" },
    ];

    const CamaMesaBanho = [
        { titulo: "Toalhas", tituloId: "toalhas", bgColor: "bg-silver", spanCols: "col-span-2", spanRows: "row-span-1" },
        { titulo: "Colcha de cama", tituloId: "colcha-de-cama", bgColor: "bg-rose", spanCols: "col-span-1", spanRows: "row-span-1" },
    ];

    const navigate = useNavigate();


    return (
        <div id={id} className="max-w-6xl m-auto w-full flex flex-col items-center justify-between px-5">
            <h2 className="text-D_Gray text-xl text-center font-semibold my-5">Catálogo</h2>

            <div className="block lg:grid grid-cols-2 gap-4 w-full">

                {/* Div 1 */}
                <div>
                    <h3 className="w-full bg-primaryColor text-white text-xl font-semibold pl-12 rounded">Roupas</h3>
                    <div className="grid sm:grid-cols-3 sm:grid-rows-2 gap-4 p-4 md:max-w-lg m-auto">
                        {Roupas.map((categoria, index) => (
                            <CardCategoria
                                key={index}
                                titulo={categoria.titulo}
                                bgColor={categoria.bgColor}
                                spanCols={categoria.spanCols}
                                spanRows={categoria.spanRows}
                                exibirBotao={categoria.exibirBotao}
                                onClick={() => {
                                    navigate(`/Roupas/${categoria.tituloId}`); // Usa o título padronizado como ID na URL
                                }}
                            />

                        ))}
                    </div>
                </div>

                {/* Div 2 */}
                <div>
                    <h3 className="w-full bg-primaryColor text-white text-xl font-semibold pl-12 rounded">Bijuterias</h3>
                    <div className="grid grid-cols-4 gap-4 p-4 md:max-w-lg m-auto">
                        {Bijuterias.map((categoria, index) => (
                            <CardCategoria
                                key={index}
                                titulo={categoria.titulo}
                                bgColor={categoria.bgColor}
                                spanCols={categoria.spanCols}
                                spanRows={categoria.spanRows}
                                exibirBotao={categoria.exibirBotao}
                                onClick={() => {
                                    navigate(`/Bijuterias/${categoria.tituloId}`); // Usa o título padronizado como ID na URL
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Div 3 */}
                <div className="col-span-2">
                    <h3 className="w-full bg-primaryColor text-white text-xl font-semibold pl-12 rounded">Cama, mesa e banho</h3>
                    <div className="grid sm:grid-cols-3 sm:grid-rows-2 gap-4 p-4 md:max-w-lg m-auto">
                        {CamaMesaBanho.map((categoria, index) => (
                            <CardCategoria
                                key={index}
                                titulo={categoria.titulo}
                                bgColor={categoria.bgColor}
                                spanCols={categoria.spanCols}
                                spanRows={categoria.spanRows}
                                exibirBotao={categoria.exibirBotao}
                                onClick={() => {
                                    navigate(`/CamaMesaBanho/${categoria.tituloId}`); // Usa o título padronizado como ID na URL
                                }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Catalogo;