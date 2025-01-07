import Button from "./Button";

const HowToUse = () => {
  return (
    <div className="max-w-sm bg-silver p-4 rounded-xl text-D_Gray m-4">
      <h2 className="text-lg text-center font-semibold">Com ultilizar o site:)</h2>
      <p className="text-sm">O site foi pensado e desenvolvido para ser usado da maneira mais simples e intuitiva.
      </p>
      <h3 className="text-center pt-3 font-medium">Navegar entre os conteúdos da página</h3>

      <p className="text-sm">
        Você pode navegar pelos conteúdos da página usando o menu interativo encontrado na parte
        superior da sua tela.
      </p>
      <h3 className="text-center pt-3 font-medium">Navegar pelos produtos do catálogo</h3>
      <p className="text-sm pb-4">
        Basta ir clicando e escolhendo qual produto lhe interessa, ao chegar nele, você tera
        acesso as fotos desse produto junto com um botão que direciona você para o Whatsap, ja
        inidicando qual pedido você quer.
      </p>

      <Button color={"bg-primaryColor"}>Entendido</Button>
    </div>
  )
}

export default HowToUse;