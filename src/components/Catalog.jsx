import CardCategoria from "./CardCategory";

// eslint-disable-next-line react/prop-types
const Catalogo = ({ id }) => {

    const catRoupas = [
        { titulo: "BLUSAS", bgColor: "bg-silver", spanCols: "col-span-2", spanRows: "row-span-1"},
        { titulo: "MOLETOM", bgColor: "bg-blue", spanCols: "col-span-1", spanRows: "row-span-1"},
        { titulo: "CONJUNTO", bgColor: "bg-yellow", spanCols: "col-span-1", spanRows: "row-span-1"},
        { titulo: "SHORTS", bgColor: "bg-bown", spanCols: "col-span-1", spanRows: "row-span-1"},
        { titulo: "PEÇAS ÍNTIMAS", bgColor: "bg-green", spanCols: "col-span-1", spanRows: "row-span-1"},
        { titulo: "PIJAMAS", bgColor: "bg-rose", spanCols: "col-span-2", spanRows: "row-span-1"},
    ];

    const catBijuterias = [
        { titulo: "AÇOS E FOLHEADOS", bgColor: "bg-blue", spanCols: "col-span-2", spanRows: "row-span-1"},
    ]

    const catCasaMesaeBanho = [
        { titulo: "TOALHAS", bgColor: "bg-silver", spanCols: "col-span-2", spanRows: "row-span-1"},
        { titulo: "LENÇOIS", bgColor: "bg-blue", spanCols: "col-span-1", spanRows: "row-span-1"},
        { titulo: "PANO DE PRATO", bgColor: "bg-yellow", spanCols: "col-span-1", spanRows: "row-span-1"},
        { titulo: "COLCHA DE CAMA", bgColor: "bg-bown", spanCols: "col-span-2", spanRows: "row-span-1"},
    ]


    return (
        <div id={id} className="max-w-6xl m-auto w-full flex flex-col items-center justify-between px-5">
            <h2 className="text-D_Gray text-xl text-center font-semibold my-5">Catálogo</h2>

            <div className="block lg:grid grid-cols-2 gap-4 w-full">

                {/* Div 1 */}
                <div>
                    <h3 className="w-full bg-primaryColor text-white text-xl font-semibold pl-12 rounded">Roupas</h3>
                    <div className="grid sm:grid-cols-4 gap-4 p-4">
                        {catRoupas.map((categoria, index) => (
                            <CardCategoria
                                key={index}
                                titulo={categoria.titulo}
                                bgColor={categoria.bgColor}
                                spanCols={categoria.spanCols}
                                spanRows={categoria.spanRows}
                                exibirBotao={categoria.exibirBotao}
                            />
                        ))}
                    </div>
                </div>

                {/* Div 2 */}
                <div>
                    <h3 className="w-full bg-primaryColor text-white text-xl font-semibold pl-12 rounded">Bijuterias</h3>
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {catBijuterias.map((categoria, index) => (
                            <CardCategoria
                                key={index}
                                titulo={categoria.titulo}
                                bgColor={categoria.bgColor}
                                spanCols={categoria.spanCols}
                                spanRows={categoria.spanRows}
                                exibirBotao={categoria.exibirBotao}
                            />
                        ))}
                    </div>
                </div>

                {/* Div 3 */}
                <div className="col-span-2">
                    <h3 className="w-full bg-primaryColor text-white text-xl font-semibold pl-12 rounded">Cama, mesa e banho</h3>
                    <div className="grid sm:grid-cols-3 sm:grid-rows-2 gap-4 p-4 md:max-w-lg m-auto">
                        {catCasaMesaeBanho.map((categoria, index) => (
                            <CardCategoria
                                key={index}
                                titulo={categoria.titulo}
                                bgColor={categoria.bgColor}
                                spanCols={categoria.spanCols}
                                spanRows={categoria.spanRows}
                                exibirBotao={categoria.exibirBotao}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Catalogo;