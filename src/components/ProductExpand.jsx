/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import Button from "./Button";
import { WhatsappLogo } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
const ProductExpand = ({ isOpen, onClose, prod }) => {
    if (!isOpen || !prod) return null;

    return (
        <div
            className="fixed inset-0 bg-black_10 bg-opacity-85 flex items-center justify-center z-50 -top-6"
            onClick={onClose}
        >
            <div
                className="relative p-4 max-w-md mx-auto"
                onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
            >
                <button
                    className="absolute z-20 right-5 top-5 rounded-md bg-primaryColor text-white "
                    onClick={onClose}
                >
                    <X size={30} />
                </button>
                <img
                    src={prod.imagem}
                    className="w-full rounded-lg mb-5"
                />

                <Button color={"bg-secondaryColor"} link={`https://wa.me/5588994859101?text=Ol%C3%A1%2C%20fiquei%20interessada(o)%20nesse%20produto! %20%0AModelo: ${prod.imagem} %0ATamanho: ${prod.tamanho}%20%0AValor: ${prod.valor},00R$`}>
                    <WhatsappLogo size={22}/>
                    Comprar
                </Button>
            </div>
        </div>
    );
}

export default ProductExpand;