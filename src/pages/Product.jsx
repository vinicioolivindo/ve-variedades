import { ChevronLeftIcon, House } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.json";
import ProductExpand from "../components/ProductExpand";
import { useState } from "react";

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

    return (
        <div className="flex justify-center relative">

            <button onClick={() => navigate(-1)} className="flex absolute left-2 top-3">
                <ChevronLeftIcon />
                <p className="md:block hidden">Menu</p>
                <p className="md:hidden block"><House /></p>
            </button>
            <div className="flex flex-col items-center max-w-6xl mt-6">
                <h1 className="text-2xl">{produto.nameProd}</h1>
                <ul className="flex flex-wrap justify-center pt-3 gap-3">
                    {produto.items.map((prod) => (
                        <li key={prod.valor}>
                            <div className="w-72 h-56 rounded-t-lg overflow-hidden" onClick={()=> openModal(prod)}
                            >
                                <img className="w-full h-full object-cover" src={prod.imagem} alt="" />
                            </div>
                            <div className="flex justify-center items-center relative bg-primaryColor rounded-b-lg py-1">
                                <h2 className="absolute text-lg left-4 text-white font-semibold">{prod.tamanho}</h2>
                                <h3 className="text-lg text-white font-semibold">R${prod.valor},00</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <ProductExpand isOpen={isModalOpen} onClose={closeModal} prod={selectedProd}/>
        </div>
    );
};

export default Product;
