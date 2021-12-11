import React, {useState, useEffect } from "react";
import { commerce } from '../lib/commerce';
import { Products } from '../components';

import NavBar from '../NavBar/NavBar';
import NewNavBar from '../NavBar/NewNavBar';

import useStyles from './webpage  Styles/shopStyles';

const Shop = (props) => {


    const classes = useStyles();
    const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {

    const { data } = await commerce.products.list();
  
    setProducts(data);
  
  }
  



  
  const handleAddToCart = async(productId, quantity) => {
  
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);


}
  
  useEffect(()=>{
      fetchProducts();

  },[]);
  

  



    return (
        
        <div className={classes.palette}>


        <div className='container'>
            <h1>SHOP</h1>
        </div>
            <Products products={products} onAddToCart={props.handleAddToCart}/>

        </div>
    )

}

export default Shop;
