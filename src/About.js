import React from 'react';
import Navbar from './Navbar';
import './App.css';
import maa from './assets/maa.jpg'
import etv from './assets/etv.png'
import tv9 from './assets/tv9.jpg'
import zee from './assets/zee.png'
import abn from './assets/abn.png'
import sony from './assets/sony.png'
import gemini from './assets/Geminitv.png'
import discovery from './assets/discovery.jpg'
import dd from './assets/dd.jpg'
import channels from './assets/Rajasatellite.xlsx'

export default function About({ showNavbar }) {
  return (
    <div className="about">
      {showNavbar && ( <Navbar />)}
     
      <div className="content">
        <div className="left">
          <h2>Channels We Offer</h2>
          <h3 className='suba'>Rajasatellite offers an unrivaled selection of over 300+ channels, catering to a diverse range of interests.</h3>
          <h3><br></br>
        Discover a world of entertainment, information, and cultural programming with Rajasatellite.
        </h3>
        </div>
        <div className="right">
          <div className="channel-logos">
            <img src={zee} alt="Zee" className="channel-logo"/>
            <img src={etv} alt="Etv" className="channel-logo"/>
            <img src={maa} alt="maa" className="channel-logo"/>
            <img src={sony} alt="Sony Sports" className="channel-logo"/>
            <img src={tv9} alt="TV9" className="channel-logo"/>
            <img src={abn} alt="ABN" className="channel-logo"/>
            <img src={dd} alt="DD" className="channel-logo"/>
            <img src={gemini} alt="Gemini" className="channel-logo"/>
            <img src={discovery} alt="Discovery" className="channel-logo"/>
          </div>
          <div className="more-info">
            <p>And 300+ more...</p>
            <a href={channels} className="view-all-link" download>Click to view all channels</a>
          </div>
        </div>
      </div>
    </div>
  );
}
