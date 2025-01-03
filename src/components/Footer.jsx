import { Github, InstagramIcon, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
        <div className="bg-silver h-60 flex items-center justify-center">
            <span className="text-4xl font-medium text-D_Blue_Black"><b className="text-primaryColor font-bold">Obrigada</b> por <br/>
            visitar o site!!</span>
        </div>

        <div className="bg-D_Blue_Black h-20 grid place-items-center">
            <div className="flex justify-between items-center max-w-6xl w-full px-5">
                <div>
                    <p className="text-silver text-sm">Site criado e desenvolvido</p>
                    <span className="text-white font-semibold">José Vinício</span>
                </div>
                <ul className="flex text-white gap-3">
                    <li className="bg-silver_10 w-7 h-7 flex items-center justify-center rounded-full"><a href="">
                        <InstagramIcon size={20}/>
                    </a></li>
                    <li className="bg-silver_10 w-7 h-7 flex items-center justify-center rounded-full"><a href="">
                        <Linkedin size={20}/>
                    </a></li>
                    <li className="bg-silver_10 w-7 h-7 flex items-center justify-center rounded-full"><a href="">
                        <Github size={20}/>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;