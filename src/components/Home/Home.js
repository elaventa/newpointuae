import React from "react"
import "./Home.scss"
import home from "../../assets/home.jpg"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <section className="section Home">
      <div className="content">
        <h1 className="title">
          Destination for all your <span>engineering</span> needs
        </h1>
        <p className="desc">One stop shop for all your engineering solutions</p>
        <button className="btn">Get started</button>
      </div>
      <Carousel
        className="images"
        autoPlay={true}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
      >
        <div className="image">
          <StaticImage
            placeholder="blurred"
            layout="constrained"
            src="../../assets/home.jpg"
            alt="fabrication"
          />
        </div>
        <div className="image">
          <StaticImage
            placeholder="blurred"
            layout="constrained"
            src="../../assets/home.jpg"
            alt="fabrication"
          />
        </div>
      </Carousel>
    </section>
  )
}

export default Home
