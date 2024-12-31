import imageGirl from "../assets/girlHello.png";
import arrow from "../assets/arrow.svg";

// eslint-disable-next-line react/prop-types
const Home = ({ id }) => {
  return (
    <div id={id} className="bg-silver h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full flex items-center sm:flex-row flex-col gap-3 sm:gap-0 justify-between px-5">
        <div>
          <h1 className="text-D_Gray sm:text-5xl sm:text-left text-4xl text-center font-semibold">
            Sejam
            <span className="text-primaryColor"> <br/>
            Bem Vindos!!
            </span>
          </h1>
          <p className="text-gray mb-2 text-xs sm:text-sm">Acesse o catálogo para ver as novidades.</p>
          <button className="flex gap-1 px-3 py-2 bg-primaryColor hover:opacity-80 transition-opacity items-center rounded-lg text-white text-sm m-auto sm:m-px">
            <a href="#produtos">Acessar catálogo</a>
          </button>
        </div>
        <div>
          <img className="w-72" src={imageGirl} alt="#" />
        </div>
        <a href="#produtos"><img className="absolute bottom-7 left-0 right-0 mx-auto" src={arrow} alt="ver produtos"/></a>
      </div>
    </div>
  )
}
export default Home;