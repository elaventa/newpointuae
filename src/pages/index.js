import React, { useState } from "react"
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
import { FaAngleUp } from "react-icons/fa"
import { Link } from "gatsby"

export default function Home() {

  // const [visible, setVisible] = useState(false)
  
  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 500){
  //     setVisible(true)
  //   } 
  //   else if (scrolled <= 500){
  //     setVisible(false)
  //   }
  // };
  
  // const scrollToTop = () =>{
  //   window.scrollTo({
  //     top: 0, 
  //     behavior: 'smooth'
  //   });
  // };
  
  // window.addEventListener('scroll', toggleVisible);
  return (
    
    <section>
     <Helmet title="New Point Electromechanical">
      <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
      <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen"></link>
      <meta name="description" content="Destination for all your engineering needs, One stop shop for all engineering solutions | Newpoint Electromechanical Equipment Installation and Maintenance" />
      <meta name="image" content="https://github.com/elaventa/newpointuae/blob/577f20ffcd334cf127a94a44f0379a80ef5fe8f6/src/assets/og-image.png?raw=true" />
      <meta property="og:site_name" content="Newpoint Electromechanical Equipment Installation and Maintenance " />
      <meta property="og:title" content="Newpoint Electromechanical Equipment Installation and Maintenance" />
      <meta property="og:url" content="https://newpointuae.com" />
      <meta property="og:image" itemprop="image" content="https://github.com/elaventa/newpointuae/blob/577f20ffcd334cf127a94a44f0379a80ef5fe8f6/src/assets/og-image.png?raw=true" />
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
      
        {/* <div style={{display: visible ? 'flex' : 'none'}} onClick={scrollToTop} className="scrollUp">
          <FaAngleUp fontSize={25} />
        </div> */}
    </section>
  )
}
