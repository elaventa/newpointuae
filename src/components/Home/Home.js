import React from 'react';
import "./Home.scss"
import home from "../../assets/home.jpg"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Home = () => {
  return <section className='section Home'>
    <div className="content">
        <h1 className='title'>Destination for all your <span>engineering</span> needs</h1>
        <p className="desc">One stop shop for all your engineering solutions</p>
        <button className="btn">Get started</button>
    </div>
    <Carousel className='images'
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
        >
        <div className="image">
            <img src={home} alt="" />
        </div>
        <div className="image">
            <img src={home} alt="" />
        </div>
       
        </Carousel>
  </section>;
};

export default Home;
