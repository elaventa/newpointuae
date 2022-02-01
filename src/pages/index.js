import React from "react"
import Navbar from "../components/NavBar/Header"
import HomeContent from "../components/Home/Home"
import "../styles/global.css"
import Services from "../components/Services/Services"
import Facilities from "../components/Services/Facilities"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"


import { Helmet } from "react-helmet"
import ogImg from "../assets/og-image.png"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    
    <section>
     <Helmet title="New Point Electromechanical">
      <meta name="description" content="Destination for all your engineering needs, One stop shop for all engineering solutions | Newpoint Electromechanical Equipment Installation and Maintenance" />
      <meta name="image" content={ogImg} />
      <meta property="og:site_name" content="Newpoint Electromechanical Equipment Installation and Maintenance " />
      <meta property="og:title" content="Newpoint Electromechanical Equipment Installation and Maintenance" />
      <meta property="og:url" content="https://newpointuae.com" />
      <meta property="og:image" itemprop="image" content={ogImg} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Destination for all your engineering needs, One stop shop for all engineering solutions | Newpoint Electromechanical Equipment Installation and Maintenance" />
    </Helmet>
      <Navbar />
      <HomeContent />
      <Services />
      <Contact/>
      <Facilities />
      <About />
      <Footer />
    </section>
  )
}
