import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import logo from "../assets/logo.svg";
import { Dress, House, Question, UserGear } from "@phosphor-icons/react";
import Button from "./Button";
import HowToUse from "./HowToUse";
import { useState } from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-screen bg-white fixed shadow-sm z-10 m-auto">
            <div className="max-w-6xl  flex justify-between py-3 m-auto px-5 text-sm">
                <div className="flex items-center gap-1">
                    <img className="w-9" src={logo} />
                    <span className="md:block hidden">Vê Variedades</span>
                </div>
                <div className="flex gap-4 items-center text-D_Gray">
                    <ul className="flex gap-4 ">
                        <li className="hover:text-primaryColor transition-all "><a href="#">
                            <span className="hidden sm:block">Home</span>
                            <House className="sm:hidden " size={24} />
                        </a></li>
                        <li className="hover:text-primaryColor transition-all"><a href="#produtos">
                            <span className="hidden sm:block">Produtos</span>
                            <Dress className="sm:hidden" size={24} />
                        </a></li>
                        <li className="hover:text-primaryColor transition-all"><a href="#sobreMim">
                            <span className="hidden sm:block">Sobre Mim</span>
                            <UserGear className="sm:hidden" size={24} />
                        </a></li>
                        <li onClick={() => setIsActive((prevState) => !prevState)} className="hover:text-primaryColor transition-all"><a href="#usarSite">
                            <span className="hidden sm:block">Como usar o site</span>
                            <Question className="sm:hidden" size={24} />
                        </a></li>
                    </ul>
                    <Button color={"bg-secondaryColor"}>
                        <p className="hidden sm:block">Contato direto</p>
                        <WhatsappLogo size={20} />
                    </Button>
                </div>
            </div>

            {
                isActive && (
                    <div onClick={() => setIsActive((prevState) => !prevState)} className="fixed w-screen h-screen bg-black_10 z-50 flex items-center justify-center">
                        <HowToUse />
                    </div>
                )
            }


        </div>
    )
}

export default Header;