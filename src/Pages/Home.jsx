import React from 'react'
import Header from '../Components/navbar/header/Header';
import Services from '../Components/Services/Services';
import Categories from '../Components/categories/Categories';
import FeatureProducts from '../Components/featureProducts/FeatureProducts';
import Parthner from '../Components/Parthner/Parthner';


const Home = ({addToWatchlist,addToCart}) => {
  return (
    <div>
          <Header></Header>
      <Services></Services>
      <Categories></Categories>
      <FeatureProducts addToWatchlist = {addToWatchlist} addToCart={addToCart}></FeatureProducts>
      
      <Parthner></Parthner>
    </div>
  )
}

export default Home
