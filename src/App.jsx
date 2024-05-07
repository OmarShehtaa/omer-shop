import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Fake from './Pages/Fake';
import Dummy from './Pages/Dummy';
import FakeDetails from './Pages/FakeDetails';
import DummyDetails from './Pages/DummyDetails';
import Cart from './Pages/Cart';
import Watchlist from './Pages/Watchlist';
import Swal from 'sweetalert2';








const  App =() => {

  let[cartItems , setCartItems] = useState([]);

  let [watchlist , setWatchlist] =useState([]);

  let [dark , setDark ] = useState(false);

    function changeTheme(){
       setDark(!dark);
    }


  function addToCart(product){
 let selectadproduct = cartItems.find(item => item.id == product.id);
        
      

       if(selectadproduct){

            setCartItems(cartItems.map(item=> item.id == product.id ?

               {...selectadproduct , qty : selectadproduct.qty + 1 } : item


            ))
                //  الداله المحذوفه

//            Swal.fire({
//            title: "This Product Already Added In The Cart Before!",
       
//            icon: "warning",
//            showConfirmButton:false,
//            timer: 2000
// });
     


      }else{

         setCartItems([...cartItems,{...product , qty : 1}])
                    Swal.fire({
           title: "This Product Already Added In The Cart Successfully",
       
           icon: "success",
           showConfirmButton:false,
           timer: 2000
});
       }


   
  }

      function removeFromCart(product){
           setCartItems(cartItems.filter(item => item.id !=product.id));
        // console.log('Removed') ;
                   Swal.fire({
           title: "This Product Already Removed From The Cart",
       
           icon: "success",
           showConfirmButton:false,
           timer: 2000
});   
      }

  function addToWatchlist(product){
    setWatchlist([...watchlist , product]);

                   Swal.fire({
           title: "This Product Already Added In The WatchList",
       
           icon: "success",
           showConfirmButton:false,
           timer: 2000
});
           
  }

    function removeFromWatchlist(product){
      setWatchlist(watchlist.filter(item => item.id != product.id))
                         Swal.fire({
           title: "This Product Already Removed From The WatchList",
       
           icon: "success",
           showConfirmButton:false,
           timer: 2000
});
    }

     function decreaseProduct(product){
      let selectedProduct = cartItems.find(item=> item.id==product.id);
           
        if(selectedProduct.qty == 1){
          setCartItems(cartItems.filter(item=> item.id != product.id))
                           Swal.fire({
           title: "This Product Already Removed From The Cart",
       
           icon: "success",
           showConfirmButton:false,
           timer: 2000
});  
        }else{
          setCartItems(cartItems.map(item => item.id == product.id?
            {...selectedProduct,qty:selectedProduct.qty-1} : item
          ))
        }

     }




  return (
   <div className={dark ?'app-dark' : 'app'}>
        <BrowserRouter>
    <Navbar cartItems = {cartItems} watchlist = {watchlist} dark={dark} changeTheme={changeTheme}> </Navbar>
    <Routes >
      <Route path='/' element = {<Home addToWatchlist = {addToWatchlist} addToCart ={ addToCart}/>}/>

      <Route path='/about' element= {<About/>}/>

      <Route path='/shop' element= {<Shop/>}/>

      <Route path='/contact' element= {<Contact/>}/>

      <Route path='/fake' element= {<Fake addToCart= {addToCart} addToWatchlist={addToWatchlist}/>}/>

      <Route path='/dummy' element= {<Dummy addToCart={addToCart}
      addToWatchlist={addToWatchlist}/>}/>

      <Route path='/cart' element= {<Cart cartItems= {cartItems} addToCart={addToCart}removeFromCart={removeFromCart} decreaseProduct={decreaseProduct}/>}/>

      <Route path='/fakeDetails/:id' element= {<FakeDetails addToCart={addToCart}/>}/>

      <Route path='/dummyDetails/:id' element= {<DummyDetails addToCart={addToCart}/>}/>

      <Route path='/watchlist'element = {<Watchlist watchlist ={watchlist} removeFromWatchlist={removeFromWatchlist} addToCart = {addToCart}/>}/>
      
      

    </Routes>
    <Footer></Footer>
    </BrowserRouter>
   </div>
  )
}

export default App


