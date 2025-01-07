import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const { tituloId } = useParams(); // Obtém o ID do produto da URL
    const navigate = useNavigate();

    // Simulação de busca no arquivo JSON
    const mockProducts = [
        { tituloId: "blusas", descricao: "Blusas de alta qualidade", preco: "R$50" },
        { tituloId: "moletom", descricao: "Moletom confortável", preco: "R$80" },
    ];

    const produto = mockProducts.find(item => item.tituloId === tituloId);

    if (!produto) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex">
                <ChevronLeftIcon />
                Menu
            </button>
            <h1>{produto.descricao}</h1>
            <p>Preço: {produto.preco}</p>
        </div>
    );
};

export default Product;
