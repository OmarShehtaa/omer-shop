import React from 'react'
import './FeatureProducts.css';
import Fdata from './Fdata';
import { FaStar,FaHeart,FaCartPlus } from 'react-icons/fa';

const FeatureProducts = ({ addToWatchlist , addToCart }) => {
  return (
    <div className='featureProducts container'>
        <h1 className='title'>FEATURE PRODUCTS</h1>
    <div className="feature-parent">
        {Fdata.map(item =>{
            return(
                <div className='fproduct' key={item.id}>
           <img src={item.image} alt="" />
           <h2>{item.name}</h2>
           <div className='fproduct-price'>
               <h3>${item.price}</h3>
               <h4>${item.prevPrice}</h4>
           </div>
           <div className="fproduct-icons">
            <FaStar className='star-icon'></FaStar>
            <FaStar className='star-icon'></FaStar>
            <FaStar className='star-icon'></FaStar>
            <FaStar className='star-icon'></FaStar>
            <FaStar className='star-icon'></FaStar>
           </div>
           <div className="fproduct-control">
            <FaHeart className='fproduct-btn' onClick={()=> addToWatchlist(item)}></FaHeart>
            <FaCartPlus className ='fproduct-btn' onClick={()=> addToCart(item)}></FaCartPlus>
           </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default FeatureProducts
