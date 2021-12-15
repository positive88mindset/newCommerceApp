import React, {useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import NewNavBar from './NavBar/NewNavBar';
import Footer from './footer/Footer';
import './App.css';
import Home from './webPages/Home';
import Contact from './webPages/Contact';
import About from './webPages/About';
import Shop from './webPages/Shop';
import {Router, Routes, Route, Link} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/themes';
import { commerce } from './lib/commerce';
import Cart from './components/Cart';





function App(props) {

  const [cart, setCart] = useState({});

  const fetchCart = async () => {
  
    setCart(await commerce.cart.retrieve())


}
  

  

const handleAddToCart = async(productId, quantity) => {
  
  const item = await commerce.cart.add(productId, quantity);

  setCart(item.cart);


}

  
  useEffect(()=>{

      fetchCart();
  },[]);
  
  console.log(cart);
  



  

  return (

console.log(props),



    document.title = "Fake Store",
<ThemeProvider theme={theme}>

 <div className="App backgroundColor">
            
<header>


<NewNavBar totalitems={cart.total_items} />

<NavBar />
</header>



        <Routes>
            <Route exact path='/' element={<Home totalitems={props.cart}/>}/>
            <Route exact path='/contact' element={<Contact totalitems={props.cart}/>}/>
            <Route exact path='/about' element={<About totalitems={props.cart}/>}/>



           {/* <Route exact path='/shop' element={<Shop cart={cart} handleAddToCart={handleAddToCart}/>}/> */}
           <Route exact path='/cart' element={<Cart cart={props.cart}/>}/>
        </Routes>
<footer>
<Footer/>
</footer>


  </div>


  </ThemeProvider>


  )
}


export default App;