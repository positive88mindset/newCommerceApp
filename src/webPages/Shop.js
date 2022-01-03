import React, {useState, useEffect } from "react";
import { commerce } from '../lib/commerce';
import { Products } from '../components';

import useStyles from './webpage  Styles/shopStyles';

const Shop = (props) => {


const classes = useStyles();

const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    props.setProducts(data);
  
  }
  

  
  useEffect(()=>{
      fetchProducts();
  },[]);



    return (        
        <div className={classes.palette}>
        <div className='container'>
            <h1>SHOP</h1>
        </div>
            <Products products={props.products} onAddToCart={props.handleAddToCart}/>
        </div>
    )

}

export default Shop;
