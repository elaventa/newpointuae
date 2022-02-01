import React from 'react';
import "./Services.scss"
import fabrication from "../../assets/fabrication.jpg"
import otherServices from "../../assets/other-services.jpeg"
const Services = () => {
  return <div className='section services'>
    <h1 className="section-title">Our Services</h1>
    <p className="section-desc">We serve you with 30+ different services</p>
    <h2>Fabrication services</h2>
    <div className="fabrication-services">
        <div className="image">
            <img src={fabrication} alt="" />
        </div>
        <div className="content">
        <p>We provide services inCat Ladders, Cage Ladders, Handrails, Bollards, Dewa Trenc, Covers, Storage Tanks, Walkways, Platforms, Trolleys, Canopies, Motorized/ Manual Gates, Boundary Wall Fence, Skip for Trash, Mezzanine Floor / Shed, Car Parking Shed, Glass Handrails, Aluminium and Glass, Partitions, Carpentry, Rolling and Bending, Gypsum Partition, Floor Parquet, Kitchen Equipments,Anchor Bolts & Fasteners.</p> 
        </div>
    </div>

    <h2>Other services</h2>
    <div className="fabrication-services">
        <div className="content">
        <p>We also provide services such as Plasma Waterjet and Laser Cutting, Hot Dip Galvanizing, Electroplating, Brush Finishing, Mirror Finishing, Hard Chromeplating, Decorative Chromeplating, Epoxy Painting, Gear Box Overhaulic, Machine Maintenance at
site, Modification of existing
machines.</p> 
        </div>
        <div className="image">
            <img src={otherServices} alt="" />
        </div>
    </div>
  </div>;
};

export default Services;
