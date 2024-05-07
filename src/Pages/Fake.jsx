import React, { useEffect, useState } from 'react'
import './Fake.css';
import { FaHeart,FaCartPlus,} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Fake = ({addToCart , addToWatchlist}) => {

      let [products, setProducts] = useState([]);


    useEffect(function(){
         fetch("https://fakestoreapi.com/products")
         .then(res => res.json())
         .then(data =>{ 
            setProducts(data);
         })
    }, [])

     
  return (
    <div className='fake container'>
      <div className="title">
        <h2> Fake Products </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, doloremque impedit eum vel, laudantium dolorum provident itaque molestiae labore delectus enim, nemo odio culpa? Corrupti perferendis corporis eius deleniti possimus?</p>
      </div>

      <div className="products">
        {products.map(function(product){
          return(
            <div className='product'>
              <Link to={`/fakeDetails/${product.id}`} className='link'>
                <img src={product.image} alt="" />
              </Link>
            
                <h3>{product.title.slice(0,15)}</h3>
                <div>

                  <FaHeart className='product-icon' onClick={()=> addToWatchlist(product)}></FaHeart >

                  <FaCartPlus className='product-icon' onClick={()=> addToCart(product)}></FaCartPlus >
                </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Fake
