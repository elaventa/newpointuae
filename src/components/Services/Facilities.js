import React from "react"
import "./Services.scss"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

const Facilities = () => {
  return (
    <div id="facilities" className="section services">
      <h1 className="section-title">Our Facilities</h1>
      <p className="section-desc">
        Our machine shop helps you in following services.
      </p>
      <div style={{ marginTop: 70 }} className="fabrication-services">
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
              src="../../assets/gears-cogwheels.png"
              alt="facilities"
            />
          </div>
          <div className="image">
            <StaticImage
              placeholder="blurred"
              layout="constrained"
              src="../../assets/gears-cogwheels.png"
              alt="facilites"
            />
          </div>
        </Carousel>
        <div className="content">
          <p>
            We help you with
            <ul>
              <li> Shaft Making</li>
              <li> Gear Cutting</li>
              <li> Tool and Die Making</li>
              <li> Spline Cutting</li>
              <li> Keyway Machining</li>
              <li> Eccentric Turning</li>
              <li> Thread Cutting</li>
              <li> Drilling, Reaming, Counter</li>
              <li> Boring, Taper Boring</li>
              <li> Internal Thread Cutting,</li>
              <li> Taping, Under Cutting</li>
              <li> Key Ways</li>
              <li> Groove & Slots</li>
              <li> Casting</li>
              <li> Heat Treatments</li>
            </ul>
          </p>
        </div>
        <div className="content-phone-container">
          <div className="content-phone">
            <ul>
              <li> Shaft Making</li>
              <li> Gear Cutting</li>
              <li> Tool and Die Making</li>
              <li> Spline Cutting</li>
              <li> Keyway Machining</li>
              <li> Eccentric Turning</li>
              <li> Thread Cutting</li>
              <li> Drilling, Reaming, Counter</li>
              <li> Boring, Taper Boring</li>
              <li> Internal Thread Cutting,</li>
              <li> Taping, Under Cutting</li>
              <li> Key Ways</li>
              <li> Groove & Slots</li>
              <li> Casting</li>
              <li> Heat Treatments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities
