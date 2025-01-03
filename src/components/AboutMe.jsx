import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import circle from "../assets/circle.svg";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const SobreMim = ({ id }) => {
    return (
        <div id={id} className="py-10">
            <h2 className=" text-D_Gray text-xl font-semibold text-center my-5">Sobre Mim</h2>
            <div className="max-w-6xl m-auto w-full flex flex-col md:flex-row items-center justify-center ">
                <div className="flex flex-col items-center">
                    <p className="sm:max-w-sm max-w-xs text-gray mb-2 text-center text-xs sm:text-sm">Olá, Me chamo Veronica e sou uma vendedora autodidata, lhe fornecendo os melhores itens para você ou para presentear quem você ama!!</p>
                    <img src={circle} alt="image perfil" />
                </div>
                <div className="flex flex-col gap-3 p-4 w-80">
                    <Button color={'bg-secondaryColor'}>
                        <p>Contato direto</p>
                        <WhatsappLogo size={25} />
                    </Button>
                    <Button color={'bg-gradiantInsta'}>
                        <p>Siga-me no Insta</p>
                        <InstagramLogo size={25} />
                    </Button>
                    <Button color={'bg-D_Blue'}>
                        <p>Veja meu Face</p>
                        <FacebookLogo size={25} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SobreMim;