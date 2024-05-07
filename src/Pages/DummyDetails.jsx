import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from 'react-icons/fa';

const DummyDetails = ({addToCart}) => {

 let {id} = useParams();

   let [product, setProduct] = useState([]);


    useEffect(function(){
           fetch(`https://dummyjson.com/products/${id}`)
         .then(res => res.json())
         .then(data =>{ 
            setProduct(data);
         })
    }, [])



  return (
    <div className='product-details container'>
        <div className='product-details-img'>
           <img src={product.thumbnail} alt="" />

        </div>
          <div className='product-info'>
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
            <h2>Count : ${product.stock}</h2>
            <button onClick={()=>addToCart(product)}>
              <FaCartPlus></FaCartPlus>
              Add To Cart
            </button>
          </div>
   
    </div>
  )
}

export default DummyDetails
