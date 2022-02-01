import React from 'react';
import "./Home.scss"
import home from "../../assets/home.jpg"
const Home = () => {
  return <section className='section Home'>
    <div className="content">
        <h1 className='title'>Destination for all your <span>engineering</span> needs</h1>
        <p className="desc">One stop shop for all your engineering solutions</p>
        <button className="btn">Get started</button>
    </div>
    <div className="image">
        <img src={home} alt="home" />
    </div>
  </section>;
};

export default Home;
