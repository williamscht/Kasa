import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
// composants
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import Error from "../pages/Error"
import Apartment from "../pages/Apartment"



function AppRouter() {
  return (
    <BrowserRouter>
     <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment/:id" element={<Apartment />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer/>  
    </BrowserRouter>
  )
}

export default AppRouter
