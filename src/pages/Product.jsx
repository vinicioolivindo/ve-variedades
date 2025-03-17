/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronLeftIcon, House } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.json";
import ProductExpand from "../components/ProductExpand";
import { useEffect, useState } from "react";

const Product = () => {
    const { categoria, tituloId } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProd, setselectedProd] = useState({});

    const openModal = (prod) => {
        setselectedProd(prod);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setselectedProd(null);
    };

    // Encontre a categoria correspondente no JSON
    const categoriaEncontrada = products.categories.find(
        (cat) => cat.name === categoria
    );

    if (!categoriaEncontrada) {
        console.error("Categoria não encontrada");
        navigate('/'); // Redireciona para a página inicial caso a categoria não exista
        return null;
    }

    // Encontre o produto correspondente dentro da categoria
    const produto = categoriaEncontrada.subcategories.find(
        (sub) => sub.nameId === tituloId
    );

    if (!produto) {
        console.error("Produto não encontrado");
        navigate('/'); // Redireciona para a página inicial caso o produto não exista
        return null;
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Rola para o topo da página
    }, []); // Executa apenas uma vez após a montagem do componente


    return (
        <div className="flex justify-center relative">

            <button onClick={() => navigate(-1)} className="flex absolute left-2 top-3">
                <ChevronLeftIcon />
                <p className="md:block hidden">Menu</p>
                <p className="md:hidden block"><House /></p>
            </button>
            <div className="flex flex-col items-center max-w-6xl mt-8">
                <h1 className="text-2xl">{produto.nameProd}</h1>
                <ul className="flex flex-wrap justify-center pt-4 gap-4">
                    {
                        // Agrupa os produtos por tamanho
                        ['P', 'M', 'G', 'GG'].map(tamanho => {
                            const produtosDoTamanho = produto.items.filter(prod => prod.tamanho === tamanho);

                            // Se não houver produtos para este tamanho, não renderiza nada
                            if (produtosDoTamanho.length === 0) return null;

                            return (
                                <div key={tamanho} className="w-full px-3">
                                    <h3 className=" bg-primaryColor text-white text-lg font-semibold pl-12  rounded mb-4 ">
                                        Items tamanho: {tamanho}
                                    </h3>
                                    <ul className="flex flex-wrap justify-center gap-3"> {/* Adiciona uma nova ul aqui */}
                                        {produtosDoTamanho.map(prod => (
                                            <li key={`${prod.valor}-${tamanho}`}>
                                                <div
                                                    className="w-40 h-52 sm:w-60 sm:h-72 rounded-t-lg overflow-hidden"
                                                    onClick={() => openModal(prod)}
                                                >
                                                    <img className="w-full h-full object-cover" src={prod.imagem} alt="" />
                                                </div>
                                                <div className="flex justify-center items-center relative bg-primaryColor rounded-b-lg py-1">
                                                    <h2 className="absolute text-lg left-4 text-white font-semibold">{prod.tamanho}</h2>
                                                    <h3 className="text-lg text-white font-semibold">
                                                        R${prod.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
            <ProductExpand isOpen={isModalOpen} onClose={closeModal} prod={selectedProd} />
        </div>
    );
};

export default Product;
