import { BrowserRouter } from "react-router-dom"


// composants
import Header from "./components/headerTest/Header"
import Footer from "./components/Footer/Footer"



// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"

// Routers
import AppRouter from "./router/Routers"

function App() {
  return (
    <BrowserRouter>

    <Header/>
    <main>
      <AppRouter/>
    </main>

    <Footer/>  

    </BrowserRouter>
  )
}

export default App