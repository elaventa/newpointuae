import React from "react"
import "./Services.scss"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
  return (
    <div id="services" className="section services">
      <h1 className="section-title">Our Services</h1>
      <p className="section-desc">We serve you with 30+ different services</p>
      <h2>Fabrication services</h2>
      <div className="fabrication-services">
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
              src="../../assets/fabrication.jpg"
              alt="fabrication"
            />
          </div>
          <div className="image">
            <StaticImage
              placeholder="blurred"
              layout="constrained"
              src="../../assets/fabrication2.png"
              alt="fabrication"
            />
          </div>
        </Carousel>
        <div className="content">
          <p>
            We provide services in
            <ul>
              <li>Cat Ladders, Cage Ladders</li>
              <li>Handrails</li>
              <li>Bollards</li>
              <li>Dewa Trench Covers</li>
              <li>Storage Tanks</li>
              <li>Walkways, Platforms</li>
              <li>Trolleys</li>
              <li>Canopies</li>
              <li>Motorized/ Manual Gates</li>
              <li>Boundary Wall Fence</li>
              <li>Skip for Trash</li>
              <li>Mezzanine Floor / Shed</li>
            </ul>
          </p>
        </div>
        <div className="content-phone-container">
          <div className="content-phone">
            <ul>
              <li>Cat Ladders, Cage Ladders</li>
              <li>Handrails</li>
              <li>Bollards</li>
              <li>Dewa Trench Covers</li>
              <li>Storage Tanks</li>
              <li>Walkways, Platforms</li>
              <li>Trolleys</li>
              <li>Canopies</li>
              <li>Motorized/ Manual Gates</li>
              <li>Boundary Wall Fence</li>
              <li>Skip for Trash</li>
              <li>Mezzanine Floor / Shed</li>
            </ul>
          </div>

          <div className="content-phone">
            <ul>
              <li>Car Parking Shed</li>
              <li>Glass Handrails</li>
              <li>Aluminium and Glass</li>
              <li>Partitions</li>
              <li>Carpentry</li>
              <li>Rolling and Bending</li>
              <li>Gypsum Partition</li>
              <li>Floor Parquet</li>
              <li>Kitchen Equipments</li>
              <li>Anchor Bolts &</li>
              <li>Fasteners</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Other services</h2>
      <div className="fabrication-services">
        <div className="content">
          <p>
            We also provide services such as
            <ul>
              <li>Plasma, Waterjet</li>
              <li>Laser Cutting</li>
              <li>Hot Dip Galvanizing</li>
              <li>Electroplating</li>
              <li>Brush Finishing </li>
              <li> Mirror Finishing</li>
              <li>Hard Chromeplating</li>
              <li>Decorative Chromeplating</li>
              <li>Epoxy Painting</li>
              <li>Gear Box Overhaulic</li>
              <li>Machine Maintenance at site</li>
              <li>Modification of Existing machines</li>
            </ul>
          </p>
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
              src="../../assets/other-services.jpeg"
              alt="fabrication"
            />
          </div>
          <div className="image">
            <StaticImage
              placeholder="blurred"
              layout="constrained"
              src="../../assets/other-services2.jpg"
              alt="fabrication"
            />
          </div>
        </Carousel>
        <div className="content-phone-container">
          <div className="content-phone">
            <ul>
              <li>Plasma, Waterjet</li>
              <li>Laser Cutting</li>
              <li>Hot Dip Galvanizing</li>
              <li>Electroplating</li>
              <li>Brush Finishing, Mirror Finishing</li>
              <li>Hard Chromeplating,</li>
              <li>Decorative Chromeplating</li>
              <li>Epoxy Painting</li>
              <li>Gear Box Overhaulic</li>
              <li>Machine Maintenance at site</li>
              <li>Modification of Existing machines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
