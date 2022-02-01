import React from 'react';
import "./Services.scss"
import facilites from "../../assets/gears-cogwheels.png"
const Facilities = () => {
  return <div className='section services'>
    <h1 className="section-title">Our Facilities</h1>
    <p className="section-desc">Our machine shop helps you in following services.</p>
    <div style={{marginTop: 70}} className="fabrication-services">
        <div className="image">
            <img src={facilites} alt="" />
        </div>
        <div className="content">
        <p>We help you with Shaft Making, Gear Cutting, Tool and Die Making, Spline Cutting, Keyway Machining, Eccentric Turning, Thread Cutting, Drilling, Reaming, Counter Boring, Taper Boring, Internal Thread Cutting,
Taping, Under Cutting, Key Ways, Groove & Slots, Casting
,Heat Treatments.</p> 
        </div>
    </div>
  </div>;
};

export default Facilities;
