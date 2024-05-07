import React from 'react'
import './Header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {

   var settings = {
    dots: true,
    infinite: true,
    
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='header container'>
          
        <Slider {...settings} className='header-left'>

            <div className="header-left-man h">
              <div>
                <h2>Men Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus, obcaecati quam inventore molestiae fugit maiores laudantium aliquid ipsam in itaque nobis numquam error praesentium autem deserunt culpa ratione sed!</p>
                <button>Shop Now</button>
              </div>

            </div>

             <div className="header-left-woman h">
              <div>
                <h2>Woman Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus, obcaecati quam inventore molestiae fugit maiores laudantium aliquid ipsam in itaque nobis numquam error praesentium autem deserunt culpa ratione sed!</p>
                <button>Shop Now</button>
              </div>

            </div>

             <div className="header-left-kids h">
              <div>
                <h2>Kids Fashion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus, obcaecati quam inventore molestiae fugit maiores laudantium aliquid ipsam in itaque nobis numquam error praesentium autem deserunt culpa ratione sed!</p>
                <button>Shop Now</button>
              </div>

            </div>
        </Slider>

        <div className='header-right'>
            <div className='header-right-up m'>
                <div>
                    <h4>Save 20%</h4>
                    <h2>Special Offer</h2>
                    <button>Shop Now</button>
                </div>
              
            </div>
            <div className='header-right-down m'>
                <div>
                    <h4>Save 20%</h4>
                    <h2>Special Offer</h2>
                    <button>Shop Now</button>
                </div>
              
            </div>
        </div>
      
    </div>
  )
}

export default Header


