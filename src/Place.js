import React from 'react';
import Slider from 'react-slick';
import './App.css';
import img1 from './assets/img1.jpg'; 
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

export default function Place() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  return (
    <div className='place'>
        <br></br>
      <h1 className='placeh1'>Our Headquarters</h1><br></br>
      <Slider {...settings}>
        <div><img src={img1} alt='Slide 1' className='slide-image' /></div>
        <div><img src={img2} alt='Slide 2' className='slide-image' /></div>
        <div><img src={img3} alt='Slide 3' className='slide-image' /></div>
        <div><img src={img4} alt='Slide 4' className='slide-image' /></div>
        <div><img src={img5} alt='Slide 5' className='slide-image' /></div>
      </Slider><br></br>
      <h3>Rajasatellite's headquarters is located in Kotarubilli junction Gantyada mandalm Vizianagaram-535215</h3><br></br>
    </div>
  );
}
