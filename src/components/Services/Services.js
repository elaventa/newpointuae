import React from 'react';
import "./Services.scss"
import fabrication1 from "../../assets/fabrication.jpg"
import fabrication2 from "../../assets/fabrication2.png"
import otherServices from "../../assets/other-services.jpeg"
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Services = () => {
  return <div id='services' className='section services'>
    <h1 className="section-title">Our Services</h1>
    <p className="section-desc">We serve you with 30+ different services</p>
    <h2>Fabrication services</h2>
    <div className="fabrication-services">
        <Carousel className='images'
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
        >
        <div className="image">
            <img src={fabrication1} alt="" />
        </div>
        <div className="image">
            <img src={fabrication2} alt="" />
        </div>
       
        </Carousel>
        <div className="content">
        <p>We provide services inCat Ladders, Cage Ladders, Handrails, Bollards, Dewa Trenc, Covers, Storage Tanks, Walkways, Platforms, Trolleys, Canopies, Motorized/ Manual Gates, Boundary Wall Fence, Skip for Trash, Mezzanine Floor / Shed, Car Parking Shed, Glass Handrails, Aluminium and Glass, Partitions, Carpentry, Rolling and Bending, Gypsum Partition, Floor Parquet, Kitchen Equipments,Anchor Bolts & Fasteners.</p> 
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
        <p>We also provide services such as Plasma Waterjet and Laser Cutting, Hot Dip Galvanizing, Electroplating, Brush Finishing, Mirror Finishing, Hard Chromeplating, Decorative Chromeplating, Epoxy Painting, Gear Box Overhaulic, Machine Maintenance at
site, Modification of existing
machines.</p> 
        </div>
        <Carousel className='images'
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
        >
        <div className="image">
            <img src={otherServices} alt="" />
        </div>
        <div className="image">
            <img src={fabrication2} alt="" />
        </div>
       
        </Carousel>
        <div className="content-phone-container">
            <div className="content-phone">
                <ul>
                <li>Plasma, Waterjet</li>
                <li>Laser Cutting</li> 
                <li>Hot Dip Galvanizing</li> 
                <li>Electroplating</li> 
                <li>Brush Finishing, Mirror</li> 
                <li>Finishing</li> 
                <li>Hard Chromeplating,</li> 
                <li>Decorative</li> 
                <li>Chromeplating</li> 
                <li>Epoxy Painting</li> 
                <li>Gear Box Overhaulic</li> 
                <li>Machine Maintenance at</li> 
                <li>site</li> 
                <li>Modification of Existing</li> 
                <li>machines</li> 
                </ul>
            </div>
        </div>
    </div>
  </div>;
};

export default Services;
