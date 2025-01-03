import Catalogo from "./components/Catalog"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import SobreMim from "./components/AboutMe"

function App() {

  return (
    <>
      <div className="">
        <Header/>
        <Home id="home"/>
        <Catalogo id="produtos"/>
        <SobreMim id="sobreMim"/>
        <Footer/>
      </div>
    </>
  )
}

export default App
