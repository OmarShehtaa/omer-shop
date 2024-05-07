import React from 'react'
import './Parthner.css';
import img1 from '../../img/vendor-1.jpg';
import img2 from '../../img/vendor-2.jpg';
import img3 from '../../img/vendor-3.jpg';
import img4 from '../../img/vendor-4.jpg';
import img5 from '../../img/vendor-5.jpg';
import img6 from '../../img/vendor-6.jpg';
import img7 from '../../img/vendor-7.jpg';
import img8 from '../../img/vendor-8.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";










const Parthner = () => {

      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay :true,
    autoplaySpeed:1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint:1024,
            settings:  {

              slidesToShow : 4,  
              
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint:480,
            settings:{
                slidesToShow:1,
            }
        }
    ]
  };

  return (
    <div className='parthners container'>
      <Slider{...settings} className="parthner">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </Slider>
    </div>
  )
}

export default Parthner
