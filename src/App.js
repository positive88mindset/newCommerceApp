import React, {useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import NewNavBar from './NavBar/NewNavBar';
import Footer from './footer/Footer';
import './App.css';
import Home from './webPages/Home';
import Contact from './webPages/Contact';
import About from './webPages/About';
import Shop from './webPages/Shop';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import {Router, Routes, Route, Link} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/themes';
import { commerce } from './lib/commerce';
import Cart from './components/Cart/Cart';
import Product_1 from './webPages/Product Pages/Product 1/Product_1';
import NewHome from './webPages/New WebPages/Home/NewHome';


function App(props) {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
}

const handleAddToCart = async(productId, quantity) => {
  const { cart } = await commerce.cart.add(productId, quantity);
  setCart(cart);
}

const handleUpdateCartQty = async(productId, quantity)=>{
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
}

const handleRemoveFromCart = async(productId)=>{

const {cart} = await commerce.cart.remove(productId);
setCart(cart);
}

const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty();
  setCart(cart);
}

const refreshCart = async () =>{
  const newCart = await commerce.cart.refresh();
  setCart(newCart);
}


const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {

try{
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    setOrder(incomingOrder);
    refreshCart();
  } catch (error) {
    setErrorMessage(error.data.error.message)
}

}
  
  useEffect(()=>{

      fetchProducts();
      fetchCart();
  },[]);


console.log(cart);

return (
      console.log(props),
      document.title = "Fake Store",

<ThemeProvider theme={theme}>
 <div className="App backgroundColor">
<header>
<NewNavBar Link={Link} totalitems={cart.total_items} />

<NavBar />
</header>

        <Routes>
            <Route exact path='/' element={<Home totalitems={cart}/>}/>
            <Route exact path='/contact' element={<Contact totalitems={cart}/>}/>
            <Route exact path='/about' element={<About totalitems={cart}/>}/>
           <Route exact path='/shop' element={<Shop cart={cart} products={products} setProducts={setProducts} handleAddToCart={handleAddToCart}/>}/>
           <Route exact path='/cart' element={<Cart cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}/>}/>
        <Route exact path='/checkout' element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}/>}/>


{/* New Webpages with MUI System CSS */}      

<Route exact path='/newhome' element={<NewHome totalitems={cart}/>}/>




{/* Products List */}

<Route exact path='/product_1' element={<Product_1 totalitems={cart}/>}/>




        
        </Routes>

<footer>
<Footer/>
</footer>

  </div>

  </ThemeProvider>



  )
}


export default App;