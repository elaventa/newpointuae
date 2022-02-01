import React from "react"
import Navbar from "../components/NavBar/Header"
import HomeContent from "../components/Home/Home"
import "../styles/global.css"
import Services from "../components/Services/Services"
import Facilities from "../components/Services/Facilities"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"


export default function Home() {
  return (
    
    <section>
      <Navbar />
      <HomeContent />
      <Services />
      <Facilities />
      <About />
      <Footer />
    </section>
  )
}
