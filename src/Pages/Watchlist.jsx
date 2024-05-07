import React from 'react'
import { FaCartPlus,FaTimes } from "react-icons/fa";
import './Watchlist.css';

const Watchlist = ({watchlist , addToCart,removeFromWatchlist}) => {


  return (
    <div className='container'>
       {watchlist.length ==0 ?
         <h2 className='no-products'>No There Any Product In WatchList</h2>
      :
        <div className='watchlist'>
        
    
      {watchlist.map(item =>{
        return(
                       <div className='watchlist-product'>
                <img src={item.image ? item.image : item.thumbnail} alt="" />
                <h2>{item.name}</h2>
                <h3>Price:${item.price}</h3>
                <div className='y'>
                    <button onClick={()=>addToCart(item)}><FaCartPlus className='btn-a'></FaCartPlus></button>
                    <button onClick={()=> removeFromWatchlist(item)} ><FaTimes className='btn-b'></FaTimes></button>
                </div>
            </div>
        )
      })}
    </div>
      }
    
    </div>
  )
}

export default Watchlist
