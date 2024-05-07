import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Fastar } from "react-icons/fa";
import { FaCartPlus, FaStar } from "react-icons/fa";

const FakeDetails = ({addToCart}) => {

    
      let [product, setProducts] = useState([]);


    useEffect(function(){
         fetch(`https://fakestoreapi.com/products/${id}`)
         .then(res => res.json())
         .then(data =>{ 
            setProducts(data);
         })
    }, [])

    let {id}= useParams();
  return (
    <div className='product-details container'>
    
    <div className='product-details-img'>
         <img src={product.image} alt="" />
    </div>
     <div className="product-info">
         <h2>{product.category}</h2>
         <h3>{product.title}</h3>
         <div>
           <FaStar className='star-icon'></FaStar>
           <FaStar className='star-icon'></FaStar>
           <FaStar className='star-icon'></FaStar>
           <FaStar className='star-icon'></FaStar>
           <FaStar className='star-icon'></FaStar>
         </div>
         <p>{product.description}</p>
         <h2>Price : ${product.price}</h2>
         <button onClick={()=> addToCart(product)}>
            <FaCartPlus ></FaCartPlus>
            Add To Cart
         </button>

     </div>
    </div>
  )
}

export default FakeDetails
