import React, { useEffect, useState } from 'react'
import './Fake.css';
import { FaHeart,FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Dummy = ({addToCart , addToWatchlist}) => {
   
       let [products, setProducts] = useState([]);

 useEffect(function(){
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data =>{
           setProducts(data.products);
    })
 },[])



  return (
    <div className='dummy container'>
      <div className='title'>
          <h2>Dummy Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia, autem expedita, recusandae doloribus perspiciatis fugit dignissimos reiciendis provident blanditiis quis voluptate vitae ab porro dolorum? Quo cum odio ex.</p>

          <div className="products">
          {products.map(function(product){
            return(
                <div className='product'>
                  <Link to={`/dummyDetails/${product.id}`}>
                    <img src={product.thumbnail} alt="" />
                  </Link>
                    <h3>{product.title.slice(0,20)}</h3>
                       <div>
                  <FaHeart    className='dummy-icon' onClick={()=>addToWatchlist(product)}></FaHeart >
                  <FaCartPlus className='dummy-icon' onClick={()=>addToCart(product)}></FaCartPlus >
                </div>

                </div>
            )
          })}
          </div>
      </div>
    </div>
  )
}

export default Dummy
