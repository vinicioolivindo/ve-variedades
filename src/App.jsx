import Catalogo from "./components/Catalogo"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <>
      <div className="">
        <Header/>
        <Home id="home"/>
        <Catalogo id="produtos"/>
      </div>
    </>
  )
}

export default App
