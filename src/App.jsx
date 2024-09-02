import About1 from "./Components/about/About1"
import Experiece from "./Components/Experice/Experiece"
import Footer from "./Components/footer/Footer"
import Navbar from "./Components/Navbar"
import Project from "./Components/Projects/Project"
import Home from "./Home1/Home"

function App() {


  return (
    <>
      <div className="bg-slate-800  h-auto overflow-hidden">
        <Navbar />
        <Home />
        <About1 />
        <Experiece />
        <Project />
        < Footer />
      </div>
    </>
  )
}

export default App
